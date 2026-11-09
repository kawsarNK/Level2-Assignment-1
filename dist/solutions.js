"use strict";
function multiplyValue(value, multiplier = 2) {
    return value * multiplier;
}
function processInput(value) {
    if (typeof value === "string") {
        return value.trim().toLowerCase();
    }
    if (typeof value === "number") {
        return value * 10;
    }
    return value ? "Active" : "Inactive";
}
