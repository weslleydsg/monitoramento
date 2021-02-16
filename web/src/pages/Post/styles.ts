import styled from 'styled-components';
import MList from '@material-ui/core/List';

export const Content = styled.div`
  max-width: 1200px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin: auto;
`;

export const List = styled(MList)`
  height: 100%;
`;
