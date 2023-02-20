import { HandleMoveTodoProp, Todo } from "./Todo"

export interface ItemProps {
  todo: Todo
  handleMove: (obj: HandleMoveTodoProp) => void
  index: number
}

export interface Item {
  id: number
  name: string
  order: number
  items: Item[]
}

export interface HandleMoveItemProp {
  index: number
  type: "item" | "subitem"
  id: number | null
  parent: number
  direction: "up" | "down"
}

export interface ModalProps {
  parent: number
  item: Item | null
  type: "item" | "subitem"
}

export interface EditItemProps {
  item: Item,
  index: number
  type: "item" | "subitem"
  id: number | null
  parent: number
  handleMoveItem: (obj: HandleMoveItemProp) => void
}