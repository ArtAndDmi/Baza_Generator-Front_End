import axios from "axios";

async function getData(): Promise<string[]> {
	try {
		const response = await axios.get('https://jsonplaceholder.typicode.com/todos')
		const data = response.data
		return data.map((index: { title: string }) => index.title)

	} catch {
		return ['Error: Failed to fetch']
	}
}


const data = getData()

export default data



