import { history } from "../App";
import { getFullCurrency } from "./getFullCurrency";

export const getCurrentCurrency = () => {
    const search = history.location?.search || null;
    const currencyValue = search
        ? new URLSearchParams(search).get("currency")
        : null;

    return getFullCurrency(currencyValue) || null;
};
