export class Spaceship {
  constructor(
    private cargoWeigthCapacity: number, // em quilos
    private cargoVolumeCapacity: number, // em litros
    private totalFuel: number, // em litros
    private fuelConsumePerKilometer: number, // em litros
    private avgSpeed: number, // em km/s
    private specialGimmick: string,
    private compositionsCompatibility: string[],
    private atmosphereCompatibility: string[]
  ) {}

  getCargoWeigthCapacity(): number {
    return this.cargoWeigthCapacity;
  }

  getCargoVolumeCapacity(): number {
    return this.cargoVolumeCapacity;
  }

  getTotalFuel(): number {
    return this.totalFuel;
  }

  getFuelConsumePerKilometer(): number {
    return this.fuelConsumePerKilometer;
  }

  getAvgSpeed(): number {
    return this.avgSpeed;
  }

  getSpecialGimmick(): string {
    return this.specialGimmick;
  }

  getCompositionsCompatibility(): string[] {
    return this.compositionsCompatibility;
  }

  getAtmosphereCompatibility(): string[] {
    return this.atmosphereCompatibility;
  }
}