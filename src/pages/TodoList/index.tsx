import { FormEvent, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { TodoItem } from '../../components/TodoItem';
import { useTodo } from '../../hooks/useTodoList';
import { Container, CreateTodoListForm, ListTodoListTable } from './styles';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { Todo } from '../../Interfaces/Todo';

export function TodoList() {
    const { todos, createTodo, setTodos, updateOrderItems } = useTodo()
    const [todoInput, setTodoInput] = useState<string>("")

    function handleSumit(event: FormEvent<EventTarget>) {
        event.preventDefault()
        if (!todoInput.length) {
            toast.warning('Adicionar nome a lista');
            return
        }
        createTodo(todoInput)
        setTodoInput("")
    }


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
            <CreateTodoListForm onSubmit={handleSumit}>
                <label htmlFor="todoInput">Criar nova lista</label>
                <input type="text" value={todoInput} id="todoInput" onChange={(event => setTodoInput(event.target.value))} />
                <button type="submit">Criar</button>
            </CreateTodoListForm>
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