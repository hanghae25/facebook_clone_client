import { Route } from "react-router-dom";
import PostWrite from "./pages/PostWrite";
import Search from "./pages/Search";
import RequestFriend from "./pages/RequestFriend";
import LoadingSpinner from "../src/components/LoadingSpinner";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const loading = useSelector((state) => state.loading.loading);
  return (
    <div className="App">
      <Route path="/post_write" component={PostWrite}></Route>
      <Route path="/search" component={Search}></Route>
      <Route path="/request_friend" component={RequestFriend}></Route>
      <LoadingSpinner isLoading={loading}></LoadingSpinner>
      {/* <video controls width="50%">
        <source
          src="https://firebasestorage.googleapis.com/v0/b/facebookclone-7dc21.appspot.com/o/images%2FKakaoTalk_Video_2021-07-18-17-51-37.mp4?alt=media&token=49ed89f4-bde3-4b59-8b4c-aeae0d19dbc2"
          type="video/webm"
        ></source>
      </video> */}
    </div>
  );
}

export default App;
