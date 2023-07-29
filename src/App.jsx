import "./App.css";
import Home from "./pages/Home";
import NewsFeed from "./pages/NewsFeed";
import ProfileCompletion from "./pages/CompleteProfile";
import CategorySelection from "./pages/CategorySelection";
import SignUpPage from "./pages/SignUpPage";
import SignInPage from "./pages/SignInPage";

import { ClerkProvider } from "@clerk/clerk-react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
    return (
        <ClerkProvider publishableKey="pk_test_ZXZvbHZpbmcta2FuZ2Fyb28tMzcuY2xlcmsuYWNjb3VudHMuZGV2JA">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/signin" element={<SignInPage />} />
                    <Route path="/signup" element={<SignUpPage />} />
                </Routes>
            </BrowserRouter>
        </ClerkProvider>
    );
}

export default App;
