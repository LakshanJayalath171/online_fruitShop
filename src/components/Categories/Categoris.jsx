
import './Categories.css'
import next_button from "../../assets/next-icon.png"
import back_button from "../../assets/back-icon.png"
import FruitCard from '../cards/FruitCard'
import apple from '../../assets/apple.png'
import banana from "../../assets/banana.png"
import cherry from "../../assets/cherry.png"
import grapes from "../../assets/grapes.png"
import lemon from "../../assets/lemon.png"
import mango from "../../assets/mango.png"
import orange from "../../assets/orange.png"
import pineapple from "../../assets/pineapple.png"
import pomegranate from "../../assets/pomegranate.png"
import strawberry from "../../assets/strawberry.png"




const Categoris = () => {
  return (
    <div className='categories'>
      <img src={back_button} className='next_button' />
      <img src={next_button} className='back_button' />

      <div className='cards'>
        <ul>
          <li><FruitCard image={apple} classnames='apple' name='Green Apple' description='Imported from iran' price='500$' /></li>
          <li><FruitCard image={cherry} classnames='cherry' name='Red Cherry' description='Imported from Japan' price='120$' /></li>
          <li><FruitCard image={pineapple} classnames='pineapple' name='Pine Apple' description='Imported from Sri Lanka' price='220$' /></li>
          
        </ul>
      </div>
    </div>
  )
}

export default Categoris