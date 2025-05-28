import { generateCargos, generatePlanets, generateSpaceships } from '@/core/utils/generators'

import { Cargo } from './core/models/Cargos'
import { MissionControl } from './core/models/MissionControl'
import { Planet } from './core/models/Planets'
import { Spaceship } from './core/models/Spaceship'
import { CargoType } from './types/cargoType'
import { AtmosphereType } from './types/planetAtmosphere'
import { PlanetComposition } from './types/planetComposition'

const planetPrefixes = ['Gas', 'Tro', 'Finlo', 'Iperf', 'Adol', 'Sers']
const planetSufixes = ['atan', 'imer', 'tein', 'otga', 'ekir', 'svec']

const spaceshipPrefixes = ['Star', 'Nova', 'Galax', 'Astro', 'Velo', 'Nebul']
const spaceshipSufixes = ['Cruiser', 'Rider', 'Drift', 'Hawk', 'Pulse', 'Strider']

// Geração aleatória
const planets: Planet[] = generatePlanets(
  12,
  5,
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
  800000,
  0.01,
  8000,
  Object.values(PlanetComposition),
  Object.values(AtmosphereType),
  spaceshipPrefixes,
  spaceshipSufixes,
  [' '],
  500,
  500,
  300000,
  0.01,
  5000,
)

const missionControl: MissionControl = new MissionControl(cargos, planets, spaceships)
missionControl.startMission()
