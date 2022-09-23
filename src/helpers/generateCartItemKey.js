export const generateCartItemKey = (item) => {
    const key =
        item.name +
        Object.entries(item.selectedAttributes || [])?.reduce(
            (prev, [key, value]) => prev + key + value,
            ""
        );

    return key.replace(/\s/g, "");
};
