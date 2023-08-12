import user from "../users/user.json";
import { Profile } from "./Profile/Profile";
 

import data from "../users/data.json";
import { Statistics } from "./Statistics/Statistics";


import  friends  from "../users/friends.json";
import { FriendList  } from "./FriendList/FriendList";


import transactions from "../users/transactions.json";
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";


export const App = () => {
  return (
    <>
     <Profile user={user} />
      <Statistics stat={data} title="Upload stats" /> 
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </>
  );
};
