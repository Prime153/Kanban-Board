import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: auto;
  background-color: ${({ theme }) => theme.grey};
`;

export const StatusWrapperContainer = styled.div`
  margin-top: 1.5%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
`;

export const DraggableCardContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;
