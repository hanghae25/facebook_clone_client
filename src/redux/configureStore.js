import Post from './modules/post';
import Image from './modules/image';
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { createBrowserHistory } from "history";
import { connectRouter } from "connected-react-router";
import Upload from "./module/upload";
import Article from "./module/article";
import Loading from "./module/loading";
import Search from "./module/search";
import Friend from "./module/friend";
import Preview from "./module/preview";

// 리듀서 가져오기
import User from "./modules/user";

// 브라우저 히스토리
export const history = createBrowserHistory();

// 가져온 리듀서를 루트
const rootReducer = combineReducers({  
  post: Post,
  image: Image,
  upload: Upload,
  article: Article,
  loading: Loading,
  search: Search,
  friend: Friend,
  preview: Preview,
  user: User,
  router: connectRouter(history),
});

const middlewares = [thunk.withExtraArgument({ history: history })];

// 지금이 어느 환경인 지 알려줘요. (개발환경, 프로덕션(배포)환경 ...)
const env = process.env.NODE_ENV;

// 개발환경에서는 로거라는 걸 하나만 더 써볼게요.
if (env === 'development') {
  const { logger } = require('redux-logger');
  middlewares.push(logger);
}

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const enhancer = composeEnhancers(applyMiddleware(...middlewares));

let store = (initialStore) => createStore(rootReducer, enhancer);

export default store();
