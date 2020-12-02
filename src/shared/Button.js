import styled from 'styled-components';

const Button = styled.button`
  padding: 1.2rem 1.5rem;
  background: ${({ theme }) => theme.primary};
  border: none;
  color: white;
  font-size: 1.1rem;
  border-radius: 8px;
  &:hover {
    background: ${({ theme }) => theme.secoundary};
  }
  &:focus {
    outline: none;
  }
`;

export default Button;
