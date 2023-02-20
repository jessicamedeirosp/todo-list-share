import { AiOutlineDelete, AiOutlineEdit,  AiOutlineShareAlt, AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai"
import { useNavigate } from "react-router-dom"
import { useTodo } from "../../hooks/useTodo"
import { ItemProps } from "../../Interfaces/Item"
import { TodoItem } from "../../styles/item"

export function Item({ todo, index, handleMove}: ItemProps) {
    const {todos, deleteTodo} = useTodo()
    const navigate = useNavigate()

    function copyText(id: number) {
        const text = `http://127.0.0.1:5173/todo/${id}`
        navigator.clipboard.writeText(text)
    }

    function handleDelete(id: number) {
        const response = confirm("Tem certeza que deseja excluir?")
        if (!response && !id) return        
        deleteTodo(id)
    }

    return (
        <TodoItem key={todo.id}>
            <div className="content-flex">
                <button type="button" disabled={!index} className="btn-move content-flex" onClick={() => handleMove({ index, direction: 'up' })}><AiOutlineArrowUp size={20}/></button>
                <button type="button" disabled={(todos.length - 1) <= index} className="btn-move content-flex" onClick={() => handleMove({ index,  direction: 'down' })}><AiOutlineArrowDown size={20}/></button>
            </div>
            <p>{todo.name}</p>
            <div className="content-flex btns-right ">
                <button onClick={() => navigate(`/todo/${todo.id}`)} type="button" className="btn-edit content-flex"><AiOutlineEdit size={20} /></button>
                <button onClick={() => handleDelete(todo.id)} type="button" className="btn-delete content-flex"><AiOutlineDelete size={20} /></button>
                <button onClick={() => copyText(todo.id)} type="button" className="btn-share content-flex"><AiOutlineShareAlt size={20} /></button>
            </div>
        </TodoItem>


    )
}