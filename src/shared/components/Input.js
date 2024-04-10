import styled from "styled-components";

const Input = styled.input`
  padding: 1.2rem;
  margin: 0.5em 0;
  color: ${({ theme }) => theme.primary};
  background: ${({ theme }) => theme.secoundaryAlpha};
  border: none;
  font-size: 1.1rem;
  border-radius: 8px;
  ::placeholder {
    color: gray;
  }
  &:focus {
    outline: #804537 auto 1px;
  }
`;
export default Input;
