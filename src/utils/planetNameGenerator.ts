import { random } from './random'

export function nameGenerator(prefixes: string[], sufixes: string[], infixes?: string[]): string {
  let prefix: string = prefixes[random(prefixes.length)].toLowerCase()
  let sufix: string = sufixes[random(sufixes.length)].toLowerCase()
  prefix = prefix.charAt(0).toUpperCase() + prefix.slice(1)
  if (infixes) {
    let infix: string = infixes![random(infixes!.length)].toLowerCase()
    return `${prefix}${infix}${sufix}`
  }

  return `${prefix}${sufix}`
}
