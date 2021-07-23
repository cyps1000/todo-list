/**
 *  Material UI Imports
 * @see https://material-ui.com/styles/basics/
 */
import { makeStyles, Theme } from "@material-ui/core/styles";

/**
 * Styles the component
 */
const useStyles = makeStyles((theme: Theme) => ({
  EditTodoForm: {
    marginLeft: "1rem",
    width: "50%"
  }
}));

export { useStyles };
