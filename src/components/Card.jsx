import React, {useState, useEffect} from 'react';
import {card} from '../assets'
import Input from './Input'
import Button from './Button'

const Card = ({sum, pay}) => {

	const [cardNumber, onChangeCardNumber] = useState('');
	const [cardDate, onChangeCardDate] = useState('');
	const [cardOwner, onChangeCardOwner] = useState('');
	const [cardCVV, onChangeCardCVV] = useState('');
	const [isValidCardNumber, setValidCardNumber] = useState(true);
	const [isValidcardDate, setIsValidcardDate] = useState(true);
	const [isValidcardOwner, setIsValidcardOwner] = useState(true);
	const [isValidcardCVV, setIsValidcardCVV] = useState(true);
	const [isSaveCard, setIsSaveCard] = useState(false);
	const [secondFromStart, setSecondFromStart] = useState(0); 

	useEffect(()=> {
		const id = setInterval(() => {
      setSecondFromStart(a => a + 1);
    }, 1000);
    return () => clearInterval(id);
	}, [sum])

	const validate = () => {
		setValidCardNumber(cardNumber.length === 16);
		setIsValidcardDate(cardDate.length === 5);
		setIsValidcardOwner(!!cardOwner.length);
		setIsValidcardCVV(cardCVV.length === 3);
		if(
			cardNumber.length === 16 && 
			cardDate.length === 5 && 
			!!cardOwner.length && 
			cardCVV.length === 3
		){
			pay({
				cardNumber,
				cardDate,
				cardOwner,
				cardCVV,
				isSaveCard,
			});
		}
	}

	const hours = '00';
	const minutes = 14 - Math.floor(secondFromStart / 60);
	const seconds = 59 - secondFromStart % 60;

	return (
		<div style={styles.wrapper}>
			<div style={styles.header}>
				<div>
					<div style={styles.newCard}>
						<div style={styles.dot}/>
						<p style={styles.newCardTitle}>Нова картка</p>
					</div>
					<p style={styles.cardType}>Visa, Mastercard</p>
				</div>			
				<div>
					<img src={card} alt="card" style={styles.card} />
				</div>
			</div>
			<div style={styles.dashed}/>
			<div>
				<div style={styles.row}>
					<Input
						title="Номер картки"
						value={cardNumber}
						onChange={onChangeCardNumber}
						placeholder="#### #### #### ####"
						customWrapperStyle={{width: '200%'}}
						alert={isValidCardNumber || 'Невірна картка'}
					/>
					<Input
						title="Термін дії"
						value={cardDate}
						onChange={onChangeCardDate}
						placeholder="ММ/РР"
						alert={isValidcardDate || 'Невірний термін'}
					/>
				</div>
				<div style={styles.row}>
					<Input
						title="Власник карти"
						value={cardOwner}
						onChange={onChangeCardOwner}
						placeholder="CARDHOLDER NAME"
						customWrapperStyle={{width: '200%'}}
						alert={isValidcardOwner || 'Введіть ПІБ власника картки'}
						help="Фамілія і ім'я людини на яке випущена картка. Для іменних карт - нанесено на картку"
					/>
					<Input
						title="CVV"
						value={cardCVV}
						onChange={onChangeCardCVV}
						placeholder="XXX"
						alert={isValidcardCVV || 'Невірний CVV'}
						help="Nризначний код на звороті картки"
					/>
				</div>
			</div>
			<div style={styles.dashed}/>

			<div style={styles.pay}>
				<div style={styles.saveCheckbox}>
					<input 
						type="checkbox" 
						id="saveCard" 
						name="saveCard" 
						value={isSaveCard} 
						onChange={()=>setIsSaveCard(!isSaveCard)}
					/>
					<label htmlFor="saveCard">Запам'ятати цю картку</label>
				</div>
				<Button title={`Оплатити ${sum} грн`} customStyle={{padding: '0px 40px'}} onClick={validate}/>
				{
					minutes < 0 ? (
						<p>Час вийшов!</p>
					) : (
						<p>{`На виконання платежу ${hours}:${minutes}:${seconds}`}</p>
					)
				}
			</div>
		</div>
	)
}

const styles = {
	wrapper: {
		width: '460px',
		height: '425px',
		margin: '30px 20px',
		borderRadius: '10px',
		boxShadow: '0 0 20px #ccc',
		backgroundColor: '#fff',
	},
	header: {
		display: 'flex',
		justifyContent: 'space-between',
		padding: '16px',
	},
	card: {
		marginTop: '4px',
		width: '30px',
		height: '20px',
	},
	newCard: {
		display: 'flex',
		alignItems: 'center',
	},
	newCardTitle: {
		margin: '0px 10px',
		color: '#408afa',
		fontSize: '20px'
	},
	cardType: {
		color: '#888',
		margin: '5px',
		paddingLeft: '20px',
	},
	dot: {
		height: '4px',
		width: '4px',
		borderRadius: '10px',
		border: 'solid 6px #408afa'
	},
	dashed: {
		width: '100%',			
		borderBottom: 'dashed 3px #d8d8d8',
	},
	row: {
		display: 'flex',
		flexDirection: 'row',
		padding: '0px 15px',
	},
	saveCheckbox: {
		margin: '16px',
	},
	pay: {

	}
} 

export default Card