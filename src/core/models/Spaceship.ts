import { Cargo } from './Cargos'
import { Planet } from './Planets'

export class Spaceship {
  private totalFuel: number // em litros

  constructor(
    private name: string,
    private weightCapacity: number, // em quilos
    private volumeCapacity: number, // em litros
    private maxFuel: number, // em litros
    private fuelConsumePerKilometer: number, // em %
    private avgSpeed: number, // em km/s
    public readonly compositionsCompatibility: string[],
    public readonly atmosphereCompatibility: string[],
  ) {
    this.totalFuel = this.maxFuel
  }

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

  getName(): string {
    return this.name
  }

  canTransport(cargo: Cargo): boolean {
    return cargo.getVolume() <= this.volumeCapacity && cargo.getWeight() <= this.weightCapacity
  }

  travelTimeFor(planet: Planet): number {
    return Number((planet.distanceToKilometer() / this.avgSpeed).toFixed(2)) // tempo em segundos
  }

  hasFuelFor(planet: Planet): boolean {
    return this.totalFuel >= planet.distanceToKilometer() * (this.fuelConsumePerKilometer / 100)
  }

  hasFuelForDistance(distance: number): boolean {
    return this.totalFuel >= distance * (this.fuelConsumePerKilometer / 100)
  }

  calculateFuelFor(planet: Planet): number {
    return planet.distanceToKilometer() * (this.fuelConsumePerKilometer / 100)
  }

  consumedFuelFor(planet: Planet): number {
    // if (!this.hasFuelFor(planet)) throw Error('Insufficient fuel.')
    // if (!this.checkAtmosphereCompat(planet)) throw Error('Incompatible atmosphere.')
    // if (!this.checkCompositionCompat(planet)) throw Error('Incompatible composition.')

    const consumedFuel = this.calculateFuelFor(planet)
    this.totalFuel -= consumedFuel
    return consumedFuel
  }

  checkCompositionCompat(planet: Planet): boolean {
    return this.compositionsCompatibility.includes(planet.getComposition())
  }

  checkAtmosphereCompat(planet: Planet): boolean {
    return this.atmosphereCompatibility.includes(planet.getAtmosphereType())
  }

  checkPlanetCompat(planet: Planet): boolean {
    return this.checkAtmosphereCompat(planet) && this.checkCompositionCompat(planet) && this.hasFuelFor(planet)
  }
}
