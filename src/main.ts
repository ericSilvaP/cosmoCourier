import { generateSpaceships } from '@/core/generators'

import { Cargo } from './cargos'
import { Planet } from './planets'
import { Spaceship } from './spaceship'
import { CargoType } from './types/cargoType'
import { AtmosphereType } from './types/planetAtmosphere'
import { PlanetComposition } from './types/planetComposition'
import { nameGenerator } from './utils/nameGenerator'
import { choice, choicesRandom, randomFloat } from './utils/random'

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
