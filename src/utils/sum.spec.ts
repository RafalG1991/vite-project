import {expect} from "vitest";
import {sum} from "./sum.ts";

describe('sum', () => {
  it('should return correct result for 2+2', () => {
    expect(sum(2,2)).toBe(4);
  })
  it('should return correct result for -2+2', () => {
    expect(sum(-2,2)).toBe(0);
  })
})