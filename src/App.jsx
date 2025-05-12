import {
  HashRouter as Router, // ✅ alterado aqui
  Routes,
  Route,
  useNavigate,
  Navigate,
} from 'react-router-dom';

import Screen0 from './screens/Screen0';
import Screen1 from './screens/Screen1';
import Screen2 from './screens/Screen2';
import Screen3 from './screens/Screen3';
import Screen4 from './screens/Screen4';
import Screen5 from './screens/Screen5';
import Screen6 from './screens/Screen6';
import Screen7 from './screens/Screen7';
import Screen8 from './screens/Screen8';
import Dashboard from './screens/Dashboard';
import { useState } from 'react';

function App() {
  const [userName, setUserName] = useState('Usuário');
  const [dob, setDob] = useState("");
  const [userAge, setUserAge] = useState(0);

  const calculateAge = (dob) => {
    const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  return (
    <Router> {/* ✅ agora é HashRouter */}
      <Routes>
        <Route path="/" element={<Screen0 setUserName={setUserName} />} />
        <Route path="/screen1" element={<Screen1 userName={userName} dob={dob} setDob={setDob} setAge={setUserAge} />} />
        <Route path="/screen2" element={<Screen2 />} />
        <Route path="/screen3" element={<Screen3 />} />
        <Route path="/screen4" element={<Screen4 />} />
        <Route path="/screen5" element={<Screen5 />} />
        <Route path="/screen6" element={<Screen6 />} />
        <Route path="/screen7" element={<Screen7 />} />
        <Route path="/screen8" element={<Screen8 userName={userName} setUserAge={setUserAge} dob={dob} />} />
        <Route path="/dashboard" element={<Dashboard userName={userName} userAge={userAge} />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
