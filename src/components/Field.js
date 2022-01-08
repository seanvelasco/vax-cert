import styled from 'styled-components'

const Wrapper = styled.form`
    margin-bottom: 1em;
`;

const Form = styled.input`
	font-size: 1em;
	background-color: #4d4d4d;
	border-radius: 0.25em;
	min-height: 40px;
	padding: 0.75em 0.75em;
	display: block;
	width: 100%;
	border: none;
	color: white;
	margin-top: 0.5em;
	box-sizing: border-box;
`;

const Input = styled(Form)`
	max-height: 100px;
`;

const Textarea = styled(Form).attrs({as: 'textarea'})`
	min-width: 100%;
	height: 100px;
	resize: none;
`;

const Field = ({ label, name, value, onChange }) => {
    return (
        <Wrapper>
            <label>{label}</label>
            <Input type='text' name={name} value={value} onChange={onChange}></Input>
        </Wrapper>
    )
}

export default Field;

export {
    Input,
    Textarea,
};