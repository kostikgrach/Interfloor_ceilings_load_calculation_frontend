import { Container } from 'react-bootstrap'
import { CirclePlus, LayoutGrid, LogIn, SquarePlay } from 'lucide-react'
import { NavLink, Outlet, useMatch } from 'react-router-dom'

function BottomNavigation() {
  const detail = useMatch('/loads/:id')
  return (
    <nav className="tabbar" aria-label="Разделы приложения">
      <div className="tab-grid">
        <NavLink className={detail ? 'tab active' : 'tab'} to="/feed" aria-label="Лента" title="Лента"><SquarePlay aria-hidden="true" /></NavLink>
        <button className="tab" disabled aria-label="Добавление" title="Добавление"><CirclePlus aria-hidden="true" /></button>
        <NavLink className="tab" to="/" end aria-label="Плитка" title="Плитка"><LayoutGrid aria-hidden="true" /></NavLink>
        <button className="tab" disabled aria-label="Вход" title="Вход"><LogIn aria-hidden="true" /></button>
      </div>
    </nav>
  )
}

export default function App() {
  return (
    <Container className="canvas">
      <main className="canvas-content">
        <Outlet />
      </main>
      <BottomNavigation />
    </Container>
  )
}
