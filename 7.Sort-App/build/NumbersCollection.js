"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumebersCollection = void 0;
class NumebersCollection {
    constructor(data) {
        this.data = data;
    }
    compare(leftIndex, rightIndex) {
        return this.data[leftIndex] > this.data[rightIndex];
    }
    swap(leftIndex, rightIndex) {
        const temp = this.data[leftIndex];
        this.data[leftIndex] = this.data[rightIndex];
        this.data[rightIndex] = temp;
    }
    get length() {
        return this.data.length;
    }
}
exports.NumebersCollection = NumebersCollection;
