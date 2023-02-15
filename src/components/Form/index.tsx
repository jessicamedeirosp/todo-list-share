import { CreateUpdateTodoListForm } from './styles';
import { useState, FormEvent, useEffect } from 'react'
import { toast } from 'react-toastify'
import { useTodo } from '../../hooks/useTodoList';
import api from '../../services/api';
interface FormProps {
    id?: number
}
export function Form({ id }: FormProps) {
    const [todoInput, setTodoInput] = useState<string>("")
    const { todoCurrent, createTodo, setTodoCurrent, updateTodoList } = useTodo()

    const labelTodoListForm = id ? 'Alterar' : 'Criar';
    function handleSumit(event: FormEvent<EventTarget>) {
        event.preventDefault()

        if (!todoInput.length) {
            toast.warning('Adicionar nome a lista');
            return
        }

        if (todoInput == todoCurrent.name) return

        if (id) {
            const newTodo = {
                ...todoCurrent,
                name: todoInput
            }
            updateTodoList(newTodo)
            return
            
        }
        createTodo(todoInput)
        setTodoInput("")
        
    }

    async function getTodo() {
        try {
            const { data } = await api.get(`/todo/${id}`)
            setTodoCurrent(data)
            console.log(data)
            setTodoInput(data.name)

        } catch (e: any) {
            toast.error(e)
        }
    }

    useEffect(() => {
        getTodo()
    }, [])

    return (
        <CreateUpdateTodoListForm onSubmit={handleSumit}>
            <label htmlFor="todoInput">{labelTodoListForm} lista</label>
            <input type="text" value={todoInput} id="todoInput" onChange={(event => setTodoInput(event.target.value))} />
            <button type="submit">{labelTodoListForm}</button>
        </CreateUpdateTodoListForm>
    )
}