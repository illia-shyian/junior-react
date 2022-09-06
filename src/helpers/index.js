import { getGQL } from "./GraphQL";
import { generateCartItemKey } from "./generateCartItemKey";

export const backendURL = "http://localhost:4000";
export const gql = getGQL(backendURL + "/graphql/");

export { generateCartItemKey };
