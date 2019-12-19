import jsonPlaceholder from '../api/jsonPlaceholder'

export const fetchPosts = () => {
  // Bad approach!!!
  // const response = await jsonPlaceholder.get('/posts');

  return async dispatch => {
    const response = await jsonPlaceholder.get('/posts');

    dispatch({ type: 'FETCH_POSTS', payload: response.data })
  };
};

export const fetchUser = (id) => {
  return async dispatch => {
    const response = await jsonPlaceholder.get(`/users/${id}`);

    dispatch({ type: 'FETCH_USER', payload: response.data })
  };
};
