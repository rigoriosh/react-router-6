import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import { Explample1 } from './examples/example1/Explample1';
import { Home } from './Home';

export const opcionesEjercicios = [
  {
    value:'/',
    descripcion: 'Seleccione un ejercicio',
    ruta:'/',
    componente: <Home/>,
    overview:'',
    url:'',
  },
  {
    value:'example1',
    descripcion: 'Basic example',
    ruta:'example1',
    componente: <Explample1/>,
    overview:'En este ejercicio se emplea lo standar, Routers, Router, Nested, outled, Link, navLink, nestead',
    url:'https://reactrouter.com/docs/en/v6/getting-started/tutorial',
  },
  // {
  //   value:'2',
  //   descripcion: 'Authentication',
  //   ruta:'example2',
  //   overview:'',
  // },
]

function App() {

  

  return (
    <div className="App">
      <header className="App-header">
        

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}>
              <Route
                index
                element={
                  <main style={{ padding: "1rem" }}>
                    <p>Selecciona un ejercicio en el select anterior para renderizar un ejercicio</p>
                  </main>
                }
              />
              <Route path="example1/*" element={<Explample1/>} />
            </Route>
            <Route
                path="*"
                element={
                  <main style={{ padding: "1rem" }}>
                    <p>There's nothing here!</p>
                  </main>
                }
              />
            {/* <Route path="example1" element={<Explample1/>} /> */}
            {/* {
              opcionesEjercicios.map((opc, i) => {
                return <Route path={opc.ruta} element={opc.componente} key={i+opc.r}/>
              }
              )
            } */}
          </Routes>
        </BrowserRouter>
        
        
      </header>
    </div>
  );
}

export default App;
