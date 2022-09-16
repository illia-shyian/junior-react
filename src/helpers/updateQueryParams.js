import { history } from "../App";

export const updateQueryParams = (newQueryParams) => {
    const searchParams = { ...new URLSearchParams(history.search) };
    history.push({
        search:
            "?" +
            new URLSearchParams({
                ...searchParams,
                ...newQueryParams,
            }).toString(),
    });
};
