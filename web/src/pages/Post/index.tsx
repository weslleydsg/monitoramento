import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Typography from '@material-ui/core/Typography';

import { useLoadOverlay } from '../../contexts/loadOverlay';
import Post from '../../components/Post';

import { Content, List } from './styles';

interface PostData {
  id: number;
  title: string;
  body: string;
  user: {
    id: number;
    name: string;
  };
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

interface Params {
  id: string;
}

const Posts: React.FC = () => {
  const { id } = useParams<Params>();

  const [posts, setPosts] = useState<PostData[]>([]);

  const { loading, setLoadingOverlay } = useLoadOverlay();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    let unmounted = false;

    (async () => {
      setLoadingOverlay(true);

      try {
        const postResponse: PostData[] = await (
          await fetch(`${process.env.REACT_APP_API_URL}posts/${id}/`)
        ).json();

        if (unmounted) return;

        if (!postResponse) setErrorMessage('Post not found.');
        else setPosts(postResponse);

        setLoadingOverlay(false);
      } catch (error) {
        setErrorMessage('Invalid API URL.');
        setLoadingOverlay(false);
      }
    })();

    return () => {
      unmounted = true;
    };
  }, []);

  const PostsContent = () => {
    if (errorMessage) {
      return <Typography variant="h4">{errorMessage}</Typography>;
    }

    return (
      <List>
        {posts.map((post) => (
          <Post
            key={`post-${post.id}`}
            title={post.title}
            body={post.body}
            userName={post.user.name}
            companyName={post.company.name}
          />
        ))}
      </List>
    );
  };

  return <Content>{loading ? '' : PostsContent()}</Content>;
};

export default Posts;
