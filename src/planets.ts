export class Planet {
  constructor(
    private distanceFromEarth: number, // em Unidade Astronômica (UA)
    private atmosphereType: string,
    private composition: string,
    private cargosCompatibility: string[]
  ) {}

  getDistanceFromEarth(): number {
    return this.distanceFromEarth;
  }

  getAtmosphereType(): string {
    return this.atmosphereType;
  }

  getComposition(): string {
    return this.composition;
  }

  getCargosCompatibility(): string[] {
    return this.cargosCompatibility;
  }
}