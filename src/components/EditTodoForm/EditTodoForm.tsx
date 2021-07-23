/**
 * Imports Material UI components
 */
import TextField from "@material-ui/core/TextField";

/**
 * Imports hooks
 */
import { useInputState } from "../../hooks";

/**
 * Imports the component styles
 */
import { useStyles } from "./EditTodoForm.styles";

/**
 * Defines the props interface
 */
export interface EditTodoFormProps {
  id: string;
  task: string;
  editTodo: (id: string, t: string) => void;
  toggleIsEditing: () => void;
}

/**
 * Displays the component
 */
export const EditTodoForm: React.FC<EditTodoFormProps> = (props) => {
  const { id, task, editTodo, toggleIsEditing } = props;

  /**
   * Gets the component styles
   */
  const classes = useStyles();

  /**
   * Inits the custom hook
   */
  const [value, handleChange, reset] = useInputState(task);

  /**
   * Handles submitting the form
   */
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    editTodo(id, value);
    reset();
    toggleIsEditing();
  };

  return (
    <form className={classes.EditTodoForm} onSubmit={handleSubmit}>
      <TextField
        margin="normal"
        value={value}
        onChange={handleChange}
        fullWidth
        autoFocus
      />
    </form>
  );
};
