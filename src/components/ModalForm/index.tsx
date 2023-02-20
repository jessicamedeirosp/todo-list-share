import { AiOutlineClose } from "react-icons/ai"
import Modal from 'react-modal'
import { useTodo } from '../../hooks/useTodo'
import { FormItem } from '../FormItem'
import { Container } from './styles'

export function ModalForm() {
  const { modalIsOpen, toggleModal } = useTodo()

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={toggleModal}
      overlayClassName="modal-overlay"
      className="modal-content"
      ariaHideApp={false}
    >
      <Container>
        <button className="content-flex" onClick={toggleModal}><AiOutlineClose /></button>
        <FormItem />
      </Container>
    </Modal>
  )
}