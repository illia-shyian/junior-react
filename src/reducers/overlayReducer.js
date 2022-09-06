export function overlayReducer(state = { content: null }, { type, module }) {
    if (type === "OPEN_OVERLAY") {
        return {
            ...state,
            [module]: true,
        };
    }

    if (type === "CLOSE_OVERLAY") {
        return {
            ...state,
            [module]: false,
        };
    }
    return state;
}

export const actionOpenContentOverlay = () => ({
    type: "OPEN_OVERLAY",
    module: "content",
});

export const actionCloseContentOverlay = () => ({
    type: "CLOSE_OVERLAY",
    module: "content",
});
