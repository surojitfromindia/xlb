import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard';
import Databoard from './components/Databoard';
import SecureView from './components/SecureView';
import General from './components/SettingComponent/General';
import Setting from './components/SettingComponent/Setting';
import WelcomeView from './components/WelcomeView';
import ImportFrom from './components/Databoard/ImportFrom';
import WorkSpace from './components/Databoard/Workspace';
function App() {
  const isLogin = true;
  return (
    <Routes>
      <Route path="/" element={<WelcomeView />} />
      <Route path="/app" element={isLogin ? <SecureView /> : <Navigate to="/" replace={true} />}>
        <Route path="" element={<Dashboard />} />
        <Route path="databoard" element={<Databoard />}>
          <Route index element={<WorkSpace />} />
          <Route path="import">
            <Route path=":importFrom" element={<ImportFrom/>} />
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
