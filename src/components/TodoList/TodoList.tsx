import { Fragment } from "react";

/**
 * Imports components
 */
import { Todo } from "../Todo";

/**
 * Imports Material UI components
 */
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";

/**
 * Imports the component styles
 */
import { useStyles } from "./TodoList.styles";

/**
 * Imports TodoTypes interface
 */
import { TodoTypes } from "../TodoApp";

/**
 * Defines the props interface
 */
export interface TodoListProps {
  todos: TodoTypes[];
  removeTodo: (id: string) => void;
  toggleTodo: (id: string) => void;
  editTodo: (id: string, t: string) => void;
}

/**
 * Displays the component
 */
export const TodoList: React.FC<TodoListProps> = (props) => {
  const { todos, removeTodo, toggleTodo, editTodo } = props;

  /**
   * Gets the component styles
   */
  const classes = useStyles();

  if (todos.length)
    return (
      <Paper className={classes.root}>
        <List>
          {todos.map((todo, idx) => (
            <Fragment key={todo.id}>
              <Todo
                id={todo.id}
                task={todo.task}
                key={todo.id}
                completed={todo.completed}
                removeTodo={removeTodo}
                toggleTodo={toggleTodo}
                editTodo={editTodo}
              />
              {idx < todos.length - 1 && <Divider />}
            </Fragment>
          ))}
        </List>
      </Paper>
    );

  return null;
};
