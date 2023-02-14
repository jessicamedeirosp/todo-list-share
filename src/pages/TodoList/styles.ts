import styled from "styled-components";

export const Container = styled.section`
  padding-top: 3.2rem;
`;

export const CreateTodoListForm = styled.form`
  padding-bottom: 2rem;
  border-bottom: 1px solid var(--gray-500);
  
  label {
    color: var(--blue);
    font-size: 2.4rem;
    margin-bottom: 2rem;
    font-weight: 600;
  }

  input {
    width: calc(100% - 16.6rem);
    padding: 0 1.5rem;
    height: 4rem;
    margin-right: 1.6rem;
    border-radius: var(--border-radius);

    border: 1px solid var(--gray-500);
    background: var(--gray-200);

    &::placeholder {
      color: var(--gray);
    }
  }

  button[type="submit"] {
    width: 15rem;
    background: var(--green);
    color: var(--white);
  }
`;

export const ListTodoListTable = styled.div`
  width: 100%;
  margin-top: 1.6rem;

  .todo-item {
    padding: 1rem 2rem;
    border: 0;
    background: var(--white);
    color: var(--gray);
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
  }

  .btn-edit {
    background-color: var(--gray);
    color: var(--white);
  }

  .btn-delete {
    background-color: var(--red);
    color: var(--white);
  }

  .btn-share {
    background-color: var(--blue);
    color: var(--white);
  }
`;
