import { Home } from "./pages/Home";
import "react-toastify/dist/ReactToastify.css";
import { GlobalStyle } from "./global.ts";
import { RouterProvider, createMemoryRouter } from "react-router";
import { ToastContainer } from "react-toastify";

export const router = createMemoryRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

function App() {
  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <RouterProvider router={router}></RouterProvider>
      <GlobalStyle />
    </div>
  );
}

export default App;
