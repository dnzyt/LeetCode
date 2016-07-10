/*
Design a stack that supports push, pop, top and retrieving the minimum element in constant time.
*/


public class MinStack {
	private Stack<Integer> stack;
	private Stack<Integer> minStack;

	public MinStack() {
		stack = new Stack<Integer>();
		minStack = new Stack<Integer>();
	}

	public void push(int x) {
		stack.push(x);
		if (minStack.isEmpty()) {
			minStack.push(x);
		} else {
			minStack.push(Math.min(x, minStack.peek()));
		}
	}

	public void pop() {
		minStack.pop();
		stack.pop();
	}

	public int top() {
		return stack.peek();
	}

	public int getMin() {
		return minStack.peek();
	}
}