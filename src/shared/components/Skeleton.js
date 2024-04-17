import styled from "styled-components";

export const SkeletonCard = styled.div`
  padding: 8px;
  height: ${(props) => props.height};
  background: ${({ theme }) => theme.secoundary};
  border-radius: 12px;
  transition: transform 0.3s;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 16px;
  @media only screen and (max-width: 666px) {
    height: ${(props) => props.sheight};
  }
`;

export const SkeletonLoadingItem = styled.div`
  width: 100%;
  height: ${(props) => props.height || "24px"};
  background-color: ${(props) => props.backroundColor || "#f0f0f0"};
  border-radius: 8px;
  margin-right: 10px;
  animation: loadingAnimation 1s ease-in-out infinite alternate;

  @keyframes loadingAnimation {
    0% {
      opacity: 0.3;
    }
    100% {
      opacity: 0.7;
    }
  }
`;
