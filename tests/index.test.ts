import { MergeFunction } from "../src/index";

let mergeInstance = new MergeFunction();
describe("Testing merge function", () => {
  test("Empty arrays", () => {
    let result = mergeInstance.merge([], []);
    let expected: number[] = [];
    expect(result).toStrictEqual(expected);
  });

  test("Array 1 all lesser values", () => {
    let result = mergeInstance.merge([1, 2, 3], [4, 5, 6]);
    let expected: number[] = [1, 2, 3, 4, 5, 6];
    expect(result).toStrictEqual(expected);
  });

  test("Array 1 all greater values", () => {
    let result = mergeInstance.merge([4, 5, 6], [1, 2, 3]);
    let expected: number[] = [1, 2, 3, 4, 5, 6];
    expect(result).toStrictEqual(expected);
  });

  test("Array 1 empty", () => {
    let result = mergeInstance.merge([], [1, 2, 3]);
    let expected: number[] = [1, 2, 3];
    expect(result).toStrictEqual(expected);
  });

  test("Array 2 empty", () => {
    let result = mergeInstance.merge([1, 2, 3], []);
    let expected: number[] = [1, 2, 3];
    expect(result).toStrictEqual(expected);
  });

  test("Alternating values same length", () => {
    let result = mergeInstance.merge([1, 3, 5], [2, 4, 6]);
    let expected: number[] = [1, 2, 3, 4, 5, 6];
    expect(result).toStrictEqual(expected);
  });

  test("Same values", () => {
    let result = mergeInstance.merge([1, 2, 2, 3, 4, 5], [1, 2, 2, 3, 4, 5]);
    let expected: number[] = [1, 1, 2, 2, 2, 2, 3, 3, 4, 4, 5, 5];
    expect(result).toStrictEqual(expected);
  });

  test("Array 2 larger than array 1", () => {
    let result = mergeInstance.merge([1, 5, 10], [1, 2, 5, 6, 9, 10, 11]);
    let expected: number[] = [1, 1, 2, 5, 5, 6, 9, 10, 10, 11];
    expect(result).toStrictEqual(expected);
  });

  test("Array 1 larger than array 2", () => {
    let result = mergeInstance.merge([2, 4, 5, 6, 8, 10, 12], [1, 4, 7]);
    let expected: number[] = [1, 2, 4, 4, 5, 6, 7, 8, 10, 12];
    expect(result).toStrictEqual(expected);
  });
});
