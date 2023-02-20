import styled from "styled-components";

export const TodoItem = styled.div`
  padding: 1rem 2rem;
  border: 0;
  background: var(--white);
  color: var(--gray);
  display: flex;
  gap: 2rem;
  align-items: center;
  margin-bottom: 1rem;

  &.subitem {
    width: calc(100% - 2rem);
    background-color: var(--gray-200);
    margin-left: 2rem;
    color: var(--blue);
  }

  .btns-right {
    margin-left: auto;
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

  .btn-move {
    background-color: var(--blue-200);
    color: var(--white);
    padding: 0 1rem;
  }  
`;