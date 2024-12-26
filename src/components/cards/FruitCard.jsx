
import "./fruitcard.css";
import apple from "../../assets/apple.png"
import orange from '../../assets/orange.png'


const FruitCard = ({image,name,description,price,classnames}) => {
  return (
    <div>
      <li>
        <div className={classnames}>
          <div className="heart"></div>

          <div className='fruit_img' >
            <img src={image} alt="apple" />
          </div>

          <div className="fruit_info">
            <h3>{name}</h3>
            <p>{description}</p>
            <p>{price}</p>
          </div>
        </div>
      </li>
    </div>
  );
};

export default FruitCard;
