/*
Given a nested list of integers, implement an iterator to flatten it.

Each element is either an integer, or a list -- whose elements may also be integers or other lists.

Example 1:
Given the list [[1,1],2,[1,1]],

By calling next repeatedly until hasNext returns false, the order of elements returned by next should be: [1,1,2,1,1].

Example 2:
Given the list [1,[4,[6]]],

By calling next repeatedly until hasNext returns false, the order of elements returned by next should be: [1,4,6].
*/


function NestedInteger() {
    this.isInteger = function () {

    };

    this.getInteger = function () {

    };

    this.getList = function () {

    };
}


var NestedIterator = function (nestedList) {
    this.stack = [];
    for (let i = nestedList.length - 1; i >= 0; i--) {
        this.stack.push(nestedList[i]);
    }
}

NestedIterator.prototype.hasNext = function () {
    while (this.stack.length !== 0) {
        if (this.stack.slice(-1)[0].isInteger()) {
            return true;
        }

        let topArr = this.stack.pop().getList();
        for (let i = topArr.length - 1; i >= 0; i--) {
            this.stack.push(topArr[i]);
        }
    }
    return false;
};

NestedIterator.prototype.next = function () {
    return this.stack.pop().getInteger();
};
