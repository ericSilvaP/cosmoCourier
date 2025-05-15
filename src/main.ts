import { Cargo } from './cargos'
import { Planet } from './planets'
import { Spaceship } from './spaceship'
import { CargoType } from './types/cargoType'
import { AtmosphereType } from './types/planetAtmosphere'
import { PlanetComposition } from './types/planetComposition'
import { nameGenerator } from './utils/nameGenerator'
import { choice, choicesRandom, random, randomFloat } from './utils/random'

const compositions = Object.values(PlanetComposition)
const atmospheres = Object.values(AtmosphereType)
const cargoTypes = Object.values(CargoType)

const planetPrefixes = ['Gas', 'Tro', 'Finlo', 'Iperf', 'Adol', 'Sers']
const planetSufixes = ['Atan', 'imer', 'tein', 'otga', 'ekir', 'svec']

const spaceshipPrefixes: string[] = [
  'Star',
  'Nova',
  'Galax',
  'Astro',
  'Velo',
  'Nebul',
  'Quant',
  'Orion',
  'Zeno',
  'Cryo',
  'Solar',
  'Xeno',
  'Lumi',
  'Hyper',
  'Void',
]

const spaceshipSufixes: string[] = [
  'Cruiser',
  'Rider',
  'Drift',
  'Hawk',
  'Pulse',
  'Wing',
  'Strider',
  'Flare',
  'Runner',
  'Storm',
  'Blade',
  'Ray',
  'Phantom',
  'Drive',
  'Ship',
]

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

  if (n < 0) throw new Error('N must be positive.')
  if (maxDistance < 0) throw new Error('MaxDistance must be positive.')

  const planets: Planet[] = []
  for (let i = 0; i < n; i++) {
    // atributos da classe Planet
    const name = nameGenerator(prefixes, sufixes, infixes)
    const distanceFromEarth = randomFloat(1, maxDistance)
    const atmosphereType = choice(atmospheres)
    const composition = choice(compositions)
    const cargosCompatibility: string[] = choicesRandom(cargoTypes)

    planets.push(new Planet(name, distanceFromEarth, atmosphereType, composition, cargosCompatibility))
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
  if (cargoTypes.length === 0) throw new Error('Empty array.')
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
    const type = choice(cargoTypes)
    cargos.push(new Cargo(weight, volume, type))
  }
  return cargos
}

function generateSpaceships(
  n: number,
  maxWeightCapacity: number,
  maxVolumeCapacity: number,
  maxMaxFuel: number,
  maxFuelConsumePerKilometer: number,
  maxAvgSpeed: number,
  compositions: string[],
  atmospheres: string[],
  prefixes: string[],
  sufixes: string[],
  infixes?: string[],
  minWeightCapacity?: number,
  minVolumeCapacity?: number,
  minMaxFuel?: number,
  minFuelConsumePerKilometer?: number,
  minAvgSpeed?: number,
) {
  // Validação de valores numéricos positivos
  if (
    n <= 0 ||
    maxWeightCapacity <= 0 ||
    maxVolumeCapacity <= 0 ||
    maxMaxFuel <= 0 ||
    maxFuelConsumePerKilometer <= 0 ||
    maxAvgSpeed <= 0 ||
    (minWeightCapacity !== undefined && minWeightCapacity <= 0) ||
    (minVolumeCapacity !== undefined && minVolumeCapacity <= 0) ||
    (minMaxFuel !== undefined && minMaxFuel <= 0) ||
    (minFuelConsumePerKilometer !== undefined && minFuelConsumePerKilometer <= 0) ||
    (minAvgSpeed !== undefined && minAvgSpeed <= 0)
  ) {
    throw new Error('All numeric values must be positive.')
  }

  // Validação de arrays
  if (compositions.length === 0 || atmospheres.length === 0 || prefixes.length === 0 || sufixes.length === 0) {
    throw new Error('Arrays must not be empty.')
  }

  // Validação de min < max
  if (
    (minWeightCapacity !== undefined && minWeightCapacity > maxWeightCapacity) ||
    (minVolumeCapacity !== undefined && minVolumeCapacity > maxVolumeCapacity) ||
    (minMaxFuel !== undefined && minMaxFuel > maxMaxFuel) ||
    (minFuelConsumePerKilometer !== undefined && minFuelConsumePerKilometer > maxFuelConsumePerKilometer) ||
    (minAvgSpeed !== undefined && minAvgSpeed > maxAvgSpeed)
  ) {
    throw new Error('Minimum values must be less than or equal to maximum values.')
  }

  // Definição de valores opcionais caso não sejam informados
  if (!minAvgSpeed) minAvgSpeed = 1
  if (!minFuelConsumePerKilometer) minFuelConsumePerKilometer = 1
  if (!minMaxFuel) minMaxFuel = 1
  if (!minVolumeCapacity) minVolumeCapacity = 1
  if (!minWeightCapacity) minWeightCapacity = 1

  const spaceships: Spaceship[] = []

  for (let i = 0; i < n; i++) {
    const name = nameGenerator(prefixes, sufixes, infixes)
    const weightCapacity = randomFloat(minWeightCapacity, maxWeightCapacity)
    const volumeCapacity = randomFloat(minVolumeCapacity, maxVolumeCapacity)
    const maxFuel = randomFloat(minMaxFuel, maxMaxFuel)
    const fuelConsumePerKilometer = randomFloat(minFuelConsumePerKilometer, maxFuelConsumePerKilometer)
    const avgSpeed = randomFloat(minAvgSpeed, maxAvgSpeed)
    const compositionsCompatibility: string[] = choicesRandom(compositions)
    const atmospheresCompatibility: string[] = choicesRandom(atmospheres)

    spaceships.push(
      new Spaceship(
        name,
        weightCapacity,
        volumeCapacity,
        maxFuel,
        fuelConsumePerKilometer,
        avgSpeed,
        compositionsCompatibility,
        atmospheresCompatibility,
      ),
    )
  }
  return spaceships
}

console.log(
  generateSpaceships(
    10,
    1000,
    1000,
    10000,
    10,
    2000,
    compositions,
    atmospheres,
    spaceshipPrefixes,
    spaceshipSufixes,
    [' '],
    500,
    500,
    300,
    5,
    1000,
  ),
)
