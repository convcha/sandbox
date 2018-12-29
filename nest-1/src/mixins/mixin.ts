import { ILoggable } from './loggable.mixin';
import { IValidatable } from './validatable.mixin';

export const mix = (superclass: any) => new MixinBuilder(superclass);

class MixinBuilder<T> {
  constructor(private readonly superclass: T) {
    this.superclass = superclass;
  }

  // with(...mixins: any[]): typeof Object {
  //   return mixins.reduce((c, mixin) => mixin(c), this.superclass);
  // }

  // with<T, U extends (...args: any[]) => T>(...mixins: U[]): ReturnType<U> {
  //   return mixins.reduce((c, mixin) => mixin(c), this.superclass);
  // }

  // with<T extends (<U>(...args: any[]) => U)[]>(...mixins: T): ReturnType<T> {
  //   return mixins.reduce((c, mixin) => mixin(c), this.superclass);
  // }

  with<U extends ((...args: any[]) => any)>(mixin: U): MixinBuilder<ReturnType<U>> {
    return mix(mixin(this.superclass));
  }

  build(): T {
    return ILoggable & IValidatable;
  }
}
