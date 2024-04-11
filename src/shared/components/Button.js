import styled from "styled-components";

const Button = styled.button`
  padding: ${(props) => (props.type === "large" ? "1rem" : "0.6rem")};
  background: ${({ theme, isSelected }) =>
    !isSelected ? theme.primary : theme.secoundary};
  border: none;
  color: white;
  font-size: ${(props) => (props.type === "large" ? "1.1rem" : "0.9rem")};
  font-family: "Montserrat", sans-serif;
  border-radius: 8px;
  text-align: center;
  &:hover {
    background: ${({ theme }) => theme.secoundary};
  }
  &:focus {
    outline: none;
  }
`;

export default Button;
