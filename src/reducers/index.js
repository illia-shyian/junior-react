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
import {
    overlayReducer,
    actionCloseContentOverlay,
    actionOpenContentOverlay,
} from "./overlayReducer";

export {
    cartReducer,
    actionCartAdd,
    actionCartChange,
    actionCartDelete,
    actionCartClear,
};
export { overlayReducer, actionCloseContentOverlay, actionOpenContentOverlay };
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
        overlay: overlayReducer,
    }),
    applyMiddleware(thunk)
);
