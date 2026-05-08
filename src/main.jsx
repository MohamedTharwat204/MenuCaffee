import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
    <div className=' bg-olive-400 h-full w-full  text-black'>

        <BrowserRouter>
            <App />
        </BrowserRouter>
    </div>



)
