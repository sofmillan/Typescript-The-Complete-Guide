import { Sorter } from "./Sorter";
import { NumebersCollection } from "./NumbersCollection";

const numbersCollection = new NumebersCollection([10,3,-2,50]);
const sorter = new Sorter(numbersCollection);
sorter.sort();
console.log(numbersCollection.data);