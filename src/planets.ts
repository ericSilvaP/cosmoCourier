export class Planet {
  constructor(
    private distanceFromEarth: number, // em Unidade Astronômica (UA). Equivale a 149.597.870,7 km
    private atmosphereType: string,
    private composition: string,
    private cargosCompatibility: string[]
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

  getCargosCompatibility(): string[] {
    return this.cargosCompatibility
  }

  distanceToKilometer(): number {
    return this.getDistanceFromEarth() * 149597870.7
  }
}
