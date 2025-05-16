export class Cargo {
  constructor(
    private weight: number, // em kilos
    private volume: number, // em litros
    private type: string,
  ) {
    if (weight < 0) throw new Error('Weight cannot be negative.')
    if (volume < 0) throw new Error('Volume cannot be negative.')
  }

  getWeight(): number {
    return this.weight
  }

  getVolume(): number {
    return this.volume
  }

  getType(): string {
    return this.type
  }
}
