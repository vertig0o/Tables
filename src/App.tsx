import "./App.css";

import { Routes, Route, BrowserRouter } from "react-router-dom";
import ToDoList from "./Components/Pages/ToDoList";
import Users from "./Components/Pages/Users";
import Home from "./Components/Pages/Home";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route
            path="/todolist"
            element={
              <ToDoList
                title="Tasks"
                list={[
                  { id: "1", name: "Create FireStone Logo" },
                  { id: "2", name: "Add SCSS and JS files if required" },
                  { id: "3", name: "Stakeholder Meeting" },
                  { id: "4", name: "Scoping & Estimations" },
                  { id: "5", name: "Sprint Showcase" },
                ]}
              />
            }
          ></Route>
          <Route path="/users" element={<Users />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
