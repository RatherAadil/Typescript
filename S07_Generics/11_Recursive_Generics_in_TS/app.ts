type TreeNode<T> = {
  value: T;
  children?: TreeNode<T>[];
};

let a: TreeNode<string> = {
  value: 'root',
  children: [
    {
      value: 'child-1',
    },
    {
      value: 'child-2',
      children: [
        {
          value: 'child-2A',
        },
      ],
    },
  ],
};
console.log(a.children?.[0]?.value);
