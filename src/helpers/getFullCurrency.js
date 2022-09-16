import { store } from "../reducers";

export const getFullCurrency = (currency) => {
    let currencies = store.getState().promise?.currenciesAll?.payload || null;

    if (!currencies) {
        return null;
    }

    const currCurrency =
        (currencies || [])?.find(
            (curr) => curr?.label === currency || curr?.label === currency
        ) ||
        currencies[0] ||
        null;

    return currCurrency;
};
