import { FormEvent, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { useTodo } from '../../hooks/useTodo'
import { FormContainer } from '../../styles/form'

export function FormItem() {
    const { modal, todoCurrent, findItem, updateTodo, readTodos, createItem, createNewItems, createSubItem, toggleModal} = useTodo()
    const { parent, item, type} = modal
    
    const [ todoInput, setTodoInput] = useState<string>("")

    const labelTodoListForm = !item ? 'Criar': 'Alterar'
    
    async function handleSubmit(event: FormEvent<EventTarget>) {
        event.preventDefault()

        if (!todoInput.length) {
            toast.warning('Adicionar nome a lista')
            return
        }

        if(type === 'subitem') {
            if(item) {
                const newSubItem = {...item, name: todoInput}  
                const newTodoCurrent =    {...todoCurrent}    
                const newItem = findItem(parent, newTodoCurrent.items) 
                if(!newItem) return
                newItem.items = createNewItems(newItem.items, newSubItem)
                newTodoCurrent.items = createNewItems(newTodoCurrent.items, newItem)  
                updateTodo(newTodoCurrent)
                toggleModal()
                toast.success('subitem alterado com sucesso')
                readTodos()
                return
            }
            createSubItem(todoInput, parent)
            toggleModal()
            toast.success('subitem criado com sucesso')
            return
        }
        if(item) {
            const newItem = {...item}  
            newItem.name = todoInput 
            const newTodoCurrent = {...todoCurrent}    
            newTodoCurrent.items = createNewItems(newTodoCurrent.items, newItem)
            updateTodo(newTodoCurrent)
            toggleModal()
            toast.success('item alterado com sucesso')
            readTodos()
            return
        } 
        createItem(todoInput, parent)               
        toggleModal()
        toast.success('item criado com sucesso') 
    }

    useEffect(() => {
        if (item) setTodoInput(item.name)     
    }, [item])

    return (
        <FormContainer onSubmit={handleSubmit}>
            <label htmlFor="todoInput">{labelTodoListForm} {type}</label>           
            <input type="text" value={todoInput} id="todoInput" onChange={(event => setTodoInput(event.target.value))} />
            <button type="submit">{labelTodoListForm}</button>
        </FormContainer>
    )
}