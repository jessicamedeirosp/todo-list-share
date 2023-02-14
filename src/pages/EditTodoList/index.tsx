import { useParams } from "react-router-dom";

export function EditTodoList() {
    const { id } = useParams();
    return (
        <h1>edit {id}</h1>
    )
}