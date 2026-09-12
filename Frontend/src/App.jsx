import React from 'react';
import Menubar from "./components/menubar.jsx";
import Home from "./pages/Home.jsx";
import Footer from "./components/Footer.jsx";
import {Route, Routes} from "react-router-dom";
import UserSyncHandler from "./components/UserSyncHandler.jsx";
import {Toaster} from "react-hot-toast";
import {RedirectToSignIn, SignedIn, SignedOut} from "@clerk/clerk-react";
import Result from "./pages/Result.jsx";

const ResultRoute = () => (
    <>
        <SignedIn>
            <Result />
        </SignedIn>
        <SignedOut>
            <RedirectToSignIn />
        </SignedOut>
    </>
);

const App = () => {
    return(
        <div>
            <UserSyncHandler/>
            <Menubar/>
            <Toaster/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/result" element={<ResultRoute />} />
            </Routes>
            <Footer/>
        </div>
    )
}

export default App;