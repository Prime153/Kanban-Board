import React, { useState } from 'react';
import { Droppable } from 'react-beautiful-dnd';
import PropTypes from 'prop-types';
import Heading from '../Heading';
import AddNote from '../AddNote/AddNote';
import Button from '../Button';
import { Container, TasksContainer } from './StatusWrapperStyled';

const StatusWrapper = ({ title, children, id }) => {
  const [divButton, changeDivButton] = useState(false);

  return (
    <Container trash={title}>
      {id === 'trash' ? null : (
        <Heading>
          {title}
          {id === 'ready' && (
            <Button onClick={() => (divButton ? changeDivButton(false) : changeDivButton(true))} />
          )}
        </Heading>
      )}

      {id === 'ready' && divButton && <AddNote />}
      <Droppable droppableId={id}>
        {(provided) => {
          return (
            <TasksContainer trash={title} ref={provided.innerRef} {...provided.droppableProps}>
              {children}
            </TasksContainer>
          );
        }}
      </Droppable>
    </Container>
  );
};

StatusWrapper.propTypes = {
  title: PropTypes.string,
  key: PropTypes.string,
  id: PropTypes.string,

  children: PropTypes.array,
};

StatusWrapper.defaultProps = {
  title: null,
};

export default StatusWrapper;
