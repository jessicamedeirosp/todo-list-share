import { useContext } from 'react'
import { TodoContext } from '../contexts/TodoContext'

export function useTodo() {
    return useContext(TodoContext)
}