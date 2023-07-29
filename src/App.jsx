import "./App.css";
import Home from "./pages/Home";
import NewsFeed from "./pages/NewsFeed";
import ProfileCompletion from "./pages/CompleteProfile";

import { ClerkProvider } from "@clerk/clerk-react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
    return (
        <ClerkProvider publishableKey="pk_test_Y2xhc3NpYy10b21jYXQtODYuY2xlcmsuYWNjb3VudHMuZGV2JA">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/newsfeed" element={<NewsFeed />} />
                </Routes>
            </BrowserRouter>
        </ClerkProvider>
    );
}

export default App;
