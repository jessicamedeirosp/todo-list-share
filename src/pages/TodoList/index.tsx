import { useEffect } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { CreateUpdateTodoList } from '../../components/CreateUpdateTodoList';
import { TodoListItem } from '../../components/TodoListItem';
import { useTodo } from '../../hooks/useTodoList';
import { Container, ListTodoListTable } from './styles';

export function TodoList() {
    const { todos, setTodos, updateOrderItems, getTodos } = useTodo()

    function handleOnDragEnd(result: any) {
        if (!result.destination) return;

        const items = Array.from(todos);

        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);

        setTodos(items);
        updateOrderItems(items)
    }


    useEffect(() => {
        getTodos()
    }, [])

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

                                            <TodoListItem name={name} id={id} key={id} />
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