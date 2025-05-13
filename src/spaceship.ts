export class Spaceship {
  constructor(
    private name: string, 
    private cargoCapacity: number,     
    private totalFuel: number, 
    private fuelConsumePerKilometer: number, 
    private avgSpeed: number,     
    private compositionsCompatibility: string[], 
    private atmosphereCompatibility: string[]
  ){

    }
}