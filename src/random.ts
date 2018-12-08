/**
 * Random with Decimal
 *
 * @export
 * @param {Decimal} [min=new Decimal(0)]
 * @param {Decimal} [max=new Decimal(1)]
 * @returns
 * @requires Decimal
 */
export function random(
  min: Decimal = new Decimal(0),
  max: Decimal = new Decimal(1)
) {
  return min.plus(max.minus(min).times(Math.random()))
}
