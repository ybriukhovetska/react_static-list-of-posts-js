import './App.scss';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';

import { PostList } from './components/PostList';

export const post = postsFromServer.map(info => {
  const users = usersFromServer.find(user => user.id === info.userId);
  const postComments = commentsFromServer.filter(
    comment => comment.postId === info.id,
  );

  return {
    ...info,
    users,
    comments: postComments,
  };
});

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={post} />
  </section>
);
