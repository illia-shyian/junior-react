import { createStore, combineReducers, applyMiddleware } from "redux";

import thunk from "redux-thunk";

import {
    promiseReducer,
    actionPending,
    actionFulfilled,
    actionRejected,
    actionPromise,
    actionPromiseClear,
} from "./promiseReducer";
import {
    cartReducer,
    actionCartAdd,
    actionCartChange,
    actionCartDelete,
    actionCartClear,
} from "./cartReducer";
import { actionFeedClear, actionFeedAdd, feedReducer } from "./feedReducer";
import { actionCurrencySetSelected, currencyReducer } from "./currencyReducer";

export {
    cartReducer,
    actionCartAdd,
    actionCartChange,
    actionCartDelete,
    actionCartClear,
};
export {
    promiseReducer,
    actionPending,
    actionFulfilled,
    actionRejected,
    actionPromise,
    actionPromiseClear,
};
export { actionFeedClear, actionFeedAdd, feedReducer };
export { actionCurrencySetSelected };
export const store = createStore(
    combineReducers({
        promise: promiseReducer,
        cart: cartReducer,
        feed: feedReducer,
        currency: currencyReducer,
    }),
    applyMiddleware(thunk)
);
