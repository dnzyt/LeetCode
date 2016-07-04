/*
Implement the following operations of a queue using stacks. 
• push(x) -- Push element x to the back of queue. 
• pop() -- Removes the element from in front of queue. 
• peek() -- Get the front element. 
• empty() -- Return whether the queue is empty. 
*/

/*
Dump data between two stacks.
*/

var Queue = function () {
	this.stack1 = [];
	this.stack2 = [];
}

Queue.prototype.push = function(x) {
	let len = this.stack2.length;
	while(len--) {
		this.stack1.push(this.stack2.pop());
	}
	this.stack1.push(x);
};

Queue.prototype.pop = function() {
	let len = this.stack1.length;
	while(len-- > 0) {
		this.stack2.push(this.stack1.pop());
	}
	return this.stack2.pop();
};

Queue.prototype.peek = function() {
	let len = this.stack1.length;
	while(len-- >  0) {
		this.stack2.push(this.stack1.pop());
	}
	return this.stack2[this.stack2.length - 1];
};

Queue.prototype.empty = function() {
	return this.stack1.length === 0 && this.stack2.length === 0;
};