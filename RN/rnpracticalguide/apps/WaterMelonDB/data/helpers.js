import { database } from './database';

const weights = database.collections.get('weights');

export const observeWeights = () => weights.query().observe();

export const saveWeight = async (weight, note) => {
  await database.action(async () => {
    await weights.create(entry => {
      entry.weight = Number(weight);
      entry.note = note;
    });
  });
};
