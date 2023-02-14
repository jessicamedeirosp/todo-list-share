import { TodoItem } from '../../components/TodoItem';
import { useTodo } from '../../hooks/useTodoList';
import { Container, ListTodoListTable } from './styles';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import { CreateUpdateTodoList } from '../../components/CreateUpdateTodoList';

export function TodoList() {
    const { todos, setTodos, updateOrderItems } = useTodo()

    function handleOnDragEnd(result: any) {
        if (!result.destination) return;

        const items = Array.from(todos);   
        
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);

        setTodos(items);
        updateOrderItems(items)
    }
    
    
    return (
        <Container className="wrapper">
            <CreateUpdateTodoList />
            <DragDropContext onDragEnd={handleOnDragEnd}>
                <Droppable droppableId="todos">
                    {(provided) => (
                        <ListTodoListTable className="todos" {...provided.droppableProps} ref={provided.innerRef}>
                            {todos.map(({ id, name }, index) => (
                                <Draggable key={id.toString()} draggableId={id.toString()} index={index}>
                                    {(provided) => (
                                        <div ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}>

                                            <TodoItem name={name} id={id} key={id} />
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