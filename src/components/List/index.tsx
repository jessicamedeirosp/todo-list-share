import { HandleMoveTodoProp } from "../../Interfaces/Todo"
import { Item } from "../Item"
import { useTodo } from "../../hooks/useTodo"
import { ListContainer } from "../../styles/list"


export function List() {
    const {todos, moveTodo} = useTodo()

    function handleMove({index, direction}: HandleMoveTodoProp) {
       moveTodo(index, todos, direction)  
    }
    
    return (
        <ListContainer>
            {todos.map((todo, index) => (
                <div key={todo.id}>
                    <Item todo={todo} index={index} handleMove={handleMove} />
                </div>
            ))}
        </ListContainer>
    )
}