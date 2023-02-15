import { useEffect } from 'react';
import { Form } from '../../components/Form';
import { List } from '../../components/List';
import { useTodo } from '../../hooks/useTodoList';
import { Container } from './styles';

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
            <Form />
            <List handleOnDragEnd={handleOnDragEnd} todos={todos}/>
        </Container>

    )
}