import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-rows: 0.25fr 0.8fr;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 15px;
  transition: all 0.2s;
  position: relative;
  animation: slide 0.2s forwards;
  bottom: 35px;

  @keyframes slide {
    100% {
      bottom: 0;
    }
  }
`;

export const LabelStyled = styled.label`
  margin: 0 5px;

  :hover {
    :nth-child(1) {
      color: ${({ theme }) => theme.green};
    }
    :nth-child(2) {
      color: ${({ theme }) => theme.yellow};
    }
    :nth-child(3) {
      color: ${({ theme }) => theme.red};
    }
  }
`;

export const Button = styled.div`
  border: none;
  margin: 10px 0;
  cursor: pointer;

  :hover {
    ${({ color }) =>
      color === 'easy' &&
      css`
        color: ${({ theme }) => theme.green};
      `}

    ${({ color }) =>
      color === 'medium' &&
      css`
        color: ${({ theme }) => theme.yellow};
      `}

      ${({ color }) =>
      color === 'important' &&
      css`
        color: ${({ theme }) => theme.red};
      `}
  }
`;
