import { expect } from "chai";
import temperatures from "../src/main";

describe("Functional - Temperatures", () => {
  it("Simple test case", () => {
    const testInput = Object.freeze([1, -2, -8, 4, 5]);
    const expectedResult = 1;
    expect(temperatures(testInput)).to.equal(
      expectedResult,
      JSON.stringify(testInput)
    );
  });

  it("Only negative numbers", () => {
    const testInput = Object.freeze([-12, -5, -137]);
    const expectedResult = -5;
    expect(temperatures(testInput)).to.equal(
      expectedResult,
      JSON.stringify(testInput)
    );
  });

  it("Choose the right temperature", () => {
    const testInput = Object.freeze([42, -5, 12, 21, 5, 24]);
    const expectedResult = 5;
    expect(temperatures(testInput)).to.equal(
      expectedResult,
      JSON.stringify(testInput)
    );
  });

  it("Choose the right temperature", () => {
    const testInput = Object.freeze([42, 5, 12, 21, -5, 24]);
    const expectedResult = 5;
    expect(temperatures(testInput)).to.equal(
      expectedResult,
      JSON.stringify(testInput)
    );
  });

  it("Complex test case", () => {
    const testInput = Object.freeze([-5, -4, -2, 12, -40, 4, 2, 18, 11, 5]);
    const expectedResult = 2;
    expect(temperatures(testInput)).to.equal(
      expectedResult,
      JSON.stringify(testInput)
    );
  });

  it("No temperature", () => {
    const testInput = Object.freeze([]);
    const expectedResult = 0;
    expect(temperatures(testInput)).to.equal(expectedResult, "[]");
  });
});
