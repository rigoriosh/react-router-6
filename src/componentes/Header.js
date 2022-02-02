import React, { useState }  from 'react';
import { opcionesEjercicios } from '../App';

export const Header = ({updateStore, store}) => {
    

    const {exampleSelected} = store;

    const [viewOverview, setViewOverview] = useState(true);


    return <div>
        <p> En esta app se realizaran los ejercios de Reac-Router 6 </p>
            <select
                value={exampleSelected}
                name="selectExample" id="" onChange={({target})=>{
                    updateStore({exampleSelected:opcionesEjercicios.find(e=> e.ruta === target.value).ruta})
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
                    <div onClick={()=>setViewOverview(!viewOverview)} style={{cursor:'pointer'}}>
                        {
                            viewOverview ?
                            <div>
                                <p> <span style={{fontWeight:'bold'}}>Descripción:</span> {opcionesEjercicios.find(e => e.ruta === exampleSelected).overview}</p>
                                <a href={opcionesEjercicios.find(e => e.ruta === exampleSelected).url}> <span style={{fontWeight:'bold'}}>URL:</span> {opcionesEjercicios.find(e => e.ruta === exampleSelected).url}</a>
                            </div>
                            : <p>Ver overview ejemplo</p>
                        }
                    </div>
            }
    </div>;
};
