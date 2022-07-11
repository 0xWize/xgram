import { Switch, Route, Redirect, useLocation } from "react-router-dom";
import { useAuth } from "../context/authcontext";

//views - main
import Main from '../viewsxz/main';
import Videos from '../viewsvv/videos';
import Events from '../viewsxe/events';

import MediaView from "../viewsxx/media-view";

import Auth from "../viewsxa/auth";


const routes = [

  { path:'/', component: Main, auth:false },
  { path:'/v', component: Videos, auth:false },
  { path:'/e', component: Events, auth:false },
  
  { path:'/media/v/:id', component: MediaView, auth:false },

  { path:'/auth/wallet', component: Auth, auth:false },

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