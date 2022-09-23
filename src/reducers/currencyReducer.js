export function currencyReducer(
    state = { selectedCurrency: null },
    { type, currency }
) {
    if (type === "SET_SELECTED_CURRENCY") {
        return {
            ...state,
            selectedCurrency: currency,
        };
    }
    return state;
}

export const actionSetSelectedCurrency = (currency) => ({
    type: "SET_SELECTED_CURRENCY",
    currency,
});
