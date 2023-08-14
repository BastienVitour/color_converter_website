import { useEffect, useRef, useState } from 'react';
import './App.scss';
import Form from 'react-bootstrap/Form'

import { rgbToHex, rgbToHsl, hexToRgb, hexToHsl, hslToRgb, hslToHex } from './converterFunctions';

import { hexChecker, rgbChecker, hslChecker } from './valueChecker';

export default function App() {

	const [hex, setHex] = useState("")
	const [rgb, setRgb] = useState("")
	const [hsl, setHsl] = useState("")
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

			case 'hex':
				setHex(hexInput.current.value)
				break
			case 'rgb':
				setRgb(rgbInput.current.value)
				break
			case 'hsl':
				setHsl(hslInput.current.value)
				break

		}
		
	}

	useEffect(() => {
		setRandomVal()
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
					<Form.Control type="text" placeholder="#FF8032" value={hex} ref={hexInput} onInput={(e) => handleInput('hex')} />
				</Form.Group>
				<Form.Group>
					<Form.Label>RGB</Form.Label>
					<Form.Control type="text" placeholder="rgb(255, 128, 50)" value={rgb} ref={rgbInput} onInput={(e) => handleInput('rgb')} />
				</Form.Group>
				<Form.Group>
					<Form.Label>HSL</Form.Label>
					<Form.Control type="text" placeholder="hsl(22.8, 100, 59.8)" value={hsl} ref={hslInput} onInput={(e) => handleInput('hsl')} />
				</Form.Group>
			</Form>
		</div>
      </div>
    );

}
