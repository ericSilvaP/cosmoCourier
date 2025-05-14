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
  if (
    [atmospheres, compositions, cargoTypes, prefixes, sufixes].some((arr) => arr.length === 0) ||
    (infixes && infixes.length === 0)
  ) {
    throw new Error('Empty array.')
  }

  if (n < 0) throw Error('N must be positive.')
  if (maxDistance < 0) throw Error('MaxDistance must be positive.')

  const planets: Planet[] = []
  for (let i = 0; i < n; i++) {
    // atributos da classe Planet
    const name = nameGenerator(prefixes, sufixes, infixes)
    const distanceFromEarth = randomFloat(1, maxDistance)
    const atmosphereType = atmospheres[random(atmospheres.length)]
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
    const planet: Planet = new Planet(name, distanceFromEarth, atmosphereType, composition, cargosCompatibility)
    planets.push(planet)
  }
  return planets
}

function generateCargos(
  n: number,
  maxWeight: number,
  maxVolume: number,
  cargoTypes: string[],
  minWeight?: number,
  minVolume?: number,
): Cargo[] {
  if (cargoTypes.length == 0) throw Error('Empty array.')
  if (
    n <= 0 ||
    maxWeight <= 0 ||
    maxVolume <= 0 ||
    (minWeight !== undefined && minWeight <= 0) ||
    (minVolume !== undefined && minVolume <= 0)
  )
    throw new Error('Numeric values must be positive.')

  if ((minWeight !== undefined && maxWeight < minWeight) || (minVolume !== undefined && maxVolume < minVolume))
    throw new Error('Maximum values must be greater than minimum values.')

  if (!minVolume) minVolume = 1
  if (!minWeight) minWeight = 1

  const cargos: Cargo[] = []
  for (let i = 0; i < n; i++) {
    const weight = randomFloat(minWeight, maxWeight)
    const volume = randomFloat(minVolume, maxVolume)
    const type = cargoTypes[random(cargoTypes.length)]
    const cargo = new Cargo(weight, volume, type)
    cargos.push(cargo)
  }
  return cargos
}

console.log(generateCargos(10, 100, 10, cargoTypes, 100))
