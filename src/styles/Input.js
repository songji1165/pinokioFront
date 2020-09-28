import styled from 'styled-components'

// const FONTSIZE = {
//     smaller: "0.6rem",
//     small: "0.8rem",
//     normal: "1rem",
//     large: "1.2rem",
//     larger: "1.4rem",
// };

const Input = styled.input`
  width: 80%;
  height:30px;
  padding: 3px 5px;
  border-radius: 2px;
  border : ${(props) => (props.color ? `1px solid ${props.color}` : "1px solid rgb(161 160 161)")};
  vertical-align:middle;
  box-shadow:${(props) => (props.shadow ? "inset 0px 0px 0px 1px rgba(0, 0, 0, 0.5), inset 0px 2px 1px 0px rgba(255, 255, 255, 0.75)": "none")};
`;

export default Input;