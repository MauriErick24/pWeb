import { createRoot } from 'react-dom/client'
import Routes from './router/Routes'
import './styles/index.css'

createRoot(document.getElementById('root')!).render(
  <Routes/>
)
