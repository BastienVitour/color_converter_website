import { useEffect, useRef, useState } from 'react';
import './App.scss';
import Form from 'react-bootstrap/Form'

import { rgbToHex, rgbToHsl, hexToRgb, hexToHsl, hslToRgb, hslToHex } from './converterFunctions';

export default function App() {

	const [hex, setHex] = useState(null)
	const [rgb, setRgb] = useState(null)
	const [hsl, setHsl] = useState(null)
	const hexTab = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"]

	const setRandomVal = () => {

		let hexColor = '#'

		for (let i = 0; i < 6; i++)
			hexColor += hexTab[Math.floor(Math.random() * 16) + 1]

		document.getElementsByClassName('app')[0].style.backgroundColor = hexColor

		hexInput.current.style.backgroundColor = hexColor
		rgbInput.current.style.backgroundColor = hexColor
		hslInput.current.style.backgroundColor = hexColor

	}

	const handleInput = (type) => {

		switch(type) {

			//case 'hex':


		}
		
	}

	useEffect(() => {
		setRandomVal()
		console.log(rgbToHex(255, 128, 50))
	}, [])

	const hexInput = useRef()
	const rgbInput = useRef()
	const hslInput = useRef()

    return (
      <div className="app">
		<div id="form">
			<Form>
				<Form.Group>
					<Form.Label>HEX</Form.Label>
					<Form.Control type="text" placeholder="#FF8032" value="#FF8032" ref={hexInput} onInput={(e) => handleInput('hex')} />
				</Form.Group>
				<Form.Group>
					<Form.Label>RGB</Form.Label>
					<Form.Control type="text" placeholder="rgb(255, 128, 50)" value="rgb(255, 128, 50)"ref={rgbInput} />
				</Form.Group>
				<Form.Group>
					<Form.Label>HSL</Form.Label>
					<Form.Control type="text" placeholder="hsl(22.8, 100, 59.8)" value="hsl(22.8, 100, 59.8)"ref={hslInput} />
				</Form.Group>
			</Form>
		</div>
      </div>
    );

}
