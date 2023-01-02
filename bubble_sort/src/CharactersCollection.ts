import { Sorter } from "./Sorter.js";

export class CharactersCollection extends Sorter {

  constructor(private data: string) {
    super();
  }

  get length(): number { return this.data.length; }

  compare(leftIndex: number, rightIndex: number): boolean {
    return (this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase());
  }

  swap(leftIndex: number, rightIndex: number): void {
    const characters = this.data.split('');
    const temp = characters[leftIndex];
    characters[leftIndex] = characters[rightIndex];
    characters[rightIndex] = temp;
    this.data = characters.join('');
  }

  display(): void {
    console.log(this.data);
  }
}