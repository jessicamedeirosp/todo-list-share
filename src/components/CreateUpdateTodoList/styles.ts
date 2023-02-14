import styled from 'styled-components'

export const CreateUpdateTodoListForm = styled.form`
  padding-bottom: 2rem;
  border-bottom: 1px solid var(--gray-500);
  
  label {
    color: var(--blue);
    font-size: 2.4rem;
    margin-bottom: 2rem;
    font-weight: 600;
    display: block ;
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
