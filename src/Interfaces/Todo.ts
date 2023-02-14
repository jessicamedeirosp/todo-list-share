import { ReactNode, Dispatch, SetStateAction } from 'react';
export interface TodoItem {
    id: number,
    item: string,  
    order: number
}
export interface Todo {
    id: number,
    name: string,
    permalink: string, 
    itens: TodoItem[],
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