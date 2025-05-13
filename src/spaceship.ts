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
    private compositionsCompatibility: string[],
    private atmosphereCompatibility: string[]
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

  getCompositionsCompatibility(): string[] {
    return this.compositionsCompatibility
  }

  getAtmosphereCompatibility(): string[] {
    return this.atmosphereCompatibility
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

  private hasFuelFor(planet: Planet): boolean {
    return planet.distanceToKilometer() / this.fuelConsumePerKilometer <= this.totalFuel
  }

  private consumeFor(planet: Planet): number {
    return planet.distanceToKilometer() / this.fuelConsumePerKilometer
  }

  travelTo(planet: Planet): string {
    if (!this.hasFuelFor(planet)) return `Combustível insuficiente`
    const consumedFuel = this.consumeFor(planet)
    this.maxFuel -= consumedFuel
    return `Foram consumidos ${consumedFuel} litros nessa viagem.`
  }

  compositionCompat(planet: Planet): boolean {
    for (let composition of this.compositionsCompatibility) {
      if (composition == planet.getComposition()) return true
    }
    return false
  }
}