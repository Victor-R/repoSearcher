import { Home } from "./pages/Home";
import { GlobalStyle } from "./global.ts";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
      <GlobalStyle />
    </div>
  );
}

export default App;
