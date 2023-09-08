import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';

import { Irena, dva, tri, iDosta } from '../components'


function App() {

  return (
    <>
      <div>
        <dva />
        <tri />
        <iDosta />
      </div>
    </>
  )
}

export default App;
