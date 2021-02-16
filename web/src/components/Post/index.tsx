import React from 'react';

import { Container } from './styles';

interface RouteParams {
  title: string;
  body: string;
  userName: string;
  companyName: string;
}

const Post: React.FC<RouteParams> = ({
  title,
  body,
  userName,
  companyName
}) => (
  <Container>
    <div>
      <div>
        <h1>{userName}</h1>
        <h3>{companyName}</h3>
      </div>
      <h2>{title}</h2>
      <span>{body}</span>
    </div>
  </Container>
);

export default Post;
