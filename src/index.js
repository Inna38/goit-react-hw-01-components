import React from 'react';
 import ReactDOM from 'react-dom/client';
//  import { App } from 'components/App';
import './index.css';



import { UsersProfile } from "./components/UserProfile/UserProfile.jsx";
import { Statistics } from "./components/Statistics/Statistics.jsx"


import user from "./users/user.json";
import statistics from "./users/data.json"

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
     <Statistics statistics={statistics} />
    < UsersProfile user={user} />
   </>
  
);
  // <React.StrictMode>

    // <App user={user} />
  // </React.StrictMode>

