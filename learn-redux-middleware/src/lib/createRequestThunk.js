import { createAction } from "redux-actions";

export default function createRequestThunk(type, request) {
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;
  return (params) => async (dispatch) => {
    dispatch(createAction(type));
    try {
      const response = await request(params);

      dispatch(createAction(SUCCESS, (response) => response.data)(response));
    } catch (error) {
      dispatch({
        type: FAILURE,
        payload: error,
        error: true,
      });

      throw error;
    }
  };
}
