export class Spaceship {
  constructor(
    private cargoWeigthCapacity: number, // em quilos
    private cargoVolumeCapacity: number, // em litros
    private totalFuel: number, // em litros
    private fuelConsumePerKilometer: number, // em litros
    private avgSpeed: number, // em km/s
    private specialGimmick: string,
    private compositionsCompatibility: string[],
    private atmosphereCompatibility: string[],
  ){}
}