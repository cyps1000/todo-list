import { useState, useEffect } from "react";

/**
 * External Imports
 */
import { v4 } from "uuid";

/**
 * Imports components
 */
import { TodoList } from "../TodoList";
import { TodoForm } from "../TodoForm";

/**
 * Imports Material UI components
 */
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";

/**
 * Imports the component styles
 */
import { useStyles } from "./TodoApp.styles";

/**
 * Defines the Todo interface
 */
export interface TodoTypes {
  id: string;
  task: string;
  completed: boolean;
}

const initialTodos: TodoTypes[] = JSON.parse(
  window.localStorage.getItem("todos") || "[]"
);

/**
 * Displays the component
 */
export const TodoApp: React.FC = () => {
  /**
   * Gets the component styles
   */
  const classes = useStyles();

  /**
   * Inits the Todo state
   */
  const [todos, setTodos] = useState<TodoTypes[]>(initialTodos);

  /**
   * Handles adding a todo to the list
   */
  const addTodo = (task: string) => {
    setTodos([...todos, { id: v4(), task, completed: false }]);
  };

  /**
   * Handles removing a todo
   */
  const removeTodo = (id: string) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);

    setTodos(updatedTodos);
    console.log("check");
  };

  /**
   * Handles editing a todo task
   */
  const editTodo = (id: string, task: string) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, task } : todo
    );

    setTodos(updatedTodos);
  };

  /**
   * Handles marking a task as done
   */
  const toggleTodo = (id: string) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );

    setTodos(updatedTodos);
  };

  useEffect(() => {
    window.localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <Paper className={classes.root} elevation={0}>
      <AppBar color="primary" position="static" className={classes.appBar}>
        <Toolbar>
          <Typography color="inherit">TODOS WITH HOOKS</Typography>
        </Toolbar>
      </AppBar>
      <Grid container justify="center" className={classes.grid}>
        <Grid item xs={11} md={8} lg={4}>
          <TodoForm addTodo={addTodo} />
          <TodoList
            todos={todos}
            removeTodo={removeTodo}
            toggleTodo={toggleTodo}
            editTodo={editTodo}
          />
        </Grid>
      </Grid>
    </Paper>
  );
};
