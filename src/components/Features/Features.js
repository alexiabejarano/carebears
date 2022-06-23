import React from "react";
import styles from './Features.module.css';
import cheerbear from '../../assets/ft-Cheer-Bear-Bottle_1080x.png';
import lovealot from '../../assets/ft-Love-a-Lot-Bottle_1080x.png';
import bdaybear from '../../assets/ft-Birthday-Bear-Bottle_1080x.png';
import wishbear from '../../assets/ft-Wish-Bear-Bottle_1080x.png';
import grumpybear from '../../assets/ft-Grumpy-Bear-Bottle_1080x.png';


const Product = (props) => {
  console.log(props.polish.shade);
  console.log(props.polish.alt);
  console.log(props.polish.img);
  return(
    <>
  <div className={styles['column']}>
          <p>{props.polish.shade}</p>
          <img
            src={props.polish.img}
            alt={props.polish.alt}
          />
          <button>$11</button>
        </div>
  </>
  );
};

const Features = () => {
  const cheerBear = {shade:"Cheer Bear", img:cheerbear, alt:"Cheer Bear Nail Polish"};
  const loveALot = {shade:"Love a Lot", img:lovealot, alt:"Love a Lot Nail Polish"};
  const bdayBear = {shade:"Birthday Bear", img:bdaybear, alt:"Birthday Bear Nail Polish"};
  const wishBear = {shade:"Wish Bear", img:wishbear, alt:"Wish Bear Nail Polish"};
  const grumpyBear = {shade:"Grumpy Bear", img:grumpybear, alt:"Grumpy Bear Nail Polish"};
    return (
      <>
        <section id="features" className={styles['features']}>
          <Product polish={cheerBear}/>
          <Product polish={loveALot}/>
          <Product polish={bdayBear}/>
          <Product polish={wishBear}/>
          <Product polish={grumpyBear}/>
        </section>
      </>
    );
  };
  

export default Features;
