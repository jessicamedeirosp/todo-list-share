import { CreateUpdateTodoListForm } from './styles';
import {useState, FormEvent} from 'react'
import {toast} from 'react-toastify'
import { useTodo } from '../../hooks/useTodoList';

export function CreateUpdateTodoList() {
    const [todoInput, setTodoInput] = useState<string>("")
    const { createTodo } = useTodo()

    function handleSumit(event: FormEvent<EventTarget>) {
        event.preventDefault()
        if (!todoInput.length) {
            toast.warning('Adicionar nome a lista');
            return
        }
        createTodo(todoInput)
        setTodoInput("")
    }
    return (
        <CreateUpdateTodoListForm onSubmit={handleSumit}>
            <label htmlFor="todoInput">Criar nova lista</label>
            <input type="text" value={todoInput} id="todoInput" onChange={(event => setTodoInput(event.target.value))} />
            <button type="submit">Criar</button>
        </CreateUpdateTodoListForm>
    )
}