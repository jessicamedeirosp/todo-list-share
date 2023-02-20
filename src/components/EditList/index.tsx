import { useEffect } from 'react'
import { useTodo } from '../../hooks/useTodo'
import { EditListProps } from '../../Interfaces/List'
import { ListContainer } from '../../styles/list'
import { EditItem } from '../EditItem'

export function EditList({ id }: EditListProps) {
    const { todos, todoCurrent, setTodoCurrent, handleMoveItem } = useTodo()

    useEffect(() => {
        const currentTodo = todos.find(todo => todo.id === id)
        if (currentTodo) {
            setTodoCurrent(currentTodo)
        }
    }, [todos])


    return (
        <ListContainer>
            {todoCurrent?.items?.map((item, index) => (
                <div key={item.id}>
                    <EditItem item={item} id={item.id} type='item' index={index} handleMoveItem={handleMoveItem} parent={todoCurrent.id} />

                    {item.items.map((subitem, index) => (
                        <EditItem key={subitem.id} item={subitem} id={subitem.id} type='subitem' index={index} handleMoveItem={handleMoveItem} parent={item.id} />
                    ))}
                </div>
            ))}
        </ListContainer>
    )
}

