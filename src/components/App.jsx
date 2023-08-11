import { UsersProfile } from "./UserProfile/UserProfile";
import user from "../users/user.json";

import data from "../users/data.json";
import { Statistics } from "./Statistics/Statistics";
 
export const App = () => {
  return (
    <>
     <UsersProfile user={user} />
     <Statistics stat={data} title="Upload stats" /> 
    </>

    // <div
    //   style={{
    //     height: '100vh',
    //     display: 'flex',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     fontSize: 40,
    //     color: '#010101'
    //   }}
    // >
    //   React homework template
    // </div>
  );
};
