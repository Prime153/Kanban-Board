import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 270px;
  height: 200px;
  margin: 10px;
  box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: end;
  justify-content: center;
  flex-flow: column nowrap;
  position: relative;
  background-color: white;
  transition: all 0.3s;

  ${({ visible }) =>
    visible === 'done' &&
    css`
      opacity: 0.25;
    `}

  ${({ visible }) =>
    visible === 'ready' &&
    css`
      animation: appear 0.5s ease;
    `}

  ${({ visible }) =>
    visible === 'trash' &&
    css`
      display: none;
    `}

  ${({ color }) =>
    color === 'important' &&
    css`
      border-top: 15px solid ${({ theme }) => theme.red};
    `}
  ${({ color }) =>
    color === 'medium' &&
    css`
      border-top: 15px solid ${({ theme }) => theme.yellow};
    `}
    ${({ color }) =>
    color === 'easy' &&
    css`
      border-top: 15px solid ${({ theme }) => theme.green};
    `}

    @keyframes appear {
    0% {
      opacity: 0;
      bottom: 35px;
    }
    100% {
      opacity: 1;
      bottom: 0;
    }
  }
`;
