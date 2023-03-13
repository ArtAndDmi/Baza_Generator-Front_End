async function getData(): Promise<string[]> {
	try {
		const promise = await fetch('https://jsonplaceholder.typicode.com/todos')
		const data = await promise.json()

		return data.map((index: { title: string }) => index.title)

	} catch {
		return ['Error: Failed to fetch']
	}
}


const data = getData()

export default data



