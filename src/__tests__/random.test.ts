import { random } from "../random"

describe("random", () => {
  it("return 1", () => {
    expect(random(new Decimal(1), new Decimal(1)).toNumber()).toBe(1)
  })
  it("return 0-1", () => {
    const rnd = random().toNumber()
    expect(rnd).toBeGreaterThanOrEqual(0)
    expect(rnd).toBeLessThan(1)
  })
})
