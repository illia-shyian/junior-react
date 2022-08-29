import { actionCategoriesAll } from "./actionCategoriesAll";
import { actionCurrenciesAll } from "./actionCurrenciesAll";

export const actionPageStart = () => async (dispatch, getState) => {
    dispatch(actionCategoriesAll());
    dispatch(actionCurrenciesAll());
};
