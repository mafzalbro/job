import SheetModule from './components/sheet/SheetModule'
import './styles/App.css'
import { BrowserRouter } from 'react-router-dom'
import ScrollProvider from './hooks/ScrollContext'
function App() {

  return (
    <>
      <ScrollProvider>
        <BrowserRouter>
          <SheetModule />
        </BrowserRouter>
      </ScrollProvider>
    </>
  )
}

export default App
