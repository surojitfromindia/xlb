import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard';
import Databoard from './components/Databoard';
import SecureView from './components/SecureView';
import General from './components/SettingComponent/General';
import Setting from './components/SettingComponent/Setting';
import WelcomeView from './components/WelcomeView';
import WorkSpace from './components/Databoard/Workspace';
import './locales/i18next';
import WorkspaceView from './components/Databoard/Workspace/WorkspaceView';
import { useState } from 'react';
import RegistrationPage from './Pages/RegistrationPage';
function App() {
  const [isLogin] = useState(true);
  return (
    <Routes>
      <Route path="/" element={<WelcomeView />} />
      <Route path='/register' element={<RegistrationPage/>}/>
      <Route path="/app" element={isLogin ? <SecureView /> : <Navigate to="/" replace={true} />}>
        <Route index element={<Dashboard />} />
        <Route path="databoard" element={<Databoard />}>
          <Route path="workspace">
            <Route index element={<WorkSpace />} />
            <Route path=":workspaceid" element={<WorkspaceView />} />
          </Route>
        </Route>
        <Route path="setting" element={<Setting />}>
          <Route path="general" element={<General />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
