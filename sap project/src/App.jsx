import PurchaseOrderModule from './components/modules/purchase/purchase-order/PurchaseOrderModule'
import ModulesRoute from './routes/modules/ModulesRoute'
// import PurchaseRequestModule from './components/modules/purchase/purchase-request/PurchaseRequestModule'
import FormArea from './components/login/FormArea'
import './styles/App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ScrollProvider from './hooks/ScrollContext'
import Navbar from './components/common/navigation/Navbar'
import Toolbar from './components/common/navigation/ToolBar'
import ThemeProvider from './hooks/ThemeProvider'
import ThemeEditor from './hooks/ThemeEditor'
import AdvancedThemeEditor from './hooks/AdvancedThemeEditor'
function App() {

  return (
    <>
      <ScrollProvider>
        <ThemeProvider>
          <BrowserRouter>
            {window.location.pathname !== "/login" && <div className='mb-12'>
              <Navbar />
              <Toolbar />
            </div>}
            <Routes>
              <Route path='/Theme' element={
                <ThemeEditor />
              } />
              <Route path='/themeAdvanced' element={
                <AdvancedThemeEditor />
              } />
              {ModulesRoute}
              {/* <Route path='/purchase-request' element={
              <PurchaseRequestModule />
            } /> */}
              <Route path='/' element={
                <PurchaseOrderModule />
              } />
              <Route path='/login' element={<FormArea />} />
            </Routes>
          </BrowserRouter>
        </ThemeProvider>

      </ScrollProvider>
    </>
  )
}

export default App
