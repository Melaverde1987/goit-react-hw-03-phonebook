import styled from 'styled-components';

export const FilterContainer = styled.div`
  background: var(--white);
  padding: 20px;
  border-radius: 5px;
  margin-bottom: 30px;

  .container {
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
  }

  label {
    margin-bottom: 5px;
    color: var(--colorPrimary);
    font-weight: 600;
  }

  input {
    padding: 5px 10px;
    border-radius: 5px;
    border: 1px solid var(--black);
  }
`;
