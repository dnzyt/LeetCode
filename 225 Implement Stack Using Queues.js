var Stack = function() {
	this.queue1 = [];
	this.queue2 = [];
}

Stack.prototype.push = function(x) {
	if (this.queue1.length === 0) {
		this.queue2.push(x);
		return;
	}
	if (this.queue2.length === 0) {
		this.queue1.push(x);
		return;
	}
	return;
};

Stack.prototype.pop = function() {
	if (this.queue1.length === 0 && this.queue2.length === 0) {
		return;
	}
	if (this.queue1.length === 0) {
		while (this.queue2.length !== 1) {
			this.queue1.push(this.queue2.shift());
		}
		this.queue2.pop();
		return;
	}
	if (this.queue2.length === 0) {
		while (this.queue1.length !== 1) {
			this.queue2.push(this.queue1.shift());
		}
		this.queue1.pop();
		return;
	}
};

Stack.prototype.top = function() {
	if (this.queue1.length === 0 && this.queue2.length === 0) {
		return null;
	}
	if (this.queue1.length === 0) {
		while (this.queue2.length !== 1) {
			this.queue1.push(this.queue2.shift());
		}
		let a = this.queue2.pop();
		this.queue1.push(a);
		return a;
	}
	if (this.queue2.length === 0) {
		while (this.queue1.length !== 1) {
			this.queue2.push(this.queue1.shift());
		}
		let a = this.queue1.pop();
		this.queue2.push(a);
		return a;
	}
};

Stack.prototype.empty = function() {
	if (this.queue1.length === 0 && this.queue2.length === 0) {
		return true;
	}
	return false;
};