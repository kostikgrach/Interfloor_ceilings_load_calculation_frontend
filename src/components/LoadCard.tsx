import { Card } from 'react-bootstrap'
import { ThumbsUp } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Load } from '../data'
import { LoadImage } from './LoadMedia'

export function LoadCard({ load }: { load: Load }) {
  return (
    <Card as="article" className="load-card">
      <LoadImage src={load.image} title={load.title} />
      <Card.Title as="h2">{load.title}</Card.Title>
      <p>Нормативная нагрузка: {load.standard_load ?? '—'} кг/м<sup>2</sup></p>
      <p>Коэффициент надежности: {load.reliability_coefficient ?? '—'}</p>
      <Card.Footer className="load-card-footer">
        <span className="card-likes" aria-label={'Лайков: ' + load.likes.length}><ThumbsUp size={22} aria-hidden="true" />{load.likes.length}</span>
        <Link className="card-btn" to={'/loads/' + load.id}>Подробнее</Link>
      </Card.Footer>
    </Card>
  )
}
