import { AiOutlineArrowDown, AiOutlineArrowUp, AiOutlineDelete, AiOutlineEdit, AiOutlinePlus } from "react-icons/ai"
import { useTodo } from "../../hooks/useTodo"
import { EditItemProps } from "../../Interfaces/Item"
import { TodoItem } from "../../styles/item"

export function EditItem({ item, id, index, handleMoveItem, parent, type }: EditItemProps) {
   
    const { todoCurrent, toggleModal, setModal, deleteItem, deleteSubItem, findItem } = useTodo()

    function handleDisabled() {

        if (type === 'subitem') {
            const item = findItem(parent, todoCurrent.items);
            const itemLength = item ? item.items.length : 0
            return itemLength - 1 <= index            
        } 

        const items = todoCurrent.items
        const itemLength = items ? items.length : 0
        return itemLength - 1 <= index
        
    }

    function handleDeleteItem() {
        const response = confirm("Tem certeza que deseja excluir?")
        if (!response) return
        if (type === 'item' && id) deleteItem(id)        
        if (type === 'subitem' && id) deleteSubItem(id, parent)        
    }

    function handleEdit() {
        setModal({ parent, item, type })
        toggleModal()
    }

    function handleCreate() {
        if (!id) return
        setModal({ parent: id, item: null, type: 'subitem' })
        toggleModal()
    }

    return (
        <TodoItem key={item.id} className={type}>
            <div className="content-flex">
                <button type="button" disabled={!index} className="btn-move content-flex" onClick={() => handleMoveItem({ index, type, id, parent, direction: 'up' })}><AiOutlineArrowUp size={20} /></button>
                <button type="button" disabled={handleDisabled()} className="btn-move content-flex" onClick={() => handleMoveItem({ index, type, id, parent, direction: 'down' })}><AiOutlineArrowDown size={20} /></button>
            </div>
            <p>{item.name}</p>
            <div className="content-flex btns-right ">
                <button onClick={handleEdit} type="button" className="btn-edit content-flex"><AiOutlineEdit size={20} /></button>
                <button onClick={handleDeleteItem} type="button" className="btn-delete content-flex"><AiOutlineDelete size={20} /></button>
                {type === 'subitem' ? null : <button onClick={handleCreate} type="button" className="btn-share content-flex"><AiOutlinePlus size={20} /></button>}
            </div>
        </TodoItem>
    )
}