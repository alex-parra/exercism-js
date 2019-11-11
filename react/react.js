
/**
 * A BroadcastingCell is an abstract class meant to be extended
 * It enables subclasses to notify their subscribers of an effective value change
 * Subscribers must implement the onChange method
 */
class BroadcastingCell {
  constructor() {
    if (new.target === BroadcastingCell) throw new TypeError('Cannot construct BroadcastingCell instances directly');

    this.subscribers = new Set();
  }

  addCallback(cb) {
    if (typeof cb.onChange !== 'function') throw new TypeError('cb must implement onChange');
    this.subscribers.add(cb);
  }

  removeCallback(cb) {
    this.subscribers.delete(cb);
  }

  /**
   * Notifies all subscribers (calls 'onChange' method) if the value has effectively changed
   */
  broadcastChange(oldValue, newValue) {
    if (oldValue === newValue) return;
    this.subscribers.forEach(cb => cb.onChange(this));
  }
}

/**
 * An InputCell has a value of it's own and supports subscribers by extending BroadcastingCell
 */
export class InputCell extends BroadcastingCell {
  constructor(value) {
    if( typeof value !== 'number' ) throw new TypeError('InputCell must have an number as initial value');

    super();
    this.oldValue = this.value;
    this.value = value;
  }

  setValue(newValue) {
    this.oldValue = this.value;
    this.value = newValue;
    this.broadcastChange(this.oldValue, this.value);
  }
}

/**
 * A ComputeCell's value is computed from it's child's values and a mutator function
 * ComputeCell's can wrap other ComputeCell's
 * It extends BroadcastingCell so it can have subscribers that get notified when it's value effectively changes
 */
export class ComputeCell extends BroadcastingCell {
  constructor(children, fn) {
    if (!Array.isArray(children)) throw new TypeError('children must be an array');
    if (typeof fn !== 'function') throw new TypeError('fn must be a function');

    super();
    this.children = [...children];
    this.mutator = fn;
    this.oldValue = this.value;
    this.children.forEach(child => child.addCallback(this));
  }

  /**
   * The value of ComputeCell's must be determined 'on-the-fly' in order to support ComputedCell childs and sync updates
   * If we moved to async updates, then we could cache and recalculate at the event loop (micro or macro task)
   */
  get value() {
   return this.mutator(this.children);
  }

  onChange(cell) {
    this.broadcastChange(this.oldValue, this.value);
    this.oldValue = this.value;
  }
}

/**
 * CallbackCells store a list of their parent cell value as they effectively change
 */
export class CallbackCell {
  constructor(fn) {
    this.mutator = fn;
    this.values = [];
  }

  onChange(cell) {
    this.values.push(this.mutator(cell));
  }
}
