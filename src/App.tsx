import { Header } from "./components/Header"
import { NavBar } from "./components/NavBar"

export const App = () => {
  return (
    <div className='min-h-screen bg-sky-600'>
      <NavBar/>
      <Header/>
    </div>
  )
}