public class MyBSTree<T extends Comparable <T>> implements ITree<T> {
	private Node root;
    private int size;

    class Node{
        public T data;
        public Node left = null;
        public Node right = null;
        public Node(T data){
            this.data=data;
        }
        public void insert(T value) {
            size++;
            if(root==null) {
                root = new Node(value);
            }
            else insert2(root, value);
    }
    }

    public boolean containsItem(T value) {
        return contains(root, value);
    }

    public int getSize() {
        return size;
    }

    public void printInOrder(){
        inOrder(root);
    }

    public String toString() {
        return toString(root);
    }

private void insert2(Node node, T value) {
    if(value.compareTo(node.data) <= 0) {
        if(node.left == null) node.left = new Node(value);
            else insert2(node.left, value);
        } else {
            if(node.right == null) node.right = new Node(value);
            else insert2(node.right, value);
        }

}

private boolean contains(Node node, T value) {
    if (value.compareTo(node.data) == 0) {
        return true;
    } else if (value.compareTo(node.data) < 0) {
        if (node.left == null) return false;
        else return contains(node.left, value);
    } else {
        if (node.right == null) return false;
        else return contains(node.right, value);
    }
}

private void inOrder(Node node) {
    if (node == null) {
      return;
    } 
    inOrder(node.left);
    System.out.printf("%s ", node.data);
    inOrder(node.right);
}

private String toString(Node node) {
    String result = "";
    if (node == null) {
        return "";
      } 
      result += toString(root.left);
      result += root.toString();
      result += toString(root.right);
    return result;
}

}
