import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';

import { Wrapper, Content, CustomListItem } from './styles';
import { useLoadOverlay } from '../../contexts/loadOverlay';

interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Company;
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

type LoadState = 'idle' | 'loading' | 'loaded' | 'error';

const Home: React.FC = () => {
  const { setLoadingOverlay } = useLoadOverlay();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const [users, setUsers] = useState<User[]>([]);
  const [loadState, setLoadState] = useState<LoadState>('loading');

  useEffect(() => {
    if (loadState === 'loading') setLoadingOverlay(true);
    else setLoadingOverlay(false);
  }, [loadState]);

  useEffect(() => {
    let unmounted = false;

    const loadData = async () => {
      try {
        const usersResponse: User[] = await (
          await fetch(`${process.env.REACT_APP_API_URL}users`)
        ).json();

        if (unmounted) return;

        setUsers([...users, ...usersResponse]);

        setLoadState('loaded');
      } catch (error) {
        if (unmounted) return;

        setErrorMessage('Invalid API URL.');
        setLoadState('error');
      }
    };

    loadData();

    return () => {
      unmounted = true;
    };
  }, []);

  const HomeContent = () => {
    if (errorMessage) {
      return <Typography variant="h4">{errorMessage}</Typography>;
    }

    return (
      <Content>
        <List component="div" disablePadding>
          {users.map((user) => (
            <Link key={`user-${user.id}`} to={`/posts/${user.id}`}>
              <CustomListItem button>
                <ListItemText primary={user.name} />
                <span>{user.company.name}</span>
              </CustomListItem>
            </Link>
          ))}
        </List>
      </Content>
    );
  };

  return <Wrapper>{HomeContent()}</Wrapper>;
};

export default Home;
