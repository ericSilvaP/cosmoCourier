import { generateCargos, generatePlanets, generateSpaceships } from '@/core/generators'

import { Cargo } from './cargos'
import { MissionControl } from './core/missionControl'
import { Planet } from './planets'
import { Spaceship } from './spaceship'
import { CargoType } from './types/cargoType'
import { AtmosphereType } from './types/planetAtmosphere'
import { PlanetComposition } from './types/planetComposition'
import { choice, choicesRandom } from './utils/random'
import { simOuNao } from './utils/simOuNao'
import { formatNumber } from './utils/textFormat'

const planetPrefixes = ['Gas', 'Tro', 'Finlo', 'Iperf', 'Adol', 'Sers']
const planetSufixes = ['atan', 'imer', 'tein', 'otga', 'ekir', 'svec']

const spaceshipPrefixes = ['Star', 'Nova', 'Galax', 'Astro', 'Velo', 'Nebul']
const spaceshipSufixes = ['Cruiser', 'Rider', 'Drift', 'Hawk', 'Pulse', 'Strider']

// Geração aleatória
const planets: Planet[] = generatePlanets(
  10,
  3,
  Object.values(AtmosphereType),
  Object.values(PlanetComposition),
  Object.values(CargoType),
  planetPrefixes,
  planetSufixes,
)

const cargos: Cargo[] = generateCargos(10, 1000, 1000, Object.values(CargoType))

const spaceships: Spaceship[] = generateSpaceships(
  3,
  1000,
  1000,
  20000,
  0.01,
  3000,
  Object.values(PlanetComposition),
  Object.values(AtmosphereType),
  spaceshipPrefixes,
  spaceshipSufixes,
  [' '],
  500,
  500,
  15000,
  0.01,
  2000,
)

const missionControl: MissionControl = new MissionControl(cargos, planets, spaceships)
missionControl.startMission()
