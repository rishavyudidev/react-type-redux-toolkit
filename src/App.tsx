import { useEffect } from "react";
import "./App.css";
import { useAppDispatch, useAppSelector } from "./redux/hook";
import { getUsers } from "./redux/userSlice";

function App() {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user.data);
  console.log(user);

  useEffect(() => {
    dispatch(getUsers());
  }, []);
  return (
    <div>
      {user?.map((user: any, i) => {
        return <h1 key={i}>{user.name}</h1>;
      })}
    </div>
  );
}

export default App;
