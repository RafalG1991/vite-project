import {Outlet, useNavigation} from "react-router-dom";
import {AppLink} from "../AppLink.tsx";
import {Suspense} from "react";

export const MainLayout = () => {
  // const {state} = useNavigation();

  return (
    <main>
      <header>
        <nav>
          <ul>
            <li>
              <AppLink to="/">Tasks</AppLink>
            </li>
          </ul>
        </nav>
      </header>
      <Suspense fallback="Loading...">
        <Outlet/>
      </Suspense>
      {/*{ state === 'loading' ? <p>Loading...</p> : <Outlet/>}*/}
    </main>
  )
}