import React from 'react'
import classes from './BazaAdding.module.css'
import MyButton from "../MyButton/MyButton"

const BazaAdding = () => {
	return (
		<div className={classes.container}>
			<input className={classes.bazaInput} placeholder='Введите базу' maxLength={80}/>
			<MyButton text={'добавить базу'} />
		</div>
	)
}

export default BazaAdding