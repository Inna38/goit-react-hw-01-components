import React from 'react';
 import ReactDOM from 'react-dom/client';
 import { App } from 'components/App';
import './index.css';

import user from "../assets/user.json";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App user={user} />
  </React.StrictMode>
);
