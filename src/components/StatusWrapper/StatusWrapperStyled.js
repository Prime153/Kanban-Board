import styled, { css } from 'styled-components';
import Trash from '../../assets/trash.svg';

export const Container = styled.div`
  padding-top: 20px;
  width: 420px;
  height: 78vh;
  text-align: center;
  background-color: white;
  overflow-y: scroll;
  margin: 10px 20px;

  ${({ trash }) =>
    trash === 'trash' &&
    css`
      position: absolute;
      height: 70px;
      width: 70px;
      margin: 0;
      top: 4%;
      right: 11%;
      background-image: url(${Trash});
      background-size: cover;
      background-repeat: no-repeat;
      overflow: hidden;

      @media (max-width: 905px) {
        right: 5%;
      }
      @media (max-width: 618px) {
        top: 5%;
        height: 50px;
        width: 50px;
      }
      @media (max-width: 560px) {
        top: 15%;
        right: 44%;
      }

      @media (max-width: 560px) and (min-height: 779px) {
        top: 12%;
      }
      @media (max-width: 560px) and (min-height: 979px) {
        top: 10.5%;
      }
      @media (max-width: 560px) and (min-height: 1005px) {
        top: 9%;
      }
    `}
`;

export const TasksContainer = styled.div`
  min-height: 38vh;
  margin-top: 10px;
  display: flex;
  flex-flow: column wrap;
  align-items: center;

  ${({ trash }) =>
    trash === 'trash' &&
    css`
      min-height: 5.5vh;
      margin: 0;
    `}
`;
