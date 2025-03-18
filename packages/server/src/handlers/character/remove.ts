import { Handler } from '../../types/global';

export const remove: Handler<{ id: number }, { success: boolean } | Error> = (
  ctx,
  input,
) =>
  new Promise((resolve, reject) => {
    const { id } = input;

    console.log(`Deleting character with id: ${id}`);

    const sql = `DELETE FROM character WHERE id = ?`;

    ctx.globals.db.run(sql, [id], function (err) {
      if (err) {
        return reject(err);
      }

      if (this.changes === 0) {
        return reject(new Error('Character not found'));
      }

      resolve({ success: true });
    });
  });
