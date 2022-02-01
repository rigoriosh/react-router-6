import React, { useEffect, useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { opcionesEjercicios } from './App';

export const Home = () => {
    const [exampleSelected, setExampleSelected] = useState('/');
    let navigate = useNavigate();
    let location = useLocation();


    useEffect(() => {
        // console.log(exampleSelected);
        navigate(exampleSelected);
      
        return () => { };
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [exampleSelected]);


      useEffect(() => {
        const path = location.pathname.split('/').filter(e => e !== '').length === 0 ? '/' : location.pathname.split('/').filter(e => e !== '')[0]
        console.log(path, exampleSelected);

        if (path !== exampleSelected) {
            setExampleSelected(path)
        }
        
      
        return () => {};
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [location]);
      



    return <div>
        <p> En esta app se realizaran los ejercios de Reac-Router 6 </p>
        <select
            value={exampleSelected}
            name="selectExample" id="" onChange={({target})=>{
                setExampleSelected(opcionesEjercicios.find(e=> e.ruta === target.value).ruta)
            }} 
        >
            {
                opcionesEjercicios.map( (op, i) => (
                    <option value={op.ruta} key={i}>{op.descripcion}</option>
                ))
            }
        </select>

        {
            (exampleSelected !== '' && exampleSelected !== '/') &&
                <div>
                    <p> <span style={{fontWeight:'bold'}}>Descripción:</span> {opcionesEjercicios.find(e => e.ruta === exampleSelected).overview}</p>
                    <a href={opcionesEjercicios.find(e => e.ruta === exampleSelected).url}> <span style={{fontWeight:'bold'}}>URL:</span> {opcionesEjercicios.find(e => e.ruta === exampleSelected).url}</a>
                </div>
        }
        <Outlet />
    </div>;
};
