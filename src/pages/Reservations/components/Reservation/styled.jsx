import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 10px;
  display: flex;
  justify-content: space-between;

  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  .informations {
    p {
      font-size: 20px;
    }
  }

  .valid {
    color: #048f0e;
  }

  .expired {
    color: crimson;
  }
`;
