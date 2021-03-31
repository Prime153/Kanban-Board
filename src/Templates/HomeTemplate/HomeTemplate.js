import React, { useState } from 'react';
import StatusWrapper from '../../components/StatusWrapper/StatusWrapper';
import LogoWrapper from '../../components/LogoWrapper/LogoWrapper';
import Card from '../../components/Card/Card';
import { Items } from '../../data/index';
import { DragDropContext, Draggable } from 'react-beautiful-dnd';
import _ from 'lodash';
import AppContext from '../../context';
import { Container, StatusWrapperContainer, DraggableCardContainer } from './HomeTemplateStyled';

const HomeTemplate = () => {
  const [state, setState] = useState({
    ready: {
      title: 'Ready To Start',
      items: [Items[2]],
    },
    todo: {
      title: 'To do',
      items: [Items[1]],
    },
    progress: {
      title: 'In Progress',
      items: [Items[3]],
    },
    done: {
      title: 'Completed',
      items: [Items[0]],
    },
    trash: {
      title: 'trash',
      items: [],
    },
  });

  const handleDragEnd = ({ destination, source }) => {
    if (!destination) {
      return;
    }

    if (destination.index === source.index && destination.droppableId === source.droppableId) {
      return;
    }

    // Creating a copy of item before removing it from state
    const itemCopy = { ...state[source.droppableId].items[source.index] };

    setState((prev) => {
      prev = { ...prev };
      // Remove from previous items array
      prev[source.droppableId].items.splice(source.index, 1);

      // Adding to new items array location
      prev[destination.droppableId].items.splice(destination.index, 0, itemCopy);

      return prev;
    });
  };

  return (
    <Container>
      <LogoWrapper />
      <DragDropContext onDragEnd={handleDragEnd}>
        <AppContext.Provider value={[state, setState]}>
          <StatusWrapperContainer>
            {_.map(state, (data, key) => (
              <StatusWrapper title={data.title} id={key}>
                {data.items.map((element, index) => (
                  <Draggable key={element.id} index={index} draggableId={element.id}>
                    {(provided) => (
                      <DraggableCardContainer
                        key={element.id}
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <Card
                          key={element.id}
                          content={element.content}
                          color={element.color}
                          id={element.id}
                          data={key}
                        />
                      </DraggableCardContainer>
                    )}
                  </Draggable>
                ))}
              </StatusWrapper>
            ))}
          </StatusWrapperContainer>
        </AppContext.Provider>
      </DragDropContext>
    </Container>
  );
};

export default HomeTemplate;
