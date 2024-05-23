import { test, expect } from "vitest";

function add(a, b) {
  return a + b;
}

test("add function adds two numbers", function () {
  const result = add(1, 2);
  const expected = 3;
  expect(result).toBe(expected);
});
