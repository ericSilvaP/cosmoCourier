import { choice } from './random'

export function nameGenerator(prefixes: string[], sufixes: string[], infixes?: string[]): string {
  let prefix: string = choice(prefixes)
  let sufix: string = choice(sufixes)
  if (infixes) {
    let infix: string = choice(infixes)
    return `${prefix}${infix}${sufix}`
  }

  return `${prefix}${sufix}`
}
