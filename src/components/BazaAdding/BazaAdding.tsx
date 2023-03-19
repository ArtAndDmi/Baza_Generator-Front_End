import React, {useState} from 'react'
import classes from './BazaAdding.module.css'
import MyButton from "../MyButton/MyButton"
import axios from "axios";

const BazaAdding = () => {
	const [input, setInput] = useState('')

	const onClick = async () => {
		await axios.post('url', {"baza": input, "id": Date.now()})
	}

	return (
		<div className={classes.container}>
			<input className={classes.bazaInput} placeholder='Введите базу' maxLength={80} onInput={e => setInput((e.target as HTMLTextAreaElement).value)}/>
			<MyButton text={'добавить базу'} onClick={onClick} />
		</div>
	)
}

export default BazaAdding

