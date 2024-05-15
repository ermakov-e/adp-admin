import { RouterProvider } from "react-router-dom";
import router from "app/routes/AppRouter";
import './styles/index.scss'
const App = () => {
  return (
    <RouterProvider router={router} fallbackElement={<p>Initial Load...</p>} />
  );
};

export default App;
