import { useParams } from "react-router-dom";
import { Form } from "../../components/Form";
import { Container } from "./styles";


import { List } from "../../components/List";
import { useTodo } from "../../hooks/useTodoList";

export function EditTodoList() {
    const { id } = useParams();
    const { todoCurrent} = useTodo()

    function handleOnDragEnd(result: any) {
        if (!result.destination) return;

        const items = Array.from(todoCurrent.items);

        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);

       
    }

    return (
        <Container className="wrapper">
            <Form id={Number(id)}/>
            <List handleOnDragEnd={handleOnDragEnd} todos={todoCurrent.items} />
        </Container>
    )
}