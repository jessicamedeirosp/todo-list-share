import { ReactNode, Dispatch, SetStateAction } from 'react';
export interface TodoItem {
    id: number,
    name: string,  
    order: number,
    items: TodoItem[]
}
export interface Todo {
    id: number,
    name: string,
    permalink: string, 
    items: TodoItem[],
    order: number
}

export interface TodoContextProps {
    todos: Todo[],
    todoCurrent: Todo,
    createTodo: (name: string) => Promise<void>
    deleteTodo: (id: number) => Promise<void>
    updateOrderItems: (items: Todo[]) => void
    updateTodoList: (todo: Todo) => void
    getTodos: () => void
    setTodos: Dispatch<SetStateAction<Todo[]>>
    setTodoCurrent: Dispatch<SetStateAction<Todo>>
}

export interface TodoProviderProps {
    children: ReactNode
}