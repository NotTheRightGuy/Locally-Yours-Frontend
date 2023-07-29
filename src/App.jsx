import "./App.css";
import { Routes, Route } from "react-router-dom";
import NewsFeed from "./pages/NewsFeed";
import Home from "./pages/Home";
import SignInPage from "./pages/SignInPage";

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<SignInPage />} />
                <Route path="/newsfeed" element={<NewsFeed />} />
                {/* <Route path="userProfile"></Route> */}
            </Routes>
        </div>
    );
}

export default App;
