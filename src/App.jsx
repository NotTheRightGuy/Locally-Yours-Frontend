import "./App.css";
import Home from "./pages/Home";
import NewsFeed from "./pages/NewsFeed";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import { ClerkProvider, SignIn, SignedIn } from "@clerk/clerk-react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";

function App() {
    return (
        <ClerkProvider publishableKey="pk_test_Y2xhc3NpYy10b21jYXQtODYuY2xlcmsuYWNjb3VudHMuZGV2JA">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<SignInPage />} />
                    <Route
                        path="/newsfeed"
                        element={
                            <SignedIn>
                                <NewsFeed />
                            </SignedIn>
                        }
                    />
                    <Route path="/signup" element={<SignUpPage />} />
                </Routes>
            </BrowserRouter>
        </ClerkProvider>
    );
}

export default App;
