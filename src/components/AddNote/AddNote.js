import React, { useState, useContext } from 'react';
import AppContext from '../../context';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';
import { GiCheckMark as Checked } from 'react-icons/gi';
import Textarea from '../Textarea';
import { Container, LabelStyled, Button } from './AddNoteStyled';

const AddNote = () => {
  const [checked, isChecked] = useState('');
  const [content, setContent] = useState('');
  const [, setState] = useContext(AppContext);

  const addItem = (color, content) => {
    setState((prev) => {
      return {
        ...prev,
        ready: {
          title: 'Ready To Start',
          items: [
            {
              id: v4(),
              color: color,
              content: content,
            },
            ...prev.ready.items,
          ],
        },
      };
    });
  };

  return (
    <Container>
      <div>
        <LabelStyled htmlFor="easy">
          <input
            onClick={(e) => isChecked(e.target.value)}
            type="radio"
            name="level"
            value="easy"
            id="easy"
          />
          <i>Easy</i>
        </LabelStyled>
        <LabelStyled htmlFor="medium">
          <input
            onClick={(e) => isChecked(e.target.value)}
            type="radio"
            name="level"
            value="medium"
            id="medium"
          />
          <i>Medium</i>
        </LabelStyled>
        <LabelStyled htmlFor="important">
          <input
            onClick={(e) => isChecked(e.target.value)}
            type="radio"
            name="level"
            value="important"
            id="important"
          />
          <i>Important</i>
        </LabelStyled>
      </div>
      <div>
        <Textarea
          placeholder="Type something..."
          addArea
          required
          onChange={(e) => setContent(e.target.value)}
        />
        <AppContext.Consumer>
          {() => (
            <Button
              color={checked}
              onClick={() => (checked === '' || content === '' ? null : addItem(checked, content))}
            >
              Add Note <Checked />
            </Button>
          )}
        </AppContext.Consumer>
      </div>
    </Container>
  );
};

AddNote.propTypes = {
  addItem: PropTypes.object,
};

export default AddNote;
