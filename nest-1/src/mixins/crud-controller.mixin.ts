import { Body, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { Identifiable } from '../types';
import { ILoggable, Loggable } from './loggable.mixin';
import { mix } from './mixin';
import { Validatable } from './validatable.mixin';

export const CrudController = <T extends Identifiable>(superclass: any) => {
  // noinspection JSUnusedLocalSymbols
  // interface InnerCrudController extends ILoggable {}

  class InnerCrudController extends mix(superclass).with(Loggable).with(Validatable).build() {
    records: T[] = [];

    @Post()
    create(@Body() record: T) {
      this.records.push(record);
      this.info('create');
    }

    @Get()
    readAll(): T[] {
      this.info('readAll');
      return this.records;
    }

    @Get(':id')
    readOne(@Param('id') id: number): T {
      const result = this.records.filter(r => r.id === id)[0];

      if (result) {
        this.info('readOne');
        return result;
      } else {
        this.warn('readOne: record not found!');
        return {} as T;
      }
    }

    @Patch(':id')
    update(@Param('id') id: number, @Body() record: T) {
      const i = this.records.findIndex(r => r.id === id);
      this.records[i] = record;
      this.info('update');
    }

    @Delete(':id')
    delete(@Param('id') id: number) {
      const i = this.records.findIndex(r => r.id === id);
      this.records.splice(i, 1);
      this.info('delete');
    }
  }

  return InnerCrudController;
};
