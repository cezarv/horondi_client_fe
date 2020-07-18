import { expectSaga } from 'redux-saga-test-plan';
import * as matchers from 'redux-saga-test-plan/matchers';
import { throwError } from 'redux-saga-test-plan/providers';
import {
  handleNewsLoad,
  handleArticleLoad,
  handleNewsError
} from '../news.sagas';
import getItems from '../../../utils/client';
import { SET_NEWS, SET_NEWS_ARTICLE, SET_LOADING } from '../news.types';
import { SET_ERROR } from '../../error/error.types';

describe('get news saga', () => {
  it('fetches news', () => {
    const newsExample = {
      data: {
        getAllNews: {
          news: [
            {
              author: {
                image: 'someImage.jpeg',
                name: 'Author Name'
              },
              date: '154568794567',
              title: 'Test title',
              text: 'Test text'
            },
            {
              author: {
                image: 'otherImage.jpeg',
                name: 'Second Author Name'
              },
              date: '154568794567',
              title: 'Second Test title',
              text: 'Second Test text'
            }
          ]
        }
      }
    };

    return expectSaga(handleNewsLoad)
      .provide([[matchers.call.fn(getItems), newsExample]])
      .put({ type: SET_LOADING, payload: true })
      .put({
        type: SET_NEWS,
        payload: newsExample.data.getAllNews
      })
      .put({ type: SET_LOADING, payload: false })
      .run();
  });
});

it('handles errors', () => {
  const e = new Error('news not found');

  return expectSaga(handleNewsLoad)
    .provide([[matchers.call.fn(getItems), throwError(e)]])
    .put({ type: SET_LOADING, payload: true })
    .put({ type: SET_LOADING, payload: false })
    .put({ type: SET_ERROR, payload: { e } })
    .run();
});

describe('get article saga', () => {
  it('fetches article', () => {
    const articleExample = {
      data: {
        getNewsById: {
          article: {
            author: {
              image: 'someImage.jpeg',
              name: 'Author Name'
            },
            date: '154568794567',
            title: 'Test title',
            text: 'Test text'
          }
        }
      }
    };

    return expectSaga(handleArticleLoad, { payload: '13546789456' })
      .provide([[matchers.call.fn(getItems), articleExample]])
      .put({ type: SET_LOADING, payload: true })
      .put({
        type: SET_NEWS_ARTICLE,
        payload: articleExample.data.getNewsById
      })
      .put({ type: SET_LOADING, payload: false })
      .run();
  });

  it('handles errors', () => {
    const e = new Error('news not found');

    return expectSaga(handleArticleLoad, { payload: '13546789456' })
      .provide([[matchers.call.fn(getItems), throwError(e)]])
      .put({ type: SET_LOADING, payload: true })
      .put({ type: SET_LOADING, payload: false })
      .put({ type: SET_ERROR, payload: { e } })
      .run();
  });
});
