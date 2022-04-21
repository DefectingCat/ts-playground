type TreeNode = {
  value: string;
};

type LeafNode = {
  isLeaf: boolean;
} & TreeNode;

type InnerNode = {
  children: [TreeNode] | [TreeNode, TreeNode];
} & TreeNode;

function mapNode<T extends TreeNode>(node: T, fn: (v: string) => string): T {
  return {
    ...node,
    value: fn(node.value),
  };
}

const a: TreeNode = { value: 'a' };
const b: LeafNode = { value: 'b', isLeaf: true };
const c: InnerNode = { value: 'c', children: [a, b] };

mapNode(a, (v) => v.toUpperCase());
mapNode(b, (v) => v.toUpperCase());
mapNode(c, (v) => v.toUpperCase());
