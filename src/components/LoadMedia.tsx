import { useState } from 'react'
import { Card } from 'react-bootstrap'
import { defaultImage, defaultVideo, type Load } from '../data'

export function LoadImage({ src, title }: { src: string; title: string }) {
  const [failedSrc, setFailedSrc] = useState<string>()
  const image = src?.trim() && src !== failedSrc ? src : defaultImage
  return (
    <Card.Img variant="top" src={image} alt={image === defaultImage ? 'Изображение по умолчанию' : title}
      onError={() => { if (image !== defaultImage) setFailedSrc(src) }} />
  )
}

export function LoadVideo({ load }: { load: Load }) {
  const [failedSrc, setFailedSrc] = useState<string>()
  const video = load.video?.trim() && load.video !== failedSrc ? load.video : defaultVideo

  return (
    <video key={video} className="load-video" src={video} poster={load.image?.trim() || defaultImage}
      autoPlay muted loop playsInline aria-label={'Видео: ' + load.title}
      onError={() => { if (video !== defaultVideo) setFailedSrc(load.video) }} />
  )
}
