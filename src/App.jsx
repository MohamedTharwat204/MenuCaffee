
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Nav from './Commpont/Nav'
import PageMonu from './pages/PageMonu'
import PageFavorites from './pages/PageFavorites'
import { Toaster } from 'react-hot-toast'

function App() {

  return (
    <div className=' w-full h-full'>


      <Nav />
     <Toaster/>
      <div className="  w-full ">
        <Routes>
          <Route path='/' element={<PageMonu />} />
          <Route path='/favorites' element={<PageFavorites />} />
        </Routes>
      </div>

    </div>
  )
}

export default App
