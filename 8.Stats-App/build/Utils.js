"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateStringToDate = void 0;
const dateStringToDate = (dateString) => {
    const dateFragments = dateString
        .split('/')
        .map((value) => {
        return parseInt(value);
    });
    return new Date(dateFragments[2], dateFragments[1] - 1, dateFragments[0]);
};
exports.dateStringToDate = dateStringToDate;
