/**
 * Convert number to roman number format
 *
 * @export
 * @param {number} num, range [1,4999]
 * @returns {string} roman format
 */
export function convertToRoman(num: number | Decimal): string {
  if (typeof num !== "number") num = num.toNumber()
  num = Math.floor(num)

  const roman: { [key: string]: number } = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  }
  let str = ""

  for (const i of Object.keys(roman)) {
    const q = Math.floor(num / roman[i])
    num -= q * roman[i]
    str += i.repeat(q)
  }

  return str
}
