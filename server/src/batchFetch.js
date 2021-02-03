import { db } from "./db";

function order(data, ordering, orderingKey = "id") {
  return ordering.map((id) => data.find((datum) => datum[orderingKey] === id));
}

const SONG = db.prepareIn("SELECT * FROM Song WHERE id IN (!?!)");
const TAG = db.prepareIn("SELECT * FROM Tag WHERE id IN (!?!)");

export async function SONG(ids) {
  const result = SONG.all(ids);
  return order(result, ids);
}
export async function Tag(ids) {
  const result = TAG.all(ids);
  return order(result, ids);
}
