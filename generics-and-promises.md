Introduction:
Generics let a function preserve information about the type of data it receives instead of treating everything as a broad type. This is especially important for asynchronous operations, where a Promise eventually produces a result whose shape should remain predictable.
Detailed Explanation and Examples
A generic function declares a type parameter such as T. The caller can supply that type, or TypeScript can often infer it:
function firstItem<T>(items: T[]): T | undefined {
  return items[0];
}

const name = firstItem(["Rina", "Nabil"]);

Here, the result is string | undefined, because an array might be empty. The function also works with numbers or custom objects without rewriting its implementation.

A Promise<T> represents an asynchronous operation that resolves with a value of type T. We can combine it with a generic helper for loading JSON:
async function loadJson<T>(url: string): Promise<T> {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Request failed: ${response.status}`);
  }
  return (await response.json()) as T;
}

type Profile = { id: number; name: string };
const profile = loadJson<Profile>("/api/profile");

The resulting variable has type Promise<Profile>, and awaiting it gives a Profile. However, the assertion does not validate server data at runtime; untrusted responses still need schema checking before use.
Conclusion :
Generics provide reuse without sacrificing type relationships. Paired with Promise<T>, they give asynchronous code clearer contracts, better editor assistance, and fewer accidental type mismatches.