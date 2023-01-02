class Sorter {

  // private collection: number[];
  // constructor(collection: number[]) {
  //   this.collection = collection;
  // }

  constructor(private collection: number[] | string) { }
  sort(): void {
    // const length = this.collection.length;
    const { length } = this.collection;
    if (this.collection instanceof Array) {
      for (let i = 0; i < length; i++) {
        for (let j = 0; j < length - i - 1; j++) {
          if (this.collection[j] > this.collection[j + 1]) {
            const temp = this.collection[j];
            this.collection[j] = this.collection[j + 1];
            this.collection[j + 1] = temp;
          }
        }
      }
    }
    else if (typeof this.collection === "string") {

    }
  }
  display(): void {
    console.log(this.collection);
  }
}

const sorter = new Sorter([10, 3, -5, 0]);

sorter.sort();

sorter.display();
console.log("Z".charCodeAt(0));