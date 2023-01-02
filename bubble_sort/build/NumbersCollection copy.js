export class NumbersCollection {
    data;
    constructor(data) {
        this.data = data;
    }
    get length() { return this.data.length; }
    compare(leftIndex, rightIndex) {
        return this.data[leftIndex] > this.data[rightIndex];
    }
    swap(leftIndex, rightIndex) {
        const temp = this.data[leftIndex];
        this.data[leftIndex] = this.data[rightIndex];
        this.data[rightIndex] = temp;
    }
    display() {
        console.log(this.data);
    }
}
