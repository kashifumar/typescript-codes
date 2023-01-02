import { Sorter } from "./Sorter.js";
class Node {
    _data;
    _next = null;
    constructor(_data) {
        this._data = _data;
    }
    set next(nextNode) {
        this._next = nextNode;
    }
    get next() {
        return this._next;
    }
    get data() {
        return this._data;
    }
    set data(value) {
        this._data = value;
    }
}
export class LinkedList extends Sorter {
    head = null;
    add(data) {
        const node = new Node(data);
        if (!this.head) {
            this.head = node;
            return;
        }
        let tail = this.head;
        while (tail.next) {
            tail = tail.next;
        }
        tail.next = node;
    }
    get length() {
        if (!this.head) {
            return 0;
        }
        let length = 1;
        let node = this.head;
        while (node.next) {
            length++;
            node = node.next;
        }
        return length;
    }
    at(index) {
        if (!this.head) {
            throw new Error('Index Out Of Bound');
        }
        let counter = 0;
        let node = this.head;
        // let node = this.head;
        while (node) {
            if (counter == index) {
                return node;
            }
            counter++;
            node = node.next;
        }
        throw new Error('Index Out Of Bound');
    }
    compare(leftIndex, rightIndex) {
        if (!this.head) {
            throw new Error('List Is Empty');
        }
        return this.at(leftIndex).data > this.at(rightIndex).data;
    }
    swap(leftIndex, rightIndex) {
        const leftNode = this.at(leftIndex);
        const rightNode = this.at(rightIndex);
        const temp = leftNode.data;
        leftNode.data = rightNode.data;
        rightNode.data = temp;
    }
    display() {
        if (!this.head) {
            return;
        }
        let node = this.head;
        while (node) {
            console.log(node.data);
            node = node.next;
        }
    }
}
