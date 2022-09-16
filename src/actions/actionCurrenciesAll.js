import { gql } from "../helpers";
import { actionPromise } from "../reducers/promiseReducer";

export const actionCurrenciesAll =
    ({ promiseName = "currenciesAll" } = {}) =>
    async (dispatch, getState) => {
        dispatch(
            actionPromise(
                promiseName,
                gql(
                    `query currAll{
                currencies{
                    label symbol
              }
            }`,
                    {}
                )
            )
        );
    };
