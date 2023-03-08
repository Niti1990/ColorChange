import React, { useState } from 'react'

function ColorDisplay() {
	const [color, setColor] = useState('')

	const updateColor = () => {
		setColor(color === 'red' ? 'blue' : 'red')
	}
	return (
		<div>
			<button onClick={updateColor}>changeColor</button>
			<p>The current Color is {color}</p>
		</div>
	)
}
export default ColorDisplay
