import SheetModule from './components/sheet/SheetModule'
import './styles/App.css'
import { BrowserRouter } from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
        <SheetModule />
      </BrowserRouter>
    </>
  )
}

export default App
