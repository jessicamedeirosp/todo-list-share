import { useEffect } from 'react';
import { useParams } from "react-router-dom";
import { EditList } from "../../components/EditList";
import { Form } from "../../components/Form";
import { useTodo } from "../../hooks/useTodo";
import { PageContainer } from "../../styles/page";

export function EditTodoList() {
    const { id } = useParams();
    const {readTodos, todos} = useTodo()

    useEffect(() => {
        readTodos()
    }, [!todos.length])

    return (
        <PageContainer className="wrapper">
            <Form id={Number(id)}/>
            <EditList id={Number(id)}/>        
        </PageContainer>
    )
}