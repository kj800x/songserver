import * as batchFetch from "./batchFetch";
import DataLoader from "dataloader";

export const buildDataLoaders = () => ({
  songLoader: new DataLoader(batchFetch.Song),
  tagLoader: new DataLoader(batchFetch.Tag),
});
