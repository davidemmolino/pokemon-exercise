import styled from 'styled-components';

export const ListItemDisplay = styled.div`
	padding: 10px;
	border: 1px solid #fff;
	border-radius: 10px;
	box-shadow: 0px 0px 5px #ccc;
	transition: all 0.25s linear;
	width: 17vw;
	margin: 5px;
	background: ${props => props.inBag ? "gray" : null };
	&:hover{
			box-shadow: 0px 0px 5px #0077c5;
	}
`;

export const ListItemTitle = styled.h2`
	font-size: 16px;
	font-weight: normal;
	`;
