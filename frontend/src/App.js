import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage'


const App = () => {
  return (
    <div>
        <Router>
            <Routes>
                <Route path='/' element={<HomePage /> }></Route>
                <Route path='/product' element={<ProductPage /> }></Route>
            </Routes>
        </Router>
    </div>
  )
}

export default App