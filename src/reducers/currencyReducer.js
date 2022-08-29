export function currencyReducer(
    state = { selected: null },
    { type, currency }
) {
    if (type === "SET_SELECTED_CURRENCY") {
        return {
            ...state,
            selected: currency,
        };
    }

    if (type === "CURRENCY_CLEAR") {
        return {};
    }

    return state;
}

export const actionCurrencySetSelected = (currency) => ({
    type: "SET_SELECTED_CURRENCY",
    currency,
});
