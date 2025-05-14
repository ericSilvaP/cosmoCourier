export function random(max: number): number {
  return Math.floor(Math.random() * max)
}

export function randomFloat(min: number, max: number) {
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}
