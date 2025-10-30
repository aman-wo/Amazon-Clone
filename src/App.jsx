import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import  Carousel  from './components/carousel/CarouselEffect'
import Category from './components/category/Category'

function App() {
  

  return (
    <>
      <Header />
      <Carousel />
      <Category />
    </>
  )
}

export default App
