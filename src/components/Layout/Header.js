import React from 'react'
import mealImage from '../../assets/meals.jpg'
import classes from './Header.module.css'
import HeaderCardButton from './HeaderCardButton'

const Header = (props) => {
  return (
    <>
    <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCardButton onClick = {props.onClick} />
    </header>
    <div className={classes['main-image']}>
        <img src={mealImage} alt='A table full of delicious food'/>
    </div>
    </>
  )
}

export default Header