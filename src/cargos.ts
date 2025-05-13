export class Cargo {
  constructor(
    private weight: number, // em kilos
    private volume: number, // em litros
    private type: string,
  ) {}

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
