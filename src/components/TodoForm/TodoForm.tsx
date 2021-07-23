/**
 * Imports Material UI components
 */
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";

/**
 * Imports custom Hook
 */
import { useInputState } from "../../hooks";

/**
 * Imports the component styles
 */
import { useStyles } from "./TodoForm.styles";

/**
 * Defines the props interface
 */
export interface TodoFormProps {
  addTodo: (T: string) => void;
}

/**
 * Displays the component
 */
export const TodoForm: React.FC<TodoFormProps> = (props) => {
  const { addTodo } = props;

  /**
   * Gets the component styles
   */
  const classes = useStyles();

  /**
   * Inits the custom hook
   */
  const [value, handleChange, reset] = useInputState("");

  /**
   * Handles submitting the form
   */
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTodo(value);
    reset();
  };

  return (
    <Paper className={classes.root}>
      <form onSubmit={handleSubmit}>
        <TextField
          value={value}
          onChange={handleChange}
          margin="normal"
          label="Add New Todo"
          fullWidth
        />
      </form>
    </Paper>
  );
};
