import styled from 'styled-components';

import Menu from '@material-ui/core/Menu';

export const Container = styled.div`
  header {
    background: ${(props) => props.theme.colors.header};

    > div {
      padding: 0 30px;
      display: flex;
      justify-content: space-between;
    }

    h1 {
      color: ${(props) => props.theme.colors.headerText};
    }
  }
`;

export const Logo = styled.img`
  width: 100px;
`;

export const CustomMenu = styled(Menu)`
  > .MuiPaper-root.MuiMenu-paper {
    background-color: ${(props) => props.theme.colors.header};
  }

  li {
    color: ${(props) => props.theme.colors.headerText} !important;
  }
`;
