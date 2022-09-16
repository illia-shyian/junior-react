import { getGQL } from "./GraphQL";
import { generateCartItemKey } from "./generateCartItemKey";
import { updateQueryParams } from "./updateQueryParams";
import { getPrice } from "./getPrice";
import { getFullCurrency } from "./getFullCurrency";
import { getCurrentCurrency } from "./getCurrentCurrency";
export const backendURL = "http://localhost:4000";
export const gql = getGQL(backendURL + "/graphql/");

export {
    getFullCurrency,
    getPrice,
    generateCartItemKey,
    updateQueryParams,
    getCurrentCurrency,
};
