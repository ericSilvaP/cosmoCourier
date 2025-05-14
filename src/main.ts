import { Cargo } from './cargos'
import { Planet } from './planets'
import { Spaceship } from './spaceship'
import { CargoType } from './types/cargoType'
import { AtmosphereType } from './types/planetAtmosphere'
import { PlanetComposition } from './types/planetComposition'
import { randoms } from './utils/'

const compositions = Object.values(PlanetComposition)
const atmospheres = Object.values(AtmosphereType)
const cargoTypes = Object.values(CargoType)

const planets: Planet[] = []
const spaceships: Spaceship[] = []
const cargos: Cargo[] = []

const nPlanets = randoms(5)
const nCargos = randoms(10)
const nSpaceships = randoms(3)

// gerar planetas
for (let i = 0; i < nPlanets; i++) {}
