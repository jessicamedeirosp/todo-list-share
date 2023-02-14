import { ReactNode, Dispatch, SetStateAction } from 'react';

export interface Todo {
    id: number,
    name: string,
    permalink: string, 
    itens: Todo[],
    order: number
}

export interface TodoContextProps {
    todos: Todo[],
    createTodo: (name: string) => Promise<void>
    deleteTodo: (id: number) => Promise<void>
    updateOrderItems: (items: Todo[]) => void
    setTodos: Dispatch<SetStateAction<Todo[]>>
}

export interface TodoProviderProps {
    children: ReactNode
}