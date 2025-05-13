export class Planet {
  constructor(
    private distanceFromEarth: number, // em Unidade Astronômica (UA). Equivale a 149.597.870,7 km
    private atmosphereType: string, 
    private composition: string,
    private cargosCompatibility: string[], 
  ){}


} 