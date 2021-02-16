import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import { lighten } from 'polished';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';

import MoreIcon from '@material-ui/icons/MoreVert';

import { useTheme } from '../../contexts/theme';

import { Container, CustomMenu } from './styles';

const Header: React.FC = () => {
  const { themeName, toggleTheme } = useTheme();

  const { colors } = useContext(ThemeContext);

  const [configsAnchorEl, setConfigsAnchorEl] = useState<null | HTMLElement>(
    null
  );
  const openConfigsAnchorEl = Boolean(configsAnchorEl);

  const handleConfigsMenu = (event: any) =>
    setConfigsAnchorEl(event.currentTarget);
  const handleConfigsClose = () => setConfigsAnchorEl(null);

  const configsMenuId = 'configs-app-menu';
  const renderConfigsMenu = (
    <CustomMenu
      id={configsMenuId}
      anchorEl={configsAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right'
      }}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right'
      }}
      open={openConfigsAnchorEl}
      onClose={handleConfigsClose}
    >
      <MenuItem>
        <span>Dark Mode</span>
        <Switch
          onChange={toggleTheme}
          checked={themeName !== 'light'}
          checkedIcon={false}
          uncheckedIcon={false}
          handleDiameter={24}
          width={40}
          height={18}
          offColor={lighten(0.1, colors.highlight)}
          onColor={colors.tertiary}
        />
      </MenuItem>
    </CustomMenu>
  );

  return (
    <Container>
      <AppBar position="static">
        <Toolbar>
          <Link to="/">
            <h1>Monitoramento</h1>
          </Link>

          <div>
            <IconButton
              aria-label="configurations"
              aria-controls={configsMenuId}
              aria-haspopup="true"
              onClick={handleConfigsMenu}
              color="inherit"
            >
              <MoreIcon
                style={{ fill: themeName === 'light' ? 'black' : '' }}
              />
            </IconButton>
          </div>
        </Toolbar>
        {renderConfigsMenu}
      </AppBar>
    </Container>
  );
};

export default Header;
