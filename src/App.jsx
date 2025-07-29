
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './pages/Login'
import TableView from './components/TableView'
import TimeSheet from './components/TimeSheet'

function App() {

  return (
   <>
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Login/>}/>
    <Route path='/table-view' element={<TableView/>} />
    <Route path='/time-sheet' element={<TimeSheet/>} />


   </Routes>
   </BrowserRouter>
   </>
  )
}

export default App
