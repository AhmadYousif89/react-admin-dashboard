import { Routes, Route } from 'react-router-dom';

import { useAppSelector } from './app/hooks';
import { uiSelector } from './features/ui-slice';
import { Header } from './components/layout/header';
import { SideMenu } from './components/layout/side-menu';
import {
  Bar,
  Contacts,
  Dashboard,
  FAQ,
  Geography,
  Invoices,
  Line,
  NotFound,
  Form,
  Pie,
  Team,
  Calendar,
} from './pages';

function App() {
  const theme = useAppSelector(uiSelector);

  return (
    <main
      className={`
      ${theme.mode} flex items-start gap-2 bg-base-color md:gap-10`}>
      <SideMenu />
      <div className="flex min-h-screen w-full flex-grow flex-col">
        <Header />
        <div className="mx-8 flex h-full flex-col">
          <Routes>
            <Route index element={<Dashboard />} />
            <Route path="/dashboard" index element={<Dashboard />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/invoices" element={<Invoices />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/geography" element={<Geography />} />
            <Route path="/form" element={<Form />} />
            <Route path="/team" element={<Team />} />
            <Route path="/line" element={<Line />} />
            <Route path="/bar" element={<Bar />} />
            <Route path="/pie" element={<Pie />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </main>
  );
}

export default App;
