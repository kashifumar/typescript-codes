import { Sorter } from "./Sorter.js";
import { NumbersCollection } from "./NumbersCollection.js";
import { CharactersCollection } from "./CharactersCollection.js";
import { LinkedList } from "./LinkedList.js";

// const nc = new NumbersCollection([100000, 3, -5, 0]);
// const sorter = new Sorter(nc);
// nc.display();
// sorter.sort();
// nc.sort();
// nc.display();

// const cc = new CharactersCollection("Xaayb");
// const sorter2 = new Sorter(cc);
// cc.display();
// sorter2.sort();
// cc.sort();
// cc.display();

const ll = new LinkedList();
ll.add(500);
ll.add(-10);
ll.add(-3);
ll.add(41);
ll.display();
// const sorter3 = new Sorter(ll);
// sorter3.sort();
ll.sort();
ll.display();
