const stringStore = {
    list: ['Aadil', 'Zubair', 'Danish'],
    transformString(index, cb) {
        return cb(this.list[index]);
    },
};
stringStore.transformString(1, (item) => item.toUpperCase());
export {};
