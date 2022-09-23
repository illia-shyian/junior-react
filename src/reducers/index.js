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
import {
    overlayReducer,
    actionCloseContentOverlay,
    actionOpenContentOverlay,
} from "./overlayReducer";
import { currencyReducer, actionSetSelectedCurrency } from "./currencyReducer";

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
export { actionSetSelectedCurrency };

export const store = createStore(
    combineReducers({
        promise: promiseReducer,
        cart: cartReducer,
        feed: feedReducer,
        overlay: overlayReducer,
        currency: currencyReducer,
    }),
    applyMiddleware(thunk)
);

store.subscribe(() => console.log(store.getState()));

store.subscribe(
    () => (localStorage.cart = JSON.stringify(store.getState()?.cart || {}))
);
