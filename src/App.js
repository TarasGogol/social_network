import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Stories from "./components/Stories/Stories";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";

function App(props) {
  return (
      <BrowserRouter>
          <div className="app-wrapper">
              <Header/>
              <Navbar/>
              <div className="app-wrapper-content">
                <Routes>
                    <Route path="/profile" element={<Profile/>}/>
                    <Route path="/dialogs/*" element={<DialogsContainer/>}/>
                    <Route path="/stories" element={<Stories/>}/>
                    <Route path="/news" element={<News/>}/>
                    <Route path="/users" element={<UsersContainer/>}/>
                    <Route path="/settings" element={<Settings/>}/>
                </Routes>
              </div>
              {/*<Profile/>*/}
          </div>
      </BrowserRouter>
  );
}

export default App;
