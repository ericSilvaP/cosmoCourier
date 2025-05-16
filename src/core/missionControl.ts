import { Cargo } from '@/cargos'
import { Planet } from '@/planets'
import { Spaceship } from '@/spaceship'
import { choice, choicesRandom } from '@/utils/random'
import { formatNumber } from '@/utils/textFormat'

export class MissionControl {
  constructor(
    private cargoList: Cargo[],
    private planetList: Planet[],
    private spaceshipList: Spaceship[],
  ) {}

  startMission(): void {
    for (const ship of this.spaceshipList) {
      for (let i = 0; i < 2; i++) {
        const planet = choice(this.planetList)
        const cargo = choice(this.cargoList)
        const distance = planet.getDistanceFromEarth()
        const fuelNeeded = distance * ship.getFuelConsumePerKilometer()
        const travelTime = (ship.travelTimeFor(planet) / 60 / 60 / 24) * 2
        const consumedFuel = ship.consumedFuelFor(planet) * 2

        const isCompatibleWithPlanet = ship.checkPlanetCompat(planet)
        const isCompatibleWithCargo = ship.canTransport(cargo)
        const planetAcceptsCargo = planet.checkCargoCompat(cargo)

        const missionSuccess = isCompatibleWithCargo && isCompatibleWithCargo && planetAcceptsCargo
        const needsRefuelToReturn = ship.hasFuelForDistance(planet.distanceToKilometer() * 2)

        console.log(`--- Entrega 0${i + 1} de ${ship.getName()} ---`)
        console.log(`Planeta de destino - ${planet.getName()}`)
        console.log(
          `Distância- ${formatNumber(Number(planet.getDistanceFromEarth().toFixed(2)))} U.A. (${formatNumber(Number(planet.distanceToKilometer().toFixed(2)))} km) `,
        )
        console.log(`Tipo de carga - ${cargo.getType()}`)
        console.log(
          `Peso: ${formatNumber(Number(cargo.getWeight().toFixed(2)))} Kg | Volume: ${formatNumber(Number(cargo.getVolume().toFixed(2)))} L`,
        )

        if (!missionSuccess) {
          console.log(`\nEntrega não é possível. Motivo:`)
          if (!isCompatibleWithCargo) console.log(`Carga não suportada`)
          if (!isCompatibleWithPlanet) console.log(`Planeta incompatível`)
          if (!planetAcceptsCargo) console.log(`Planeta não aceita a carga`)
        } else {
          console.log(`Entrega bem sucedida`)
          console.log(`\nPrecisa reabastecer p/ voltar - ${needsRefuelToReturn ? 'sim' : 'não'}`)
          console.log(`Tempo de viagem - ${travelTime.toFixed(0)} dia(s)`)
          console.log(`Combustível consumido - ${consumedFuel} L`)
        }
      }
    }
  }
}
