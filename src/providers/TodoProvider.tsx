import { useState } from "react"
import { toast } from "react-toastify"
import { TodoContext } from "../contexts/TodoContext"
import { HandleMoveItemProp, Item, ModalProps } from "../Interfaces/Item"
import { Todo, TodoProviderProps} from "../Interfaces/Todo"
import { create, read, remove, update } from "../services/crud"

export function TodoProvider({ children }: TodoProviderProps) {
    const [todos, setTodos] = useState<Todo[]>([] as Todo[])
    const [todoCurrent, setTodoCurrent] = useState<Todo>({} as Todo)
    const [modalIsOpen, setIsOpen] = useState(false)
    const [modal, setModal] = useState<ModalProps>({} as ModalProps)

    async function readTodos() {
        try {
            const data = await read('/todo')
            setTodos(sortTodos(data))
        } catch (e: any) {
            toast.error(e)
        }
    }

    async function deleteItem(id: number) {
        try {
            const newItems = removeItem(id, todoCurrent.items)
            const newTodo = { ...todoCurrent, items: newItems }
            updateTodo(newTodo)
            readTodos()
        } catch (e: any) {
            toast.error(e)
        }
    }

    async function deleteTodo(id: number) {
        try {
            remove(`/todo/${id}`)
            readTodos()
        } catch (e: any) {
            toast.error(e)
        }
    }

    async function deleteSubItem(id: number, parent: number) {
        try {
            const newTodoCurrent = { ...todoCurrent }
            const newItem = findItem(parent, newTodoCurrent.items)
            if (!newItem) return
            newItem.items = removeItem(id, newItem.items)
            newTodoCurrent.items = createNewItems(newTodoCurrent.items, newItem)

            updateTodo(newTodoCurrent)
            readTodos()
        } catch (e: any) {
            toast.error(e)
        }
    }

    const removeItem = (id: number, items: Item[]) => {
       return items.filter(subitem => subitem.id !== id)
    }

    function sortTodos(newTodos: Todo[]) {
        const sortedTodos = newTodos.map(todo => {
            return {
                ...todo,
                items: sortItems(todo.items).map(item => {
                    return {
                        ...item,

                        items: sortItems(item.items)
                    }
                })
            }
        }).sort((a, b) => a.order - b.order)

        return sortedTodos
    }

    function sortItems(items: Item[]) {
        const newItems = [...items]
        newItems.sort((a, b) => a.order - b.order)
        return newItems
    }

    function moveTodo(index: number, todos: Todo[], direction: 'up' | 'down') {
        const firstItem = todos[index]
        const secondItem = direction === 'up' ? todos[index - 1] : todos[index + 1]
        
        if (!secondItem) return
        
        [secondItem.order, firstItem.order] = [firstItem.order, secondItem.order]
        updateTodo(firstItem)
        updateTodo(secondItem)
        const newTodos = todos.map(todo => {
            if(todo.id === firstItem.id) return firstItem
            if(todo.id === secondItem.id) return secondItem
            return todo
        })
        setTodos(sortTodos(newTodos))
    }

    function moveItem(index: number, items: Item[], direction: 'up' | 'down', parent: number | null) {
        const newToCurrent = { ...todoCurrent }
     
        if (!parent) {
            const firstItem = items[index]
            const secondItem = direction === 'up' ? items[index - 1] : items[index + 1]

            if (!secondItem) return
            
            [secondItem.order, firstItem.order] = [firstItem.order, secondItem.order]
           
            newToCurrent.items = newToCurrent.items.map(item => {
                if (item.id == firstItem.id) return firstItem
                if (item.id == secondItem.id) return secondItem
                return item
            })


        } else {
            const firstItem = items[index]
            const secondItem = direction === 'up' ? items[index - 1] : items[index + 1]
       
            if(!secondItem) return
            [secondItem.order, firstItem.order] = [firstItem.order, secondItem.order]
            const newToCurrent = { ...todoCurrent }
            const newItem = findItem(parent, newToCurrent.items)
            if (!newItem) return
            newItem.items = newItem.items.map(subitem => {
                if (subitem.id == firstItem.id) return firstItem
                if (subitem.id == secondItem.id) return secondItem
                return subitem
            })
            newToCurrent.items = createNewItems(newToCurrent.items, newItem)
          
        }        
        updateTodo(newToCurrent)
        readTodos()       
    }

    function readTodo(id: number) {
        try {
            const newTodo = findTodo(id, todos)
            if (newTodo)
                setTodoCurrent(newTodo)
            return newTodo

        } catch (e: any) {
            toast.error(e)
        }
    }

    function createMax(key: 'id' | 'order', list: Item[] | Todo[]) {
        const newList = [...list]
        const maxId = newList.reduce((a, b) => Math.max(a, b[key]), 0)

        return maxId
    }

    function updateTodo(todo: Todo) {
        try {
            update(`/todo/${todo.id}`, todo)
            const newTodos = createNewTodo(todos, todo) 
            setTodos(newTodos)          
        } catch (e: any) {
            toast.error(e)
        }
    }

    async function createTodo(name: string) {
        try {
            const id = createMax('id', todos) + 1
            const order = createMax('order', todos) + 1
            const newTodo: Todo = {
                id,
                name,
                permalink: `/todo/${id}`,
                items: [],
                order
            }
            create('/todo', newTodo)
           
            readTodos()
        } catch (e: any) {
            toast.error(e)
        }
    }

    async function createItem(name: string, parent: number) {
        try {
            const newTodo = findTodo(parent, todos) 
            if (!newTodo) return
            const id = createMax('id', newTodo.items) + 1
            const order = createMax('order', newTodo.items) + 1
            const newItem: Item = {
                id,
                name,
                items: [],
                order
            }
            newTodo.items = [...newTodo.items, newItem]           
            update(`/todo/${parent}`, newTodo)
            readTodos()

        } catch (e: any) {
            toast.error(e)
        }
    }

    async function createSubItem(name: string, parent: number) {
        try {
            const newTodoCurrent = { ...todoCurrent }
            const newItem = findItem(parent, newTodoCurrent.items)
            if (!newItem) return
            const id = createMax('id', newItem.items) + 1
            const order = createMax('order', newItem.items) + 1
            const newSubItem: Item = {
                id,
                name,
                items: [],
                order
            }
            newItem.items = [...newItem.items, newSubItem]
            newTodoCurrent.items = createNewItems(newTodoCurrent.items, newItem)

            update(`/todo/${todoCurrent.id}`, newTodoCurrent)
            readTodos()


        } catch (e: any) {
            toast.error(e)
        }
    }


    function toggleModal() {
        setIsOpen(!modalIsOpen)
    }

    const findTodo = (id: number, todos: Todo[]) => {
        return todos.find(todo => todo.id === id)
    }
    
    const createNewItems  = (items: Item[], newItem: Item) => {
        return items.map(item => item.id === newItem.id ? newItem : item)
    }
    const createNewTodo  = (todo: Todo[], newTodo: Todo) => {
        return todo.map(todo => todo.id === newTodo.id ? newTodo : todo)
    }
    const findItem = (id: number, items: Item[]) => {
        return items.find(item => item.id === id)
    }

    const findSubitem = (id: number, item: Item) => {
        return item.items.find(subitem => subitem.id === id)
    }

    
    function handleMoveItem({ index, id, parent, type, direction }: HandleMoveItemProp) {
        const isSubitem = type === "subitem" && id
        const items = isSubitem ? findItem(parent, todoCurrent.items)?.items : todoCurrent.items
        const todo = isSubitem  && items ? findItem(parent, todoCurrent.items) : todoCurrent
        const target = isSubitem && items && todo ? findSubitem(id, todo) : id && items && findItem(id, items)
      
        if (!todo || !target) return
        if (isSubitem) {
           moveItem(index, todo.items, direction, parent)          

        } else {
            moveItem(index, todo.items, direction, null)
        }
    }

    

    return <TodoContext.Provider value={{
        todos,
        setTodos,
        todoCurrent,
        setTodoCurrent,
        sortItems,
        moveItem,
        sortTodos,
        createTodo,
        createItem,
        createSubItem,
        updateTodo,
        readTodo,
        readTodos,
        modalIsOpen,
        toggleModal,
        modal,
        setModal,
        deleteItem,
        deleteSubItem,
        deleteTodo,
        moveTodo,
        handleMoveItem,
        findItem,
        createNewItems
    }}>
        {children}
    </TodoContext.Provider>
}
