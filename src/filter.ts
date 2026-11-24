import type { Load } from './data'

export const loadLimits = { min: 0, max: 500, step: 10 }
export type LoadRange = Pick<typeof loadLimits, 'min' | 'max'>

export function filterLoads(loads: readonly Load[], { min, max }: LoadRange) {
  return loads.filter(({ standard_load }) =>
    standard_load !== null && standard_load >= min && standard_load <= max,
  )
}
