import { Cargo } from "./cargos";
import { Planet } from "./planets";
import { CargoType } from "./types/cargoType";
import { AtmosphereType } from "./types/planetAtmosphere";
import { PlanetComposition } from "./types/planetComposition";

const compositions: string[] = [PlanetComposition.EXOTIC, PlanetComposition.GASEOUS, PlanetComposition.ICE_DWARF, PlanetComposition.ICE_GIANT, PlanetComposition.ROCKY, PlanetComposition.VOLCANIC]

const atmospheres: string[] = [AtmosphereType.AMMONIA_RICH, AtmosphereType.CARBON_DIOXIDE_RICH, AtmosphereType.HYDROGEN_RICH, AtmosphereType.METHANE_RICH, AtmosphereType.NITROGEN_RICH, AtmosphereType.NONE, AtmosphereType.OXYGEN_RICH, AtmosphereType.SULFURIC]

const cargoTypes: string[] = [CargoType.BIOLOGICAL, CargoType.COLONIZATION, CargoType.INDUSTRIAL, CargoType.MEDICAL, CargoType.SCIENTIFIC]

function random(maxN: number): number {
  return Math.floor(Math.random()*maxN)
}

const planets: Planet[] = []

const nPlanets = random(10)
const nCargos = random(10)
const nSpaceships = random(10)