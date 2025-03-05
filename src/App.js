import Head from "./components/Head";
import Body from "./components/Body";
import Main from "./components/MainContainer";
import Watch from "./components/Watch";
import { Provider } from "react-redux";
import store from "./utils/appStore";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
function App() {
  return (
    <Provider store={store}><div className="App">
    <Head />
    <RouterProvider router={appRouter} />
    </div></Provider>
  );
}

const appRouter= createBrowserRouter([
  {
    path:'/',
    element: <Body />,
    children:[{
      path:'/',
      element: <Main />
    },{
      path:'/watch',
      element: <Watch />
    }]
  }
])

export default App;
