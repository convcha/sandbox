import { Controller } from '@nestjs/common';
import { BaseController } from './base.controller';
import { CrudController } from './mixins/crud-controller.mixin';
import { mix } from './mixins/mixin';
import { User } from './types';

const crudController = (superclass: any) => CrudController<User>(superclass);

@Controller('users')
export class UsersController extends mix(BaseController).with(crudController) {}
