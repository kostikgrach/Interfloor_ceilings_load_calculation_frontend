import { Button, Form } from 'react-bootstrap'
import { loadLimits, type LoadRange } from '../filter'

interface LoadFilterProps {
  range: LoadRange
  onRangeChange: (range: LoadRange) => void
  onApply: () => void
}

export function LoadFilter({ range, onRangeChange, onApply }: LoadFilterProps) {
  const { min, max, step } = loadLimits
  const toPercent = (value: number) => 100 * (value - min) / (max - min)

  return (
    <>
      <div className="filter-bar__label" id="load-filter-label">Нормативная нагрузка (кг/м²):</div>
      <Form className="filter-bar" aria-labelledby="load-filter-label" onSubmit={(event) => { event.preventDefault(); onApply() }}>
        <div className="range-slider">
          <div className="range-slider__track" />
          <div className="range-slider__fill" style={{ marginLeft: toPercent(range.min) + '%', marginRight: (100 - toPercent(range.max)) + '%' }} />
          <Form.Range id="load-min" className="range-slider__input" aria-label="Минимальная нагрузка"
            min={min} max={max} step={step} value={range.min}
            onChange={(event) => onRangeChange({ ...range, min: Math.min(event.target.valueAsNumber, range.max) })} />
          <Form.Range id="load-max" className="range-slider__input" aria-label="Максимальная нагрузка"
            min={min} max={max} step={step} value={range.max}
            onChange={(event) => onRangeChange({ ...range, max: Math.max(event.target.valueAsNumber, range.min) })} />
          <div className="range-slider__labels" aria-hidden="true"><span>{range.min}</span><span>{range.max}</span></div>
        </div>
        <Button type="submit" className="filter-bar__btn">Найти</Button>
      </Form>
    </>
  )
}
