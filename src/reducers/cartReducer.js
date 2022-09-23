import { generateCartItemKey } from "../helpers";

export function cartReducer(state = undefined, { type, product, count = 1 }) {
    if (!state) {
        state = JSON.parse(localStorage?.cart || "{}");
        console.log(state);
    }
    if (count <= 0) {
        type = "CART_DELETE";
    }

    if (type === "CART_ADD") {
        return {
            ...state,
            [generateCartItemKey(product)]: {
                product,
                count:
                    [generateCartItemKey(product)] in state
                        ? state[generateCartItemKey(product)].count + count
                        : count,
            },
        };
    }
    if (type === "CART_CHANGE") {
        console.log(generateCartItemKey(product));
        return {
            ...state,
            [generateCartItemKey(product)]: {
                product,
                count: count,
            },
        };
    }
    if (type === "CART_DELETE") {
        let { [generateCartItemKey(product)]: toRemove, ...newState } = state;
        return newState;
    }
    if (type === "CART_CLEAR") {
        return {};
    }
    return state;
}

export const actionCartAdd = (product, count = 1) => ({
    type: "CART_ADD",
    product,
    count: +count,
});
export const actionCartChange = (product, count = 1) => ({
    type: "CART_CHANGE",
    product,
    count: +count,
});
export const actionCartDelete = (product) => ({ type: "CART_DELETE", product });
export const actionCartClear = () => ({ type: "CART_CLEAR" });
