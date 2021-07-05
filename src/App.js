import "./index.css";
import React, { useState } from "react";
let reverse = "";

function App() {
	const [value, setValue] = useState("");
	const [string, setString] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(value);
		reverseString(value);
		setValue("");
	};
	const reverseString = (value) => {
		for (var i = value.length - 1; i >= 0; i--) {
			reverse += value[i];
		}
		setString("");
		return setString(reverse);
	};

	return (
		<section className='section-center'>
			<div className='container'>
				<form className='form' onSubmit={handleSubmit}>
					<input
						type='text'
						value={value}
						onChange={(e) => setValue(e.target.value)}
					/>
					<button type='submit'>Reverse</button>
				</form>
				<div className={`${string ? "border output" : "output"}`}>{string}</div>
			</div>
		</section>
	);
}

export default App;
