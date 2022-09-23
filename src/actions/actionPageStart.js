import { getCurrentCurrency } from "../helpers";
import { actionSetSelectedCurrency } from "../reducers";
import { actionCategoriesAll } from "./actionCategoriesAll";
import { actionCurrenciesAll } from "./actionCurrenciesAll";

export const actionPageStart = () => async (dispatch, getState) => {
    const currency = getCurrentCurrency();

    dispatch(actionCurrenciesAll());
    const categoriesAllResp = await dispatch(actionCategoriesAll());

    if (currency) {
        dispatch(actionSetSelectedCurrency(currency));
    } else if (categoriesAllResp?.payload?.length) {
        dispatch(actionSetSelectedCurrency(categoriesAllResp[0]));
    }
};
