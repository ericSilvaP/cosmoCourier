export function random(max: number): number {
  return Math.floor(Math.random() * max)
}

export function randomFloat(min: number, max: number) {
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

export function choicesRandom<T>(array: T[]): T[] {
  if (array.length === 0) throw Error('Empty array.')
  const result: T[] = []
  const copy = [...array]

  for (let i = 0; i < random(copy.length) + 1; i++) {
    const index = random(copy.length - 1)
    result.push(copy.splice(index, 1)[0])
  }

  return result
}

export function choice<T>(array: T[]): T {
  if (array.length === 0) throw Error('Empty array.')
  return array[random(array.length)]
}
