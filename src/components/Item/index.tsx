import { AiOutlineDelete, AiOutlineEdit, AiOutlineShareAlt } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useTodo } from "../../hooks/useTodoList";
import { Todo } from "../../Interfaces/Todo";
import { TodoItem } from "./styles";

type ItemProps = Omit<Todo, 'permalink'| 'items' | 'order'>

export function Item({name, id}: ItemProps) {
    const { deleteTodo } = useTodo()
    const navigate = useNavigate()

    function copyText(id: number) {
        const text = `http://127.0.0.1:5173/todo/${id}`
        navigator.clipboard.writeText(text);
    }

    function handleDelete(id: number) {       
        const response = confirm("Tem certeza que deseja excluir?")
        if (!response) return
        deleteTodo(id)
    }

    return (
        <TodoItem className="todo-item">
            <p>{name}</p>
            <div className="content-flex">
                <button onClick={() => navigate(`/todo/${id}`)} type="button" className="btn-edit content-flex"><AiOutlineEdit size={20} /></button>
                <button onClick={() => handleDelete(id)} type="button" className="btn-delete content-flex"><AiOutlineDelete size={20} /></button>
                <button onClick={() => copyText(id)} type="button" className="btn-share content-flex"><AiOutlineShareAlt size={20} /></button>
            </div>
        </TodoItem>
    )
}