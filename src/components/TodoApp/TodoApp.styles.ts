/**
 *  Material UI Imports
 * @see https://material-ui.com/styles/basics/
 */
import { makeStyles, Theme } from "@material-ui/core/styles";

/**
 * Styles the component
 */
const useStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: 0,
    margin: 0,
    height: "100vh",
    backgroundColor: "#fafafa"
  },
  appBar: {
    height: "64px"
  },
  grid: {
    marginTop: "1rem"
  }
}));

export { useStyles };
