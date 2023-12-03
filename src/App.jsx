import React from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import Navigation from './components/Navigation'
import Project from './components/Project'
import Bio from './components/Bio'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {

  return (
    <>
      <div>
        <Header />
        <Navigation />
        <Bio />
        <Project />
        <Footer />
      </div>
    </>
  )
}

export default App
