import { useParams } from "react-router-dom";
import { CreateUpdateTodoList } from "../../components/CreateUpdateTodoList";
import { Container, ListTodoListTable } from "./styles";
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { TodoListItem } from "../../components/TodoListItem";
import { useTodo } from "../../hooks/useTodoList";
export function EditTodoList() {
    const { id } = useParams();
    const { todoCurrent, createTodo, setTodoCurrent, updateTodoList } = useTodo()

    function handleOnDragEnd(result: any) {
        if (!result.destination) return;

        const items = Array.from(todoCurrent.itens);

        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);

       
    }

    return (
        <Container className="wrapper">
            <CreateUpdateTodoList id={Number(id)}/>
            <DragDropContext onDragEnd={handleOnDragEnd}>
                <Droppable droppableId="todos">
                    {(provided) => (
                        <ListTodoListTable className="todos" {...provided.droppableProps} ref={provided.innerRef}>
                            {todoCurrent?.itens?.map(({ id, item }, index) => (
                                <Draggable key={id.toString()} draggableId={id.toString()} index={index}>
                                    {(provided) => (
                                        <div ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}>

                                            <TodoListItem name={item} id={id} key={id} />
                                        </div>
                                    )}
                                </Draggable>
                            ))}
                            {provided.placeholder}
                        </ListTodoListTable>)}
                </Droppable>
            </DragDropContext>
        </Container>
    )
}