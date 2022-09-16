import { getFullCurrency } from "./getFullCurrency";

export const getPrice = (currencyValue, product) => {
    const currency = getFullCurrency(currencyValue);

    const price = product?.prices?.find(
        (price) => price?.currency?.label === currency?.label
    );

    return price;
};
