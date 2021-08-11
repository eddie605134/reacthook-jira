import React from 'react';
import './App.css';
// import { ProjectListScreen } from './screen/project-list/index';
// import { TsReactTest } from './screen/tsReactTest';
import { useAuth } from 'context/auth-context';
import { AuthenticatedApp } from './authenticated-app';
import { UnauthenticatedApp } from './unauthenticated-app/index';

function App() {
  const { user } = useAuth()
  return (
    <div className="App">
      {
        user ? <AuthenticatedApp /> : <UnauthenticatedApp />
      }
    </div>
  );
}

export default App;
