import styled from 'styled-components';

const Heading = styled.span`
  font-size: ${({ theme }) => theme.fontSize.heading};
  border-bottom: 3px solid #e5e5e5;

  @media (max-width: 440px) {
    font-size: 30px;
  }
`;

export default Heading;
