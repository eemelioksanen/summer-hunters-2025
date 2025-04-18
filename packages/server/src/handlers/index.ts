import { Context } from '../types/global';

import { getAll } from './character/getAll';
import { update } from './character/update';
import { create } from './character/create';
import { remove } from './character/remove';

// Add functions here to extend Context.handlers. These functions will be available in call stack where Context is available.
// ctx.handlers.character.getAll is just an example. Feel free to refactor and adjust as seen fitting.
// It is also adviseable to think is the database abstraction currently serving our needs.
export const handlerTree = {
  character: {
    getAll,
    update,
    create,
    remove,
  },
};

export const withHandlerTree = (ctx: Omit<Context, 'handlers'>): Context => ({
  ...ctx,
  handlers: handlerTree,
});
