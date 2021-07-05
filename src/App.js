import "./index.css";
import React, { useState } from "react";
let reverse = "";

function App() {
	const [value, setValue] = useState("");
	const [string, setString] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		for (var i = value.length - 1; i >= 0; i--) {
			reverse += value[i];
		}
		setString(reverse);
		reverse = "";
		setValue("");
	};
	return (
		<section className='section-center'>
			<div className='container'>
				<form className='form' onSubmit={handleSubmit}>
					<label htmlFor='text' name='text'>
						Enter a Text, Click the button to reverse it
					</label>
					<input
						name='text'
						id='text'
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
