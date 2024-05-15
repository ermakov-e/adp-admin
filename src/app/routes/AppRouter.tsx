import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Layout from "app/layout/Layout";
import SettingsPage from "pages/settingsPage/SettingsPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route path="settings" element={<SettingsPage />} />
      </Route>
    </>
  )
);

export default router;
