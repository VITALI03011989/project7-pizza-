import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import NotFound from './Pages/NotFound'
import Header from './components/Header'
import './scss/app.scss'
import Cart from './Pages/Cart'
import React from 'react'

function App() {
  const [searchValue,setSearchValue] = React.useState('')

  const searchByName = (name:string)=> {
    setSearchValue(name)
  }
  return (
    <div className="wrapper">
   <Header searchValue={searchValue} setSearchValue={searchByName}/>
    <div className="content">
      <div className="container">
        <Routes>
       <Route path='/' element= {<Home searchValue={searchValue} />}/>
       <Route path='/cart' element= {<Cart/>}/>
       <Route path='*' element= { <NotFound/>}/>
       </Routes>
      </div>
    </div>
  </div>
  )
}
export default App
