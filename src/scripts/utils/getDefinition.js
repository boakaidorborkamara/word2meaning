import { fetchData } from "./fectchData";
let baseURL = "https://api.dictionaryapi.dev/api/v2/entries/en/";

/**
 *
 * @param {text} prop
 */
export const getDefinition = (prop) => {
  let definition = fetchData(`${baseURL}${prop}`);
  return definition;
};
