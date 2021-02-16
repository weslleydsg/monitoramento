import styled from 'styled-components';

export const Container = styled.div`
  padding-bottom: 20px;

  > div {
    background: ${(props) => props.theme.colors.header};
    padding: 20px;
    margin: 10px 40px;

    > div {
      padding-bottom: 20px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }

    > h2 {
      padding: 18px;
    }
  }
`;
