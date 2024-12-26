
import "./App.css"

import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Title from "./components/Title/Title"
import Categoris from "./components/Categories/Categoris"

const App = () => {
  return (
    
    <div>
      <Navbar/>
      <Hero></Hero>
      <Title title='Categories' subtitle='Popular Items'></Title>
      <div className="containeer">
        <Categoris></Categoris>
      </div>
    </div>
  )
}

export default App