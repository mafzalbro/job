import SheetModule from './components/sheet/SheetModule'
import FormArea from './components/login/FormArea'
import './styles/App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ScrollProvider from './hooks/ScrollContext'
function App() {

  return (
    <>
      <ScrollProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={
              <SheetModule />
            } />
            <Route path='/login' element={<FormArea />} />
          </Routes>
        </BrowserRouter>
      </ScrollProvider>
    </>
  )
}

export default App
