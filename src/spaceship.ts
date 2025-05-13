import { Cargo } from "./cargos";
import { Planet } from "./planets";

export class Spaceship {
  constructor(
    private weightCapacity: number, // em quilos
    private volumeCapacity: number, // em litros
    private totalFuel: number, // em litros
    private maxFuel: number,
    private fuelConsumePerKilometer: number, // em litros
    private avgSpeed: number, // em km/s
    public readonly compositionsCompatibility: string[],
    public readonly atmosphereCompatibility: string[]
  ) {}

  getCargoWeightCapacity(): number {
    return this.weightCapacity
  }

  getCargoVolumeCapacity(): number {
    return this.volumeCapacity
  }

  getTotalFuel(): number {
    return this.totalFuel
  }

  getFuelConsumePerKilometer(): number {
    return this.fuelConsumePerKilometer
  }

  getAvgSpeed(): number {
    return this.avgSpeed
  }

  canTransport(cargo: Cargo): boolean {
    return cargo.getVolume() <= this.volumeCapacity && cargo.getWeight() <= this.weightCapacity
  }

  travelTimeFor(planet: Planet): number {
    /* 
    Retorna o tempo em segundos
    */
    return planet.distanceToKilometer() / this.avgSpeed
  }

  hasFuelFor(planet: Planet): boolean {
    return planet.distanceToKilometer() / this.fuelConsumePerKilometer <= this.totalFuel
  }

  calculateFuelFor(planet: Planet): number {
    return planet.distanceToKilometer() / this.fuelConsumePerKilometer
  }

  travelTo(planet: Planet): string {
    if (!this.hasFuelFor(planet)) return `Combustível insuficiente`
    const consumedFuel = this.calculateFuelFor(planet)
    this.totalFuel -= consumedFuel
    return `Foram consumidos ${consumedFuel} litros nessa viagem.`
  }

  refuel(): void {
    this.totalFuel = this.maxFuel
  }

  checkCompositionCompat(planet: Planet): boolean {
    return this.compositionsCompatibility.includes(planet.getComposition());
  }

  checkAtmosphereCompat(planet: Planet): boolean {
    return this.atmosphereCompatibility.includes(planet.getAtmosphereType())
  }
}