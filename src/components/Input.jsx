import React from 'react';

const Input = ({
	title, 
	placeholder, 
	value, 
	onChange, 
	customWrapperStyle, 
	alert, 
}) => {
	return (
		<div style={{...style.wrapper, ...customWrapperStyle}}>
			<div style={style.titleWrapper}>
				<p style={style.title}>{title}</p>
			</div>
			<input 
				style={style.input}
				placeholder={placeholder}
				value={value}
				onChange={({target})=> onChange(target.value)}
			/>
			<p style={style.alert}>{alert}</p>
		</div>
	)
};

const style = {
  wrapper: {
    display: "flex",
    flexDirection: "column",
		alignItems: "baseline",
		width: '100%',
		marginTop: '10px',
	},
	titleWrapper: {
		display: "flex",
		alignItems: "baseline",
	},
  title: {
		color: "#224160",
		margin: '5px',
		fontWeight: '500',
  },
  input: {
		width: '90%',
    border: "solid 2px #ddd",
    borderRadius: "5px",
		height: "30px",
		paddingLeft: "12px",
	},
	alert: {
		height: '20px',
		margin: '0px',
		paddingLeft: '5px',
		fontSize: '12px',
		color: 'red',
	}
};

export default Input