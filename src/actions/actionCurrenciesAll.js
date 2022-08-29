import { gql } from "../helpers";
import { actionCurrencySetSelected } from "../reducers";
import { actionPromise } from "../reducers/promiseReducer";

export const actionCurrenciesAll =
    ({ promiseName = "currenciesAll" } = {}) =>
    async (dispatch, getState) => {
        const currencies = await dispatch(
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

        const {
            currency: { selected = null },
        } = getState() || {};

        if (!selected && currencies?.length > 0) {
            await dispatch(actionCurrencySetSelected(currencies[0]));
        }
    };
