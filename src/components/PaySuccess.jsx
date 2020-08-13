import React from 'react'
import Button from './Button'

const PaySuccess = ({toMain}) => (
	<div style={style.wrapper}>
		<p>Оплата пройшла успушно!</p>
		<Button title='На головну' onClick={toMain}/>
	</div>
)

const style = { 
	wrapper: {
		paddingBottom: '20px',
	}
}

export default PaySuccess;