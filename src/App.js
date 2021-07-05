import "./index.css";
import React, { useState } from "react";

function App() {
	const [value, setValue] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(value);
	};
	return (
		<form className='form' onSubmit={handleSubmit}>
			<input
				type='text'
				value={value}
				onChange={(e) => setValue(e.target.value)}
			/>
			<button type='submit'>Reverse</button>
		</form>
	);
}

export default App;
