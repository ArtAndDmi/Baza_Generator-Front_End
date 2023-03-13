import React from 'react'
import BazaGenerator from "./components/BazaGenerator/BazaGenerator"
import './App.css'
import BazaAdding from "./components/BazaAdding/BazaAdding"
import Header from "./components/Header/Header"
import data from "./Data"

function App() {
	return (
		<div className="App">
			<Header/>
			<div className='container'>
				<BazaGenerator data={data}/>
				<BazaAdding/>
			</div>
		</div>
	)
}

export default App
