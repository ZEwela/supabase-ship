import MessageBoard from "./MessageBoard";
import AllPosts from "./AllPosts";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Welcome from "./Welcome";
import NavBar from "./NavBar";
import PostView from "./PostView";
import { createContext } from "react";
import { SupashipUserInfo, useSession } from "./use-session";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <MessageBoard />,
        children: [
          {
            path: ":pageNumber",
            element: <AllPosts />,
          },
          {
            path: "post/:postId",
            element: <PostView />,
          },
        ],
      },
      {
        path: "welcome",
        element: <Welcome />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

export const UserContext = createContext<SupashipUserInfo>({
  session: null,
  profile: null,
});

function Layout() {
  const supashipUserInfo = useSession();
  return (
    <>
      <UserContext.Provider value={supashipUserInfo}>
        <NavBar />
        <Outlet />
      </UserContext.Provider>
    </>
  );
}
