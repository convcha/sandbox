import * as clc from 'cli-color';

export interface ILoggable {
  info(message: string): any;

  warn(message: string): any;

  error(message: string): any;
}

export const Loggable = (superclass: any) => {
  class InnerLoggable extends superclass implements ILoggable {
    info(message: string) {
      console.log(clc.blue(`[INFO]${message}`));
    }

    warn(message: string) {
      console.log(clc.yellow(`[WARN]${message}`));
    }

    error(message: string) {
      console.log(clc.red.bold(`[ERROR]${message}`));
    }
  }

  return InnerLoggable;
};
