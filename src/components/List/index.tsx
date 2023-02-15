import { Todo, TodoItem } from "../../Interfaces/Todo";
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { Container } from "./styles";
import { Item } from "../Item";

interface ListProps {
    handleOnDragEnd: (result: any) => void,
    todos: Todo[] | TodoItem[]
}

export function List({ handleOnDragEnd, todos }: ListProps) {

    return (
        <DragDropContext onDragEnd={handleOnDragEnd}>
            <Droppable droppableId="todos">
                {(provided) => (
                    <Container className="todos" {...provided.droppableProps} ref={provided.innerRef}>
                        {todos?.map(({ id, name,items }, index) => (
                            <Draggable key={id.toString()} draggableId={id.toString()} index={index}>
                                {(provided) => (
                                    <div ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}>

                                        <Item name={name} id={id} key={id} />
                                        {items && items.map(({name, id}) => <Item name={name} id={id} key={id} />)}
                                    </div>
                                )}
                            </Draggable>
                        ))}
                        {provided.placeholder}
                    </Container>)}
            </Droppable>
        </DragDropContext>
    )
}