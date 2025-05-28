import { Cargo } from '@/core/models/Cargos'
import { Planet } from '@/core/models/Planets'
import { Spaceship } from '@/core/models/Spaceship'
import { choice } from '@/core/utils/random'
import { formatNumber } from '@/core/utils/textFormat'

export class MissionControl {
  constructor(
    private cargoList: Cargo[],
    private planetList: Planet[],
    private spaceshipList: Spaceship[],
  ) {}

  startMission(): void {
    let missionsCount = 0
    let succeedMission = 0
    for (const ship of this.spaceshipList) {
      for (let i = 0; i < 2; i++) {
        const planet = choice(this.planetList)
        const cargo = choice(this.cargoList)
        const totalSeconds = ship.travelTimeFor(planet) * 2
        const hours = Math.floor(totalSeconds / 3600)
        const minutes = Math.floor((totalSeconds % 3600) / 60)
        const seconds = (totalSeconds % 60).toFixed(0)
        const consumedFuel = formatNumber((ship.consumedFuelFor(planet) * 2).toFixed(2))

        const isCompatibleWithPlanet = ship.checkPlanetCompat(planet)
        const isCompatibleWithCargo = ship.canTransport(cargo)
        const planetAcceptsCargo = planet.checkCargoCompat(cargo)

        const missionSuccess = isCompatibleWithCargo && isCompatibleWithCargo && planetAcceptsCargo
        const needsRefuelToReturn = ship.hasFuelForDistance(planet.distanceToKilometer() * 2)

        console.log(`--- Entrega 0${i + 1} de ${ship.getName()} ---`)
        console.log(
          `Capacidade máxima - ${formatNumber(ship.getCargoWeightCapacity().toFixed(2))} kg | ${formatNumber(ship.getCargoVolumeCapacity().toFixed(2))} L\n`,
        )

        console.log(`Planeta de destino - ${planet.getName()}`)
        console.log(
          `Distância - ${formatNumber(planet.getDistanceFromEarth().toFixed(2))} U.A. (${formatNumber(Number(planet.distanceToKilometer().toFixed(2)))} km) `,
        )
        console.log(`Tipo de carga - ${cargo.getType()}`)
        console.log(
          `Peso: ${formatNumber(cargo.getWeight().toFixed(2))} Kg | Volume: ${formatNumber(Number(cargo.getVolume().toFixed(2)))} L`,
        )

        if (!missionSuccess) {
          console.log(`\nEntrega não é possível. Motivo:`)
          if (!isCompatibleWithCargo) console.log(`Carga não suportada`)
          if (!isCompatibleWithPlanet) console.log(`Planeta incompatível`)
          if (!planetAcceptsCargo) console.log(`Planeta não aceita a carga`)
          console.log(`\n`)
        } else {
          console.log(`Entrega bem sucedida`)
          console.log(`\nPrecisa reabastecer p/ voltar - ${needsRefuelToReturn ? 'sim' : 'não'}`)
          console.log(`Tempo de viagem - ${hours} horas ${minutes} minutos e ${seconds} segundos`)
          console.log(`Combustível consumido - ${consumedFuel} L\n\n`)
          succeedMission++
        }
        missionsCount++
      }
    }
    console.log(`=== Visão Geral ===`)
    console.log(`Total de entregas: ${missionsCount}`)
    console.log(`Entregas bem-sucedidas: ${succeedMission}`)
    console.log(`Entregas falhas: ${missionsCount - succeedMission}`)
    console.log()
  }
}
