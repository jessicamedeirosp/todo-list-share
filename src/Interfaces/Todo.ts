import { Item, ModalProps, HandleMoveItemProp } from './Item'
import { ReactNode, Dispatch, SetStateAction } from "react"

export interface Todo {
  id: number
  name: string
  permalink: string
  items: Item[]
  order: number
}

export interface TodoContextProps {
  todos: Todo[]
  todoCurrent: Todo
  setTodos: Dispatch<SetStateAction<Todo[]>>
  setTodoCurrent: Dispatch<SetStateAction<Todo>>
  sortItems: (items: Item[]) => Item[]
  sortTodos: (newTodos: Todo[]) => Todo[]
  createTodo: (name: string) => void
  createItem: (name: string, parent: number) => void
  createSubItem: (name: string, parent: number) => void
  updateTodo: (todo: Todo) => void
  readTodo: (id: number) => Todo | undefined
  readTodos: () => void
  modalIsOpen: boolean
  toggleModal: () => void
  modal: ModalProps
  setModal: Dispatch<SetStateAction<ModalProps>>
  deleteTodo: (id: number) => void
  deleteItem: (id: number) => void
  deleteSubItem: (id: number, parent: number) => void
  moveTodo: (index: number, todos: Todo[], direction: "up" | "down") => void
  moveItem: (
    index: number,
    items: Item[],
    direction: "up" | "down",
    parent: number | null
  ) => void
  handleMoveItem: (props: HandleMoveItemProp) => void
  findItem: (id: number, items: Item[]) => Item | undefined
  createNewItems: (items: Item[], newItem: Item) => Item[]
}

export interface TodoProviderProps {
  children: ReactNode
}



// export interface ItemProps {
//   id: number
//   name: string
//   type?: string
// }





export interface HandleMoveTodoProp {
  index: number
  direction: "up" | "down"
}