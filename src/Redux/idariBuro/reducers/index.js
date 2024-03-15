const postsReducer = (
  state = { loading: false, data: [], error: null },
  action
) => {
  switch (action.type) {
    case "FETCH_POSTS_REQUEST":
      return { loading: true, data: [], error: null };
    case "FETCH_POSTS_SUCCESS":
      return { loading: false, data: action.payload, error: null };
    case "FETCH_POSTS_FAILURE":
      return { loading: false, data: [], error: action.error };
    default:
      return state;
  }
};

export default postsReducer;
