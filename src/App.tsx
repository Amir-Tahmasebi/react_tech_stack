import { useLayoutEffect } from "react";
import useAppState from "./state/useAppState";
import { setInitState } from "./state/actionHandler";
import Layout from "./components/Layout";

function App() {
  const { dispatch } = useAppState();

  useLayoutEffect(() => {
    if (localStorage.getItem("state")) {
      dispatch(
        setInitState(JSON.parse(localStorage.getItem("state") as string))
      );
    }
  }, []);

  return <Layout />;
}

export default App;
