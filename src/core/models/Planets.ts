import { Cargo } from './Cargos'

export class Planet {
  constructor(
    private name: string,
    private distanceFromEarth: number, // em Unidade Astronômica (UA). Equivale a 149.597.870,7 km
    private atmosphereType: string,
    private composition: string,
    public readonly cargosCompatibility: string[],
  ) {}

  getDistanceFromEarth(): number {
    return this.distanceFromEarth
  }

  getAtmosphereType(): string {
    return this.atmosphereType
  }

  getComposition(): string {
    return this.composition
  }

  getName(): string {
    return this.name
  }

  distanceToKilometer(): number {
    return this.distanceFromEarth * 149597870.7
  }

  checkCargoCompat(cargo: Cargo): boolean {
    return this.cargosCompatibility.includes(cargo.getType())
  }
}
