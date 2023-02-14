import styled from "styled-components";

export const Container = styled.section`
  padding-top: 3.2rem;
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
