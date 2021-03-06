import styled from 'styled-components';

export const Card = styled.div`
  padding: 8px;
  height: ${(props) => props.height};
  background: ${({ theme }) => theme.secoundary};
  border-radius: 8px;
  transition: transform 0.3s;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  &:hover {
    transform: translateY(-4px);
  }
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  text-align: center;
  @media only screen and (max-width: 666px) {
    height: ${(props) => props.sheight};
  }
`;

export const DetailCard = styled.div`
  padding: 16px;
  height: ${(props) => props.height};
  background: ${({ theme }) => theme.secoundary};
  border-radius: 8px;
  transition: transform 0.3s;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  &:hover {
    transform: translateY(-4px);
  }
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  @media only screen and (max-width: 666px) {
    height: ${(props) => props.sheight};
    grid-template-columns: 1fr;
  }
`;

export const CardTitle = styled.h4`
  color: ${({ theme }) => theme.primary};
  margin: 0;
  padding: 8px 0;
  line-height: 1.5em;
  height: 4em;
  width: 100%;
  white-space: normal;
  overflow: hidden;
  text-overflow: ellipsis;
  -o-text-overflow: ellipsis;
`;

export const DetaileCardTitle = styled.h2`
  color: ${({ theme }) => theme.primary};
`;
export const Image = styled.img`
  width: 100%;
  height: ${(props) => props.height};
  object-fit: cover;
  border-radius: 8px;
  @media only screen and (max-width: 666px) {
    height: ${(props) => props.sheight};
  }
`;
