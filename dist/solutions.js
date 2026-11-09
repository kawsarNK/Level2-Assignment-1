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
function formatCoordinate(coordinate) {
    const [latitude, longitude, locationName] = coordinate;
    return `Location: ${locationName} (${latitude}, ${longitude})`;
}
function concatenateArrays(...arrays) {
    return arrays.flat();
}
function getPopularCourses(courses, minStudents) {
    return courses.filter((course) => course.isPublished && course.students >= minStudents);
}
function pluckValues(items, key) {
    return items.map((item) => item[key]);
}
class Employee {
    name;
    baseSalary;
    constructor(name, baseSalary) {
        this.name = name;
        this.baseSalary = baseSalary;
    }
    getDetails() {
        return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
    }
}
class Manager extends Employee {
    department;
    constructor(name, baseSalary, department) {
        super(name, baseSalary);
        this.department = department;
    }
    getRoleInfo() {
        return `Manager of ${this.department}: ${this.name}`;
    }
}
async function validateAgeAsync(age) {
    if (age < 18) {
        throw new Error("Access Denied: Must be 18 or older");
    }
    return new Promise((resolve) => {
        setTimeout(() => resolve("Access Granted"), 1000);
    });
}
