import { solveEquation } from "../solve-equation"

describe("solveEquation", () => {
  it("linear tests", () => {
    const result = solveEquation(
      new Decimal(0),
      new Decimal(0),
      new Decimal(1),
      new Decimal(-1)
    )
    const actualJSON = JSON.stringify(result)
    const expectedJSON = JSON.stringify([new Decimal(1)])
    expect(actualJSON).toBe(expectedJSON)
  })

  it("quadratic tests", () => {
    const result = solveEquation(
      new Decimal(0),
      new Decimal(1),
      new Decimal(-2),
      new Decimal(1)
    )
    const actualJSON = JSON.stringify(result)
    const expectedJSON = JSON.stringify([new Decimal(1)])
    expect(actualJSON).toBe(expectedJSON)
  })

  it("quadratic test 2", () => {
    const result = solveEquation(
      new Decimal(0),
      new Decimal(2),
      new Decimal(5),
      new Decimal(-3)
    )
    const actualJSON = JSON.stringify(result)
    const expectedJSON = JSON.stringify([new Decimal(0.5), new Decimal(-3)])
    expect(actualJSON).toBe(expectedJSON)
  })

  it("cubic tests", () => {
    const result = solveEquation(
      new Decimal(1),
      new Decimal(-7),
      new Decimal(4),
      new Decimal(12)
    )
    const actualJSON = JSON.stringify(result)
    const expectedJSON = '["6","2","-1"]'
    expect(actualJSON).toBe(expectedJSON)
  })

  it("cubic tests 2", () => {
    const result = solveEquation(
      new Decimal(-44),
      new Decimal(1413637),
      new Decimal(800766291),
      new Decimal(187091096050)
    )
    const actualJSON = JSON.stringify(result)
    const expectedJSON = '["32688.834485634798"]'
    expect(actualJSON).toBe(expectedJSON)
  })

  it("cubic tests 3", () => {
    const result = solveEquation(
      new Decimal(168.22549160416666667),
      new Decimal(-62370.8640283213725),
      new Decimal(24818289.542591014547),
      new Decimal(155768059470.00133285)
    )
    const actualJSON = JSON.stringify(result)
    const expectedJSON = '["-821.5512747799851"]'
    expect(actualJSON).toBe(expectedJSON)
  })

  it("degenerate case", () => {
    const result = solveEquation(
      new Decimal(0),
      new Decimal(0),
      new Decimal(0),
      new Decimal(0)
    )
    expect(result.length).toBe(0)
  })

  it("x^3 - x^2 = 0", () => {
    const result = solveEquation(
      new Decimal(1),
      new Decimal(-1),
      new Decimal(0),
      new Decimal(0)
    )
    const actualJSON = JSON.stringify(result)
    const expectedJSON = '["0","1"]'
    expect(actualJSON).toBe(expectedJSON)
  })

  it("-10 = 0", () => {
    const result = solveEquation(
      new Decimal(0),
      new Decimal(0),
      new Decimal(0),
      new Decimal(-10)
    )
    expect(result.length).toBe(0)
  })

  it("x^3 + 1000", () => {
    const result = solveEquation(
      new Decimal(1),
      new Decimal(0),
      new Decimal(0),
      new Decimal(1000)
    )
    const actualJSON = JSON.stringify(result)
    const expectedJSON = '["-10"]'
    expect(actualJSON).toBe(expectedJSON)
  })

  it("x^3 - x100", () => {
    const result = solveEquation(
      new Decimal(1),
      new Decimal(0),
      new Decimal(-100),
      new Decimal(0)
    )

    const actualJSON = JSON.stringify(result)
    const expectedJSON = '["0","10","-10"]'
    expect(actualJSON).toBe(expectedJSON)
  })

  it("-2.5x^3 - 600x^2 - 100x + 3.8e98", () => {
    //  Not accurate
    //  533680329744388953840372552826880
    const result = solveEquation(
      new Decimal(-2.5),
      new Decimal(-600),
      new Decimal(-100),
      new Decimal(3.8e98)
    )

    const actualJSON = JSON.stringify(result)
    const expectedJSON = '["5.336803297443891e+32"]'
    expect(actualJSON).toBe(expectedJSON)
  })

  it("-28.7x^3 -8e5x^2 -1e10x + 3.8e98", () => {
    //  Not accurate
    const result = solveEquation(
      new Decimal(-28.7),
      new Decimal(-8e5),
      new Decimal(-1e10),
      new Decimal(3.8e98)
    )

    const actualJSON = JSON.stringify(result)
    const expectedJSON = '["2.3657412000069544e+32"]'
    expect(actualJSON).toBe(expectedJSON)
  })
})
