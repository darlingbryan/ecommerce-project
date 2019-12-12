import { UPATE_COLLECTIONS } from "./shopTypes";

export const updateCollections = collectionsMap => ({
  type: UPATE_COLLECTIONS,
  payload: collectionsMap
});
