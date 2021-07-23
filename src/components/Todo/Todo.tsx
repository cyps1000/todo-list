import { Fragment } from "react";

/**
 * Imports components
 */
import { EditTodoForm } from "../EditTodoForm";

/**
 * Imports Material UI components
 */
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItem";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";

/**
 * Imports hooks
 */
import { useToggle } from "../../hooks";

/**
 * Imports the component styles
 */
import { useStyles } from "./Todo.styles";

/**
 * Defines the props interface
 */
export interface TodoProps {
  id: string;
  task: string;
  completed: boolean;
  removeTodo: (id: string) => void;
  toggleTodo: (id: string) => void;
  editTodo: (id: string, t: string) => void;
}

/**
 * Displays the component
 */
export const Todo: React.FC<TodoProps> = (props) => {
  const { id, task, completed, removeTodo, toggleTodo, editTodo } = props;

  /**
   * Gets the component styles
   */
  const classes = useStyles();

  /**
   * Inits the useToggle hook
   */
  const [isEditing, toggleIsEditing] = useToggle(false);

  return (
    <ListItem className={classes.root}>
      {isEditing ? (
        <EditTodoForm
          id={id}
          task={task}
          editTodo={editTodo}
          toggleIsEditing={toggleIsEditing}
        />
      ) : (
        <Fragment>
          <Checkbox
            tabIndex={-1}
            checked={completed}
            onClick={() => toggleTodo(id)}
          />
          <ListItemText
            style={{ textDecoration: completed ? "line-through" : "none" }}
          >
            {task}
          </ListItemText>
          <ListItemSecondaryAction>
            <IconButton aria-label="Edit" onClick={toggleIsEditing}>
              <EditIcon />
            </IconButton>
            <IconButton aria-label="Delete" onClick={() => removeTodo(id)}>
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </Fragment>
      )}
    </ListItem>
  );
};
