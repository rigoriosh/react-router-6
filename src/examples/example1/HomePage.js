import React, { useContext, useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../App';

export const HomePage = () => {
  const {  updateStore } = useContext(StoreContext);

    let navigate = useNavigate();
    let location = useLocation();
    useEffect(() => {
      
    updateStore({pathName:location.pathname})
      return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location]);
    
  return (
    <div style={{backgroundColor:'lightblue'}}>
        <h1>HomePage</h1>
        <p>Location: {JSON.stringify(location)}</p>
        <Outlet />
        {
            location.pathname !== '/' &&
                <button onClick={()=>{
                    navigate("/");
                }}>
                    Home
                </button>
        }
    </div>
  );
};
