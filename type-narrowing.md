Introduction
A union type lets a variable accept more than one kind of value, but it also limits which operations are safe. Type narrowing solves this problem by checking a value at runtime and allowing TypeScript to infer a more specific type within each branch.
Detailed Explanation and Examples
The typeof operator works well with primitives. Consider a value that may be a string or a number:
function normalize(value: string | number): string {
  if (typeof value === "string") {
    return value.trim().toLowerCase();
  }
  return value.toFixed(2);
}
Inside the first branch, TypeScript knows value is a string. After that branch returns, the remaining value must be a number, so toFixed is safe.

For class instances, instanceof is useful:
function describe(input: Date | string): string {
  if (input instanceof Date) {
    return input.toISOString();
  }
  return input;
}
The in operator helps distinguish objects by available properties:
type Editor = { edit: () => void };
type Viewer = { view: () => void };

function openTool(user: Editor | Viewer): void {
  if ("edit" in user) {
    user.edit();
  } else {
    user.view();
  }
}
One detail matters: optional properties may appear on both sides of an in check, so the branches are not always exclusive.
Conclusion
Type narrowing connects runtime checks with compile-time safety. Choosing typeof, instanceof, or in according to the value's shape makes union types practical without unsafe assertions.