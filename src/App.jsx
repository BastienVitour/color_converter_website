import { useEffect, useState } from 'react';
import './App.scss';
import Form from 'react-bootstrap/Form'

export default function App() {

	const [hex, setHex] = useState(null)
	const [rgb, setRgb] = useState(null)
	const [hsl, setHsl] = useState(null)

	useEffect(() => {
		document.getElementsByClassName('app')[0].style.backgroundColor = hex
	}, [])

    return (
      <div className="app">
		<div id="form">
			<Form>
				<Form.Group>
					<Form.Label>HEX</Form.Label>
					<Form.Control type="text" placeholder="#FF8032" value="#FF8032" />
				</Form.Group>
				<Form.Group>
					<Form.Label>RGB</Form.Label>
					<Form.Control type="text" placeholder="rgb(255, 128, 50)" value="rgb(255, 128, 50)" />
				</Form.Group>
				<Form.Group>
					<Form.Label>HSL</Form.Label>
					<Form.Control type="text" placeholder="hsl(22.8, 100, 59.8)" value="hsl(22.8, 100, 59.8)" />
				</Form.Group>
			</Form>
		</div>
      </div>
    );

}
