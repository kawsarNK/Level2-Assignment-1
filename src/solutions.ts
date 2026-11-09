function multiplyValue(value: number, multiplier: number = 2): number {
  return value * multiplier;
}

function processInput(value: string | number | boolean): string | number {
  if (typeof value === "string") {
    return value.trim().toLowerCase();
  }

  if (typeof value === "number") {
    return value * 10;
  }

  return value ? "Active" : "Inactive";
}