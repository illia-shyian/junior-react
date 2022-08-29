function feedReducer(state = { payload: [] }, { type, payload = [] }) {
    if (type === "FEED_ADD") {
        return {
            ...state,
            payload: [...new Map([...state["payload"], ...payload].map((item) => [item["_id"], item])).values()],
        };
    }

    if (type === "FEED_CLEAR") {
        return { payload: [] };
    }
    return state || { payload: [] };
}

const actionFeedAdd = (payload) => ({ type: "FEED_ADD", payload });
const actionFeedClear = () => ({ type: "FEED_CLEAR" });

export { actionFeedClear, actionFeedAdd, feedReducer };
