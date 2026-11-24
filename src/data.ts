export interface Load {
  id: number
  title: string
  description: string | null
  standard_load: number | null
  reliability_coefficient: number | null
  image: string
  video: string
  likes: number[]
}

export const defaultImage = '/media/default-load.webp'
export const defaultVideo = '/media/default-load.mp4'

export const mockLoads: readonly Load[] = [
  {
    id: 1,
    title: 'Жилые помещения',
    description: 'Междуэтажные перекрытия квартир и жилых комнат. Карточка иллюстрирует подбор исходной нормативной нагрузки для бытового сценария.',
    standard_load: 150, reliability_coefficient: 1.3,
    image: '/media/construction.jpg', video: '/media/construction.mp4', likes: [],
  },
  {
    id: 2,
    title: 'Офисные помещения',
    description: 'Перекрытия рабочих помещений, кабинетов и переговорных. В карточке приведены пример нагрузки и коэффициент надёжности.',
    standard_load: 200, reliability_coefficient: 1.2,
    image: '/media/offices.jpg', video: '', likes: [],
  },
  {
    id: 3,
    title: 'Технические помещения',
    description: 'Перекрытия зон инженерного обслуживания. Нагрузку от тяжёлого оборудования учитывают отдельно.',
    standard_load: 300, reliability_coefficient: 1.2,
    image: '', video: '', likes: [],
  },
  {
    id: 4,
    title: 'Залы и общие пространства',
    description: 'Общедоступные зоны с повышенной нагрузкой. Значения в каталоге демонстрационные.',
    standard_load: 400, reliability_coefficient: 1.2,
    image: '/media/site.jpg', video: '', likes: [],
  },
]
