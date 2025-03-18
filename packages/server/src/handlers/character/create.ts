import { Handler } from '../../types/global';
import type { ICharacter } from 'shared/types';

export const create: Handler<{ name: string }, ICharacter | Error> = (
  ctx,
  input,
) =>
  new Promise((resolve, reject) => {
    const { name } = input;
    console.log(input);

    console.log('creating character...');
    const sql = `
            INSERT INTO character (name)
            VALUES (?)
        `;

    const values = [name];

    ctx.globals.db.run(sql, values, function (err) {
      if (err) {
        return reject(err);
      }

      ctx.globals.db.get(
        'SELECT * FROM character WHERE id = ?',
        [this.lastID],
        (err, result) => {
          if (err) {
            return reject(err);
          }
          resolve(result);
        },
      );
    });
  });
