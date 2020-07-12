import errorReducer from '../error.reducer';
import { SET_ERROR, CLEAR_ERROR } from '../error.types';

describe('error.reducer test', () => {
  let initialState;
  beforeEach(() => {
    initialState = {
      error: null
    };
  });

  it('should return default state', () => {
    expect(errorReducer(initialState, {})).toEqual(initialState);
  });

  it('should return state with new error', () => {
    const newError = {
      type: SET_ERROR,
      payload: {
        errors: [
          {
            lang: 'ua',
            value: 'Категорій не знайдено'
          },
          {
            lang: 'en',
            value: 'Categories not found'
          }
        ]
      }
    };

    const result = {
      error: newError.payload
    };

    expect(errorReducer(initialState, newError)).toEqual(result);
  });

  it('should clear error', () => {
    const currentState = {
      error: {
        errors: [
          {
            lang: 'ua',
            value: 'Категорій не знайдено'
          },
          {
            lang: 'en',
            value: 'Categories not found'
          }
        ]
      }
    };

    const clearError = {
      type: CLEAR_ERROR
    };

    expect(errorReducer(currentState, clearError)).toEqual(initialState);
  });
});
