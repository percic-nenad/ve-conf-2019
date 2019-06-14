import { expect } from "chai";
import chuckNorris from "../src/main";

describe("Functional - Chuck Norris", () => {
  it("Character C", () => {
    const testInput = Object.freeze("C");
    const expectedResult = "0 0 00 0000 0 00";
    expect(chuckNorris(testInput)).to.equal(expectedResult, testInput);
  });
  it("Message CC", () => {
    const testInput = Object.freeze("CC");
    const expectedResult = "0 0 00 0000 0 000 00 0000 0 00";
    expect(chuckNorris(testInput)).to.equal(expectedResult, testInput);
  });
  it("Character %", () => {
    const testInput = Object.freeze("%");
    const expectedResult = "00 0 0 0 00 00 0 0 00 0 0 0";
    expect(chuckNorris(testInput)).to.equal(expectedResult, testInput);
  });
  it("Message from Chuck Norris", () => {
    const testInput = Object.freeze(
      "Chuck Norris' keyboard has 2 keys: 0 and white space."
    );
    const expectedResult =
      "0 0 00 0000 0 0000 00 0 0 0 00 000 0 000 00 0 0 0 00 0 0 000 00 000 0 0000 00 0 0 0 00 0 0 00 00 0 0 0 00 00000 0 0 00 00 0 000 00 0 0 00 00 0 0 0000000 00 00 0 0 00 0 0 000 00 00 0 0 00 0 0 00 00 0 0 0 00 00 0 0000 00 00 0 00 00 0 0 0 00 00 0 000 00 0 0 0 00 00000 0 00 00 0 0 0 00 0 0 0000 00 00 0 0 00 0 0 00000 00 00 0 000 00 000 0 0 00 0 0 00 00 0 0 000000 00 0000 0 0000 00 00 0 0 00 0 0 00 00 00 0 0 00 000 0 0 00 00000 0 00 00 0 0 0 00 000 0 00 00 0000 0 0000 00 00 0 00 00 0 0 0 00 000000 0 00 00 00 0 0 00 00 0 0 00 00000 0 00 00 0 0 0 00 0 0 0000 00 00 0 0 00 0 0 00000 00 00 0 0000 00 00 0 00 00 0 0 000 00 0 0 0 00 00 0 0 00 000000 0 00 00 00000 0 0 00 00000 0 00 00 0000 0 000 00 0 0 000 00 0 0 00 00 00 0 0 00 000 0 0 00 00000 0 000 00 0 0 00000 00 0 0 0 00 000 0 00 00 0 0 0 00 00 0 0000 00 0 0 0 00 00 0 00 00 00 0 0 00 0 0 0 00 0 0 0 00 00000 0 000 00 00 0 00000 00 0000 0 00 00 0000 0 000 00 000 0 0000 00 00 0 0 00 0 0 0 00 0 0 0 00 0 0 000 00 0";
    expect(chuckNorris(testInput)).to.equal(expectedResult, testInput);
  });
});
