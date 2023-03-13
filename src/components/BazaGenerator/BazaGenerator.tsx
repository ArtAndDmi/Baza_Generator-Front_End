import React, {useState} from 'react'
import classes from './BazaGenerator.module.css'
import MyButton from "../MyButton/MyButton"

type props = {
	data: Promise<string[]>
}

const BazaGenerator = ({data}: props) => {
	const [baza, setBaza] = useState('')

	function generateMessage() {
		data.then(data => setBaza(data[Math.round(Math.random() * data.length - 1)].slice(0, 80)))
	}


	return (
		<div className={classes.container}>
			<p className={classes.text}>{baza}</p>
			<MyButton text={'сгенерировать'} onClick={generateMessage}/>
		</div>
	)
}

export default BazaGenerator

