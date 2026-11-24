import { useState } from 'react'
import type { Load } from '../data'
import { filterLoads, loadLimits, type LoadRange } from '../filter'
import { LoadCard } from '../components/LoadCard'
import { LoadFilter } from '../components/LoadFilter'

export function Catalog({ loads }: { loads: readonly Load[] }) {
  const [range, setRange] = useState<LoadRange>(loadLimits)
  const [appliedRange, setAppliedRange] = useState<LoadRange | null>(null)
  const visible = appliedRange ? filterLoads(loads, appliedRange) : loads

  return (
    <section className="catalog-page" aria-label="Каталог нагрузок">
      <LoadFilter range={range} onRangeChange={setRange} onApply={() => setAppliedRange(range)} />
      {visible.length === 0 ? <p className="empty-state" role="status">В этом диапазоне нагрузки не найдены.</p> :
        <div className="card-layout">
          {visible.map((load) => <LoadCard key={load.id} load={load} />)}
        </div>}
    </section>
  )
}
