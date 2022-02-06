import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { FirebaseAppProvider } from "reactfire";

import { fireBaseConfig } from './services/firebaseConfig'; 
import { PlayOnline, Home } from './views/index';

function App() {
  return (
    <>
    <FirebaseAppProvider firebaseConfig={fireBaseConfig}>
      <Router>
        <Routes>
          <Route path="/" element={<Home /> } />
          <Route path="/online/:roomId/:userId" element={<PlayOnline />} />
        </Routes>
      </Router>
      </FirebaseAppProvider>
    </>
  );
}

export default App;
