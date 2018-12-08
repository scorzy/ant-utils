import { convertToRoman } from "../convert-to-roman"

describe("convert-to-roman", () => {
  it("convert-to-roman", () => {
    expect(convertToRoman(1)).toBe("I")
    expect(convertToRoman(2)).toBe("II")
    expect(convertToRoman(4)).toBe("IV")
    expect(convertToRoman(5)).toBe("V")
    expect(convertToRoman(9)).toBe("IX")
    expect(convertToRoman(10)).toBe("X")
    expect(convertToRoman(17)).toBe("XVII")
    expect(convertToRoman(246)).toBe("CCXLVI")
    expect(convertToRoman(1776)).toBe("MDCCLXXVI")
    expect(convertToRoman(1954)).toBe("MCMLIV")
    expect(convertToRoman(1990)).toBe("MCMXC")
  })

  it("decimal", () => {
    expect(convertToRoman(new Decimal(1))).toBe("I")
  })
})
