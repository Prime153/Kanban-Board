import React from 'react';
import PropTypes from 'prop-types';
import TextArea from '../Textarea';
import { Container } from './CardStyled';

const Card = ({ color, content, data }) => {
  return (
    <Container color={color} visible={data}>
      <TextArea value={content} readOnly />
    </Container>
  );
};

Card.propTypes = {
  color: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  data: PropTypes.string.isRequired,
};

export default Card;
