import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider } from "@chakra-ui/react";
import { ClerkProvider } from "@clerk/clerk-react";
import { BrowserRouter } from "react-router-dom";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <ChakraProvider>
            <ClerkProvider publishableKey="pk_test_Y2xhc3NpYy10b21jYXQtODYuY2xlcmsuYWNjb3VudHMuZGV2JA">
                <App />
            </ClerkProvider>
        </ChakraProvider>
    </BrowserRouter>
);
