import { Sorter } from "./Sorter.js";
export class CharactersCollection extends Sorter {
    data;
    constructor(data) {
        super();
        this.data = data;
    }
    get length() { return this.data.length; }
    compare(leftIndex, rightIndex) {
        return (this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase());
    }
    swap(leftIndex, rightIndex) {
        const characters = this.data.split('');
        const temp = characters[leftIndex];
        characters[leftIndex] = characters[rightIndex];
        characters[rightIndex] = temp;
        this.data = characters.join('');
    }
    display() {
        console.log(this.data);
    }
}
