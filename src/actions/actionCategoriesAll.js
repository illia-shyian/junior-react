import { gql } from "../helpers";
import { actionPromise } from "../reducers/promiseReducer";

export const actionCategoriesAll = ({ promiseName = "categoriesAll" } = {}) =>
    actionPromise(
        promiseName,
        gql(
            `query catAll{
                categories{
                    name 
              }
            }`,
            {}
        )
    );
