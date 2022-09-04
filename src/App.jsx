import { Fragment, useState } from 'react'
import { Hero , About , Services , Projects , Content} from './components'
import './App.css'
import Footer from './components/Footer'

function App() {
  return(
    <Fragment>
      <Hero/>
      <About/>
      <Services/>
      <Projects/>
      <Content/>
      <Footer/>
    </Fragment>
  )
}

export default App
