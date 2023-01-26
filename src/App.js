import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Dialogs from "./components/Dialogs/Dialogs";
import Stories from "./components/Stories/Stories";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";

function App(props) {
  return (
      <BrowserRouter>
          <div className="app-wrapper">
              <Header/>
              <Navbar/>
              <div className="app-wrapper-content">
                <Routes>
                    <Route path="/profile" element={<Profile
                        profilePage = {props.state.profilePage}
                        dispatch = {props.dispatch}/>}/>
                    <Route path="/dialogs/*" element={<Dialogs
                        state = {props.state.dialogsPage}
                        dispatch = {props.dispatch}
                        newText = {props.state.dialogsPage.newMessage}/>}/>
                    <Route path="/stories" element={<Stories/>}/>
                    <Route path="/news" element={<News/>}/>
                    <Route path="/settings" element={<Settings/>}/>
                </Routes>
              </div>
              {/*<Profile/>*/}
          </div>
      </BrowserRouter>
  );
}

export default App;
