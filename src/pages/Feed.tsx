import { useEffect, useId } from 'react'
import { CircleArrowDown, ThumbsUp } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import type { Load } from '../data'
import { LoadVideo } from '../components/LoadMedia'

function VideoCard({ load, next }: { load: Load; next?: Load }) {
  const descriptionId = useId()

  useEffect(() => {
    const previousTitle = document.title
    document.title = load.title + ' — Перекрытия'
    return () => { document.title = previousTitle }
  }, [load.title])

  return (
    <article className="video-wrap">
      <LoadVideo key={load.id} load={load} />
      <div className="video-overlay">
        <div className="video-caption" key={load.id}>
          <h1 className="caption-title">{load.title}</h1>
          {load.description && <>
            <input type="checkbox" id={descriptionId} className="desc-toggle visually-hidden" aria-label="Развернуть описание" />
            <p className="caption-text">{load.description}</p>
            <label htmlFor={descriptionId} className="desc-more" aria-hidden="true" />
          </>}
        </div>

        <span className="video-likes" aria-label={'Лайков: ' + load.likes.length}>
          <ThumbsUp size={43} aria-hidden="true" />{load.likes.length}
        </span>
        {next && <Link className="corner-link" to={'/feed/' + next.id} aria-label="Следующая карточка" title="Следующая карточка">
          <CircleArrowDown size={48} aria-hidden="true" />
        </Link>}
        <span className="video-metric video-metric--load" aria-label={'Нормативная нагрузка, кг/м²: ' + (load.standard_load ?? '—')}>
          {load.standard_load ?? '—'}
        </span>
        <span className="video-metric video-metric--coefficient" aria-label={'Коэффициент надежности: ' + (load.reliability_coefficient ?? '—')}>
          {load.reliability_coefficient ?? '—'}
        </span>
      </div>
    </article>
  )
}

export function Feed({ loads }: { loads: readonly Load[] }) {
  const { id } = useParams()
  const position = id === undefined ? 0 : loads.findIndex((load) => String(load.id) === id)
  const load = loads[position]
  if (!load) {
    return <p className="empty-state">{loads.length ? 'Карточка ленты не найдена.' : 'Каталог пока пуст.'} {loads.length > 0 && <Link to="/feed">Открыть ленту</Link>}</p>
  }
  return <VideoCard load={load} next={loads.length > 1 ? loads[(position + 1) % loads.length] : undefined} />
}

export function LoadDetail({ loads }: { loads: readonly Load[] }) {
  const { id } = useParams()
  const position = loads.findIndex((load) => String(load.id) === id)
  const load = loads[position]
  if (!load) return <p className="empty-state">Карточка не найдена. <Link to="/">К каталогу</Link></p>
  return <VideoCard load={load} next={loads.length > 1 ? loads[(position + 1) % loads.length] : undefined} />
}
