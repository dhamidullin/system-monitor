import si from 'systeminformation'
import diskusage from 'diskusage'

export const getValues = async () => {
  const [cpuTemperature, mem, disk, cpuLoad] = await Promise.all([
    si.cpuTemperature(),
    si.mem(),
    diskusage.check('/'),
    si.currentLoad(),
  ])

  return {
    cpuTemperature,
    mem,
    disk,
    cpuLoad,
  }
}
