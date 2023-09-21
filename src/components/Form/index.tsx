import { FormEvent, useEffect, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { toast } from "react-toastify";
import { useTodo } from "../../hooks/useTodo";
import { FormProps } from "../../Interfaces/Form";
import { FormContainer } from "../../styles/form";

export function Form({ id }: FormProps) {
  const {
    todos,
    todoCurrent,
    createTodo,
    updateTodo,
    readTodo,
    readTodos,
    setModal,
    toggleModal,
  } = useTodo();
  const [todoInput, setTodoInput] = useState<string>("");

  const labelTodoListForm = !id ? "Criar" : "Alterar";

  async function handleSubmit(event: FormEvent<EventTarget>) {
    event.preventDefault();

    if (!todoInput.length) {
      toast.warning("Adicionar nome a lista");
      return;
    }

    if (todoInput == todoCurrent.name) return;

    if (!id) {
      createTodo(todoInput);
      toast.success("Todo criado com sucesso");
      setTodoInput("");
      return;
    }
    const newTodo = {
      ...todoCurrent,
      name: todoInput,
    };
    updateTodo(newTodo);
    toast.success("Todo alterado com sucesso");
  }

  function handleLoad() {
    if (id) {
      const data = readTodo(id);
      const name = data ? data.name : "";
      setTodoInput(name);
    }
  }

  function handleCreate() {
    setModal({ parent: todoCurrent.id, item: null, type: "item" });
    toggleModal();
  }

  useEffect(() => {
    handleLoad();
  }, [todos.length]);

  return (
    <FormContainer onSubmit={handleSubmit}>
      <div className="content-flex-between">
        <label htmlFor="todoInput">{labelTodoListForm} lista</label>
        {id && (
          <button onClick={handleCreate} className="btn-add content-flex">
            Criar Item <AiOutlinePlus />
          </button>
        )}
      </div>
      <input
        type="text"
        value={todoInput}
        id="todoInput"
        onChange={(event) => setTodoInput(event.target.value)}
      />
      <button type="submit">{labelTodoListForm}</button>
    </FormContainer>
  );
}
