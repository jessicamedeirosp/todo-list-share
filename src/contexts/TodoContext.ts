import { TodoContextProps } from './../Interfaces/Todo'
import { createContext } from 'react'

export const TodoContext = createContext<TodoContextProps>({} as TodoContextProps)