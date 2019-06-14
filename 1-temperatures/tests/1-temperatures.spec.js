import { expect } from "chai";
import temperatures from "../src/main";

describe("Temperatures", () => {
  it("Simple test case", () => {
    const testInput = [1, -2, -8, 4, 5];
    const expectedResult = 1;
    expect(temperatures(testInput)).to.equal(
      expectedResult,
      JSON.stringify(testInput)
    );
  });

  it("Only negative numbers", () => {
    const testInput = [-12, -5, -137];
    const expectedResult = -5;
    expect(temperatures(testInput)).to.equal(
      expectedResult,
      JSON.stringify(testInput)
    );
  });

  it("Choose the right temperature", () => {
    const testInput = [42, -5, 12, 21, 5, 24];
    const expectedResult = 5;
    expect(temperatures(testInput)).to.equal(
      expectedResult,
      JSON.stringify(testInput)
    );
  });

  it("Choose the right temperature 2", () => {
    const testInput = [42, 5, 12, 21, -5, 24];
    const expectedResult = 5;
    expect(temperatures(testInput)).to.equal(
      expectedResult,
      JSON.stringify(testInput)
    );
  });

  it("Complex test case", () => {
    const testInput = [-5, -4, -2, 12, -40, 4, 2, 18, 11, 5];
    const expectedResult = 2;
    expect(temperatures(testInput)).to.equal(
      expectedResult,
      JSON.stringify(testInput)
    );
  });

  it("No temperature", () => {
    const testInput = [];
    const expectedResult = 0;
    expect(temperatures(testInput)).to.equal(expectedResult, "[]");
  });
});
