import { Handler } from '../../types/global';
import type { ICharacter } from 'shared/types';

export const update: Handler<ICharacter, ICharacter | Error> = (ctx, input) =>
  new Promise((resolve, reject) => {
    const { id, name, age, health, hunger, happiness, energy } = input;
    const fieldsToUpdate = [];
    const values = [];
    if (name !== undefined) {
      fieldsToUpdate.push('name = ?');
      values.push(name);
    }
    if (age !== undefined) {
      fieldsToUpdate.push('age = ?');
      values.push(age);
    }
    if (health !== undefined) {
      fieldsToUpdate.push('health = ?');
      values.push(health);
    }
    if (hunger !== undefined) {
      fieldsToUpdate.push('hunger = ?');
      values.push(hunger);
    }
    if (happiness !== undefined) {
      fieldsToUpdate.push('happiness = ?');
      values.push(happiness);
    }
    if (energy !== undefined) {
      fieldsToUpdate.push('energy = ?');
      values.push(energy);
    }

    if (fieldsToUpdate.length === 0) {
      return reject(new Error('No fields to update'));
    }

    values.push(id);

    const sql = `UPDATE character SET ${fieldsToUpdate.join(
      ', ',
    )} WHERE id = ?`;

    ctx.globals.db.run(sql, values, function (err) {
      if (err) {
        return reject(err);
      }
      if (this.changes === 0) {
        return reject(new Error('Character not found'));
      }

      ctx.globals.db.get(
        'SELECT * FROM character WHERE id = ?',
        [id],
        (err, result) => {
          if (err) {
            return reject(err);
          }
          resolve(result);
        },
      );
    });
  });
