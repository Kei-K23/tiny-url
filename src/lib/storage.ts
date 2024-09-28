import { URLMapping } from "@/type";

export function setStorageItems(key: string, value: URLMapping) {
  // Retrieve existing array from localStorage or initialize an empty array
  const existingItems = JSON.parse(
    localStorage.getItem(key) || "[]"
  ) as URLMapping[];

  // Ensure the array only contains unique items
  if (!existingItems.some((item) => item.shortUrl === value.shortUrl)) {
    existingItems.push(value);
  }

  // Store the updated array back to localStorage
  localStorage.setItem(key, JSON.stringify(existingItems));
}
