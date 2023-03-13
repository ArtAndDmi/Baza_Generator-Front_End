import React, {MouseEventHandler} from 'react'
import classes from './MyButton.module.css'

type props = {
	text: string,
	onClick?: MouseEventHandler<HTMLButtonElement> | undefined
}

const MyButton = ({text, onClick}: props) => {
	return (
		<button className={classes.button} onClick={onClick}>{text}</button>
	)
}

export default MyButton