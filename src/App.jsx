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
			hexColor += hexTab[Math.floor(Math.random() * 16)]

		document.getElementsByClassName('app')[0].style.backgroundColor = hexColor

		hexInput.current.style.backgroundColor = hexColor
		rgbInput.current.style.backgroundColor = hexColor
		hslInput.current.style.backgroundColor = hexColor

		hexInput.current.value = hexColor
		//setHex(hexColor)
		rgbInput.current.value = `rgb(${hexToRgb(hexColor).join(', ')})`
		//setRgb(`rgb(${hexToRgb(hexColor).join(', ')})`)
		hslInput.current.value = `hsl(${hexToHsl(hexColor).join(', ')})`
		//setHsl(`hsl(${hexToHsl(hexColor).join(', ')})`)



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

	const setRgbValue = (value) => {

		if(value.includes('#')) {
			rgbInput.current.value = `rgb(${hexToRgb(value).join(', ')})`
		}
		else {
			rgbInput.current.value = `rgb(${hslToRgb(value).join(', ')})`
		}
	}

	const setHexValue = (value) => {

		if(value.includes('rgb')) {
			hexInput.current.value = `#${rgbToHex(value).join('')}`
		}
		else {
			hexInput.current.value = `#${hslToHex(value).join('')}`
		}
	}

	const setHslValue = (value) => {

		if(value.includes('#')) {
			hslInput.current.value = `hsl(${hexToHsl(value).join(', ')})`
		}
		else {
			hslInput.current.value = `hsl(${rgbToHsl(value).join(', ')})`
		}
	}

	useEffect(() => {
		setRandomVal()
	}, [])

	useEffect(() => {
		if(hexChecker(hex)) {
			setRgbValue(hex)
			setHslValue(hex)
			document.getElementsByClassName('app')[0].style.backgroundColor = hex
			hexInput.current.style.backgroundColor = hex
			rgbInput.current.style.backgroundColor = hex
			hslInput.current.style.backgroundColor = hex
		}
	}, [hex])

	useEffect(() => {
		if(rgbChecker(rgb)) {
			setHexValue(rgb)
			setHslValue(rgb)
			document.getElementsByClassName('app')[0].style.backgroundColor = rgb
			hexInput.current.style.backgroundColor = rgb
			rgbInput.current.style.backgroundColor = rgb
			hslInput.current.style.backgroundColor = rgb
		}
	}, [rgb])

	useEffect(() => {
		if(hslChecker(hsl)) {
			setRgbValue(hsl)
			setHexValue(hsl)
			document.getElementsByClassName('app')[0].style.backgroundColor = hsl
			console.log(document.getElementsByClassName('app')[0].style.backgroundColor)
			hexInput.current.style.backgroundColor = hsl
			rgbInput.current.style.backgroundColor = hsl
			hslInput.current.style.backgroundColor = hsl
		}
	}, [hsl])

	const hexInput = useRef()
	const rgbInput = useRef()
	const hslInput = useRef()

    return (
      <div className="app">
		<div id="form">
			<Form>
				<Form.Group className="group">
					<Form.Label>HEX</Form.Label>
					<Form.Control type="text" placeholder="#FF8032" value={hex} ref={hexInput} onInput={(e) => handleInput('hex')} style={{textTransform:'uppercase'}} maxLength={7} />
				</Form.Group>
				<Form.Group className="group">
					<Form.Label>RGB</Form.Label>
					<Form.Control type="text" placeholder="rgb(255, 128, 50)" value={rgb} ref={rgbInput} onInput={(e) => handleInput('rgb')} />
				</Form.Group>
				<Form.Group className="group">
					<Form.Label>HSL</Form.Label>
					<Form.Control type="text" placeholder="hsl(22.8, 100, 59.8)" value={hsl} ref={hslInput} onInput={(e) => handleInput('hsl')} />
				</Form.Group>
			</Form>
		</div>
      </div>
    );

}
