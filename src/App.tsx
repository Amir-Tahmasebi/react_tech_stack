import { useLayoutEffect } from "react";
// import useAppState from "./state/useAppState";
import { setInitState } from "./state/actionHandler";
import Layout from "./components/Layout";
import { useDispatch } from "react-redux";

function App() {
  // const { dispatch } = useAppState();
  const dispatch = useDispatch();
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
