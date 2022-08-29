import { getGQL } from "./GraphQL";

export const backendURL = "http://localhost:4000";
export const gql = getGQL(backendURL + "/graphql/");
