import React from 'react';
import { BrowserRouter, Link, Navigate, Outlet, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext, AuthProvider } from './AuthProvider';
import { Description } from './Description';
import { LoginPage } from './LoginPage';

export const AuthExample = () => {
  return <div>
      <BrowserRouter>
        <AuthProvider>
            
            <Description/>

            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<PublicPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route
                        path="/protected"
                        element={
                        <RequireAuth>
                            <ProtectedPage />
                        </RequireAuth>
                        }
                    />
                </Route>
            </Routes>
        
        </AuthProvider>
      </BrowserRouter>
  </div>;
};

export function useAuth() {
    return React.useContext(AuthContext);
}

function AuthStatus() {
    let auth = useAuth();
    let navigate = useNavigate();
  
    if (!auth.user) {
      return <p>You are not logged in.</p>;
    }
  
    return (
      <p>
        Welcome {auth.user}!{" "}
        <button
          onClick={() => {
            auth.signout(() => navigate("/"));
          }}
        >
          Sign out
        </button>
      </p>
    );
}


function Layout() {
    return (
      <div>
        <AuthStatus />
  
        <ul>
          <li>
            <Link to="/">Public Page</Link>
          </li>
          <li>
            <Link to="/protected">Protected Page</Link>
          </li>
        </ul>
  
        <Outlet />
      </div>
    );
}

function PublicPage() {
return <h3>Public</h3>;
}

function RequireAuth({ children }) {
    let auth = useAuth();
    let location = useLocation();
  
    if (!auth.user) {
      console.log('No login yet');
      // Redirect them to the /login page, but save the current location they were
      // trying to go to when they were redirected. This allows us to send them
      // along to that page after they login, which is a nicer user experience
      // than dropping them off on the home page.
      return <Navigate to="/login" state={{ from: location }} replace />;
    }
  
    return children;
}

function ProtectedPage() {
return <h3>Protected</h3>;
}
