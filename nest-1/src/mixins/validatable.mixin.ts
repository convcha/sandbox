import * as clc from 'cli-color';

export interface IValidatable {
  validate(): boolean;
}

export const Validatable = (superclass: any) => {
  class InnerValidatable extends superclass implements IValidatable {
    validate(): boolean {
      console.log(clc.blue('validated'));
      return false;
    }
  }

  return InnerValidatable;
};
