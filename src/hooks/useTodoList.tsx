import { createContext, useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { Todo, TodoContextProps, TodoProviderProps } from '../Interfaces/Todo';
import api from '../services/api';

const TodoContext = createContext<TodoContextProps>({} as TodoContextProps)

export function TodoProvider({ children }: TodoProviderProps) {
    const [todos, setTodos] = useState<Todo[]>([])
    const headers = {
        "authorization": "XXXXXXX"
    }

    async function createTodo(name: string) {
        try {
            const newTodos = [...todos]
            const maxId = newTodos.reduce((a, b) => Math.max(a, b.id), -Infinity);
          
            const newTodo = {
                id: maxId + 1,
                name,

            }
            
            const { data } = await api.post('/todo', newTodo, {
                headers
            })
            
            setTodos([...todos, data])
        } catch (e: any) {
            toast.error(e)
        }
    }

    async function deleteTodo(id: number) {
        try {
            await api.delete(`/todo/${id}`)
            const newTodos = todos.filter(item => item.id !== id)

            setTodos(newTodos)
        } catch (e: any) {
            toast.error(e)
        }
    }

    function sortTodo(items: Todo[]) {
        const newItems = items.sort(function (a, b) {
            return a.order - b.order;
        });
        console.log(newItems)
        return newItems
    }

    function updateOrderItems(items: Todo[]) {
        items.map((item, index) => {
            item.order = index
            saveNewOrderItems(item)
        })

    }
    async function saveNewOrderItems({id, order}: Todo) {
        try {
            await api.patch(`/todo/${id}`, {order}, {headers})
        } catch(e: any) {
            toast.error(e)
        }
    }

    async function getTodos() {
        try {
            const { data } = await api.get('/todo', { headers })
            const newTodos = sortTodo(data)
            setTodos(newTodos)
        } catch (e: any) {
            toast.error(e)
        }
    }

    useEffect(() => {
        getTodos()
    }, [])


    return <TodoContext.Provider value={{ todos, createTodo, deleteTodo, setTodos, updateOrderItems }}>
        {children}
    </TodoContext.Provider>
}

export function useTodo() {
    return useContext(TodoContext)
}