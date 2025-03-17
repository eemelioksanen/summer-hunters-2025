import { Handler } from '../../types/global';
import type { ICharacter } from 'shared/types';

export const getAll: Handler<unknown, ICharacter[] | Error> = (ctx, _input) =>
  new Promise((resolve, reject) => {
    return ctx.globals.db.all('SELECT * FROM character', [], (err, result) => {
      if (err) {
        reject(err);
      }
      resolve(result);
    });
  });
