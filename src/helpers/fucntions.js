const shorten = (item) => {
    const splittedItem = item.split(' ');
    const newItem = `${splittedItem[0]} ${splittedItem[1]} ${splittedItem[2]}`;
    return newItem;
}

export { shorten };