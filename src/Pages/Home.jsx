import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../Redux/idariBuro/actions";
import { Button } from "antd";

const Home = () => {
  const dispatch = useDispatch();
  const postsState = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div>
      <h1>Posts</h1>
      {postsState.loading && <p>Loading...</p>}
      {postsState.error && <p>Error: {postsState.error}</p>}
      <ul>
        {postsState.data.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
      <Button type="primary">sadas</Button>
    </div>
  );
};

export default Home;
