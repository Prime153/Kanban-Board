import styled, { css } from 'styled-components';

const TextArea = styled.textarea`
  border: none;
  outline: none;
  resize: none;
  width: 250px;
  height: 150px;
  display: block;
  margin: 0 auto;
  font-size: ${({ theme }) => theme.fontSize.text};

  ${({ addArea }) =>
    addArea &&
    css`
      font-size: 20px;
      border: 2px solid ${({ theme }) => theme.grey};
      width: 65%;
      height: 150px;
    `}
`;

export default TextArea;
