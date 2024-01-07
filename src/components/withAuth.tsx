
import React from 'react';
import {
  useLocation,
  NavLink,
  Navigate
} from 'react-router-dom';


export interface WithAuthProps {
  
}


export const withAuth = <Props extends WithAuthProps>(Component: React.ComponentType<Props>) => {
  
  return (props: Omit<Props, keyof WithAuthProps>) => {
    const isAuth = !!localStorage.getItem("token");

 if (isAuth){
  return (
    <Component
      {...(props as Props)}
     
    />
  );
 } else{
  return (<Navigate replace to="/home" />);
 }


}
};