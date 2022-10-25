import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProfilePage from "./components/ProfilePage";
import PostsPage from "./components/PostsPage";
import NavFunction from "./components/Navbar";
import NewNavBar from "./components/NewNavBar";

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      {/* <NavFunction /> */}
      <NewNavBar/>
        <Routes>
          <Route path="/" element={<PostsPage />} />
          <Route path="/users/me" element={<ProfilePage />} />
          <Route path="/users/:userId" element={<ProfilePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
