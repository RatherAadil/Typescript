interface Store<T> {
  list: T[];
  transformString<U>(index: number, cb: (item: T) => U): U;
}

const strStore: Store<string> = {
  list: ['Aadil', 'Zubair', 'Danish'],
  transformString(index, cb) {
    return cb(this.list[index]);
  },
};
const numStore: Store<number> = {
  list: [1, 2, 3, 4, 5],
  transformString(index, cb) {
    return cb(this.list[index]);
  },
};
const result = strStore.transformString(1, (item) => item.toUpperCase());
const result2 = numStore.transformString(1, (item) => item.toFixed());

console.log(result, result2);
