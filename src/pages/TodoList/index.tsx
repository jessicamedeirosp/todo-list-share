import { useEffect } from 'react';
import { Form } from '../../components/Form';
import { List } from '../../components/List';
import { useTodo } from '../../hooks/useTodo';
import { PageContainer } from '../../styles/page';

export function TodoList() {
    const {readTodos, todos} = useTodo()

    useEffect(() => {
        readTodos()
    }, [!todos.length])
    
    return (
        <PageContainer className="wrapper">
            <Form />
            <List />
        </PageContainer>

    )
}