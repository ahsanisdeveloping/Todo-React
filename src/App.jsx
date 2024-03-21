import { useState } from "react";
import ListItem from "./components/ListItem";
import { Button } from "@mui/material";
import InsertForm from "./components/InsertForm";
import UpdateForm from "./components/UpdateForm";
function App() {
  const [updateID, setUpdateID] = useState(null);
  const [updateItem, setUpdateItem] = useState(null);
  const [todos, setTodos] = useState([]);
  const [item, setItem] = useState("");
  const handleCheckedItems = (index) => {
    const updatedTodos = todos.map((todo, i) => {
      if (i === index) {
        return { ...todo, checked: true };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };
  const handleInsert = () => {
    setTodos([
      {
        id: Math.floor(100000 + Math.random() * 900000),
        item: item,
        checked: false,
      },
      ...todos,
    ]);
  };
  const handleFilter = () => {
    const filteredTodos = todos.filter((todo) => !todo.checked);
    setTodos(filteredTodos);
  };
  const handleUpdate = () => {
    const updatingTodos = todos.map((todo) => {
      if (todo.id === parseInt(updateID)) {
        return { ...todo, item: updateItem };
      }
      return todo;
    });
    setTodos(updatingTodos);
  };
  return (
    <div>
      <InsertForm handleInsert={handleInsert} setItem={setItem} />
      <Button
        variant="outlined"
        onClick={() => {
          handleFilter();
        }}
      >
        Filter
      </Button>
      {todos.map((value, index) => (
        <>
          <br />
          <ListItem
            value={value}
            index={index}
            handleCheckedItems={handleCheckedItems}
          />
        </>
      ))}
      <UpdateForm
        setUpdateID={setUpdateID}
        setUpdateItem={setUpdateItem}
        handleUpdate={handleUpdate}
      />
    </div>
  );
}

export default App;
