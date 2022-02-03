import { createContext, useState } from 'react';
import './App.css';
import { Header } from './componentes/Header';
import { CustomLinkExample } from './examples/customLinkExample/CustomLinkExample';
import { CustomQueryParsing } from './examples/customQueryParsing/CustomQueryParsing';
import { Explample1 } from './examples/example1/Explample1';
import { Example2 } from './examples/example2/Example2';
import { AuthExample } from './examples/example3/AuthExample';
import { CustomFilter } from './examples/example4/CustomFilter';
import { LazyLoading } from './examples/lazyLoading/LazyLoading';
import { Modal } from './examples/modal/Modal';
import { Main } from './examples/multiApp/Main';
import { Home } from './Home';

export const StoreContext = createContext(null);


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
    descripcion: 'example1',
    ruta:'example1',
    componente: <Explample1/>,
    overview:'En este ejercicio se emplea lo standar, Routers, Router, Nested, outled, Link, navLink, nestead',
    url:'https://reactrouter.com/docs/en/v6/getting-started/tutorial',
  },
  {
    value:'example2',
    descripcion: 'example2',
    ruta:'example2',
    componente: <Example2/>,
    overview:`This example demonstrates some of the core features of React Router
    including nested <Route>s, <Outlet>s, <Link>s, and using a
    "*" route (aka "splat route") to render a "not found" page when someone
    visits an unrecognized URL.`,
    url:'https://reactrouter.com/docs/en/v6/examples/basic',
  },
  {
    value:'AuthExample',
    descripcion: 'AuthExample',
    ruta:'AuthExample',
    componente: <AuthExample/>,
    overview:'This example demonstrates how to restrict access to routes to authenticated users.',
    url:'https://reactrouter.com/docs/en/v6/examples/auth',
  },
  {
    value:'customFilter',
    descripcion: 'customFilter',
    ruta:'customFilter',
    componente: <CustomFilter/>,
    overview:'This example demonstrates how to create a "filter link" like one that is commonly used to filter a list of products on an e-commerce website. The<BrandLink> component is a custom <Link> that knows whether or not it is currently "active" by what is in the URL query string.',
    url:'https://reactrouter.com/docs/en/v6/examples/custom-filter-link',
  },
  {
    value:'CustomLinkExample',
    descripcion: 'CustomLinkExample',
    ruta:'CustomLinkExample',
    componente: <CustomLinkExample/>,
    overview:`This example demonstrates how to create a custom{" "}
    <Link> component that knows whether or not it is
    "active" using the low-level useResolvedPath() and
    useMatch() hooks.`,
    url:'https://reactrouter.com/docs/en/v6/examples/custom-link',
  },
  {
    value:'CustomQueryParsing',
    descripcion: 'CustomQueryParsing',
    ruta:'CustomQueryParsing',
    componente: <CustomQueryParsing/>,
    overview:'This example demonstrates how to store a complex data structure in a URL query parameter.',
    url:'https://reactrouter.com/docs/en/v6/examples/custom-query-parsing',
  },
  {
    value:'LazyLoading',
    descripcion: 'LazyLoading',
    ruta:'LazyLoading',
    componente: <LazyLoading/>,
    overview:[
      `This example demonstrates how to lazily load both route elements and even entire portions of your route hierarchy on demand. To get the full effect of this demo, be sure to open your Network tab and watch the new bundles load dynamically as you navigate around.`,
      `The "About" page is not loaded until you click on the link. When you do, a <React.Suspense fallback> renders while the code is loaded via a dynamic import() statement. Once the code loads, the fallback is replaced by the actual code for that page.`,
      `The "Dashboard" page does the same thing, but takes it even one step further by dynamically defining additional routes once the page loads! Since React Router lets you declare your routes as<Route> elements, you can easily define more routes by placing an additional <Routes> element anywhere further down the element tree. Just be sure the parent route ends with a * like <Route path="dashboard/*"> in this case.`
    ],
    url:'https://reactrouter.com/docs/en/v6/examples/lazy-loading',
  },
  {
    value:'Modal',
    descripcion: 'Modal',
    ruta:'Modal',
    componente: <Modal/>,
    overview:[
      `This is an example of how to create a contextual modal navigation with React Router where the navigation path the user takes determines if the page is rendered in the modal or not (popularized by pinterest, instagram, and others in the 2010s). This type of modal is typically used as a kind of "detail" view to focus on a particular object in a collection (like a pinterest board) while not taking you completely out of context of the parent page. But, when the same URL is visited directly (rather than from the collection page) it renders as it's own full page instead of in a modal.`,
      `In this example, notice how the URL updates when the modal opens (if you are viewing the example in StackBlitz you may need to open in a new browser window). Even though the URL is updated to the specific item in the modal, the background page is still showing behind it.`,
      `Next, copy and paste the URL to a new browser tab and notice that it shows that specific item not in a modal, but directly on the page. This is the view that someone would see if they clicked on a link that you sent them when you had the modal open. They don't have the context you did when you opened the modal, so they don't see it in the context of the background page.`
    ],
    url:'https://reactrouter.com/docs/en/v6/examples/modal',
  },
  {
    value:'multiApp',
    descripcion: 'multiApp',
    ruta:'multiApp',
    componente: <Main/>,
    overview:'This example demonstrates how you can stitch two React Router apps together using the `basename` prop on `BrowserRouter` and `StaticRouter`.',
    url:'https://reactrouter.com/docs/en/v6/examples/multi-app',
  },
  // {
  //   value:'example2',
  //   descripcion: 'example2',
  //   ruta:'example2',
  //   componente: <Explample1/>,
  //   overview:'pendiente descricion',
  //   url:'',
  // },
]

function App() {

  const [store, setStore] = useState(
    {
      exampleSelected: '/'
    }
  );

  const {exampleSelected} = store;

  const updateStore = (newStore) => {
    setStore({...store, ...newStore});
  }


  return (
    <div className="App">
      <header className="App-header">
        
        <Header updateStore={updateStore} store={store}/>
        <StoreContext.Provider value={{store, updateStore}}>
          {
            opcionesEjercicios.find(e => e.ruta === exampleSelected).componente
          }
          {/* <Explample1/> */}
        </StoreContext.Provider>

      </header>
    </div>
  );
}

export default App;
