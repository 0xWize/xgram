import { Switch, Route, Redirect, useLocation } from "react-router-dom";
import { useAuth } from "../context/authcontext";

//views - main
import Main from '../viewsxz/main';
import Videos from '../viewsvv/videos';
import Events from '../viewsxe/events';

import MediaView from "../viewsxx/media-view";

// import TransferTokens from "../viewsxx/transfer-tokens";
// import TransferTokenX from "../viewsxx/transfer-tokenx";

// import UsersView from "../viewsxx/users-view";

// import CredsCheck from "../viewscr/creds-check";
// import CredsInfo from "../viewscr/creds-info";

const routes = [

  { path:'/', component: Main, auth:false },
  { path:'/v', component: Videos, auth:false },
  { path:'/e', component: Events, auth:false },
  
  { path:'/media/v/:id', component: MediaView, auth:false },

  // { path:'/ec/:tokn/:cred', component: TransferTokens, auth:false },
  // { path:'/ex/:tokn', component: TransferTokenX, auth:false },
  
  // { path:'/cc/:tokn/:cred', component: TransferTokens, auth:false },
  // { path:'/cx/:tokn', component: TransferTokenX, auth:false },
  
  // { path:'/u/:id', component: UsersView, auth:false },

  // { path:'/c/check', component: CredsCheck, auth:false },
  // { path:'/c/:id', component: CredsInfo, auth:false },
]

const PrivateRoute = (props) => {
  const location = useLocation();
  
  const { user } = useAuth();
  return user 
  ? ( <Route { ...props } /> ) 
  : ( <Redirect to={{ pathname: "/", state: { from: location } }} /> )
};

export default function Routes() {

  return (
    <Switch>
      {routes.map ((item,i)=>(item.auth
      ? <PrivateRoute
          key={i}
          path={item.path}
          component={item.component}
          exact
        />
      : <Route
          key={i}
          path={item.path}
          component={item.component}
          exact
        />
      ))}
    </Switch>
  );
}