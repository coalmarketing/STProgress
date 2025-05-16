import { Routes, Route, useLocation } from 'react-router-dom';
import NotFound from './Components/NotFound';
import LandingPage from './Components/LandingPage';
import AppWrapper from './Components/AppWrapper';
import HallAssembly from './Components/HallAssembly';
import LocksmithWork from './Components/LocksmithWork';
import Contacts from './Components/Contacts';
import Projects from './Components/Projects';
import Gdpr from './Components/Gdpr';
import { useEffect } from 'react';
import { updatePageMetadata } from './utils/seoUtils';

function App() {
  const location = useLocation();

  useEffect(() => {
    const currentPath = location.pathname.replace('/', '') || 'home';
    updatePageMetadata(currentPath);
  }, [location]);

  return (
      <Routes>
        {/* Route for the home page */}
        <Route index element={
          <AppWrapper stretch={true}>
            <LandingPage />
          </AppWrapper>
        } />

        <Route path="/montaz-haly" element={
          <AppWrapper stretch={true}>
            <HallAssembly />
          </AppWrapper>
        } />

        <Route path="/zamecnicke-prace" element={
          <AppWrapper stretch={true}>
            <LocksmithWork />
          </AppWrapper>
        } />

        <Route path="/kontakt" element={
          <AppWrapper stretch={true}>
            <Contacts />
          </AppWrapper>
        } />

        <Route path="/reference" element={
          <AppWrapper stretch={true}>
            <Projects />
          </AppWrapper>
        } />

        <Route path="/gdpr" element={
          <AppWrapper stretch={true}>
            <Gdpr />
          </AppWrapper>
        } />

        <Route path="*" element={<NotFound />} />
      </Routes>
  );
}

export default App;
