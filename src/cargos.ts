export class Cargos {
  constructor(
    private weight: number, // em kilos
    private volume: number, // em litros
    private type: string,
    private specificGimmick: string
  ) {}

  getWeight(): number {
    return this.weight;
  }

  setWeight(weight: number): void {
    this.weight = weight;
  }

  getVolume(): number {
    return this.volume;
  }

  setVolume(volume: number): void {
    this.volume = volume;
  }

  getType(): string {
    return this.type;
  }

  setType(type: string): void {
    this.type = type;
  }

  getSpecificGimmick(): string {
    return this.specificGimmick;
  }

  setSpecificGimmick(gimmick: string): void {
    this.specificGimmick = gimmick;
  }
}

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