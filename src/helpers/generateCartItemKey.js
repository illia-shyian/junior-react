export const generateCartItemKey = (item) => {
    console.log(item);
    let key =
        item.name +
        Object.entries(item.selectedAttributes || [])?.reduce(
            (prev, [key, value]) => prev + key + value,
            ""
        );
    key = key.replace(/\s/g, "");

    key.includes("Sizeundentified") &&
        console.log("key" + key) &&
        console.log(item);
    return key;
};
