import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from "./redux/state";


const root = ReactDOM.createRoot(document.getElementById('root'));
export let rerenderEntireTree = (state) =>{

    root.render(
        <React.StrictMode>
            <App state={state}
                 addPost={store.addPost.bind(store)}
                 updatePost = {store.updatePost.bind(store)}/>
        </React.StrictMode>
    );
}

rerenderEntireTree(store.getState())

store.subscribe(rerenderEntireTree);