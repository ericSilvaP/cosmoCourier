import { Cargo } from './cargos'
import { Planet } from './planets'
import { Spaceship } from './spaceship'
import { CargoType } from './types/cargoType'
import { AtmosphereType } from './types/planetAtmosphere'
import { PlanetComposition } from './types/planetComposition'
import { nameGenerator } from './utils/planetNameGenerator'
import { random, randomFloat } from './utils/random'

const compositions = Object.values(PlanetComposition)
const atmospheres = Object.values(AtmosphereType)
const cargoTypes = Object.values(CargoType)

const planetPrefixes = ['Gas', 'Tro', 'Finlo', 'Iperf', 'Adol', 'Sers']
const planetSufixes = ['Atan', 'imer', 'tein', 'otga', 'ekir', 'svec']

const spaceships: Spaceship[] = []
const cargos: Cargo[] = []

function generatePlanets(
  n: number,
  maxDistance: number,
  atmospheres: string[],
  compositions: string[],
  cargoTypes: string[],
  prefixes: string[],
  sufixes: string[],
  infixes?: string[],
): Planet[] {
  const planets: Planet[] = []
  for (let i = 0; i < n; i++) {
    // atributos da classe Planet
    const name = nameGenerator(prefixes, sufixes, infixes)
    const distanceFromEarth = randomFloat(1, maxDistance)
    const artmosphereType = atmospheres[random(atmospheres.length)]
    const composition = compositions[random(compositions.length)]
    const cargosCompatibility: string[] = []

    for (let j = 0; j < random(cargoTypes.length - 1) + 1; j++) {
      const cargoCompatTemp = cargoTypes[random(cargoTypes.length)]
      if (cargosCompatibility.includes(cargoCompatTemp)) {
        j--
        continue
      }
      cargosCompatibility.push(cargoCompatTemp)
    }
    const planet: Planet = new Planet(name, distanceFromEarth, artmosphereType, composition, cargosCompatibility)
    planets.push(planet)
  }
  return planets
}

console.log(generatePlanets(10, 50, atmospheres, compositions, cargoTypes, planetPrefixes, planetSufixes))
