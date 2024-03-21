
import { TextField, Typography, Button } from "@mui/material";
const InsertForm = (props) => {
    return ( 
        <div>
            <Typography variant="h3">To Do List</Typography>
        <TextField
          id="outlined-basic"
          label="Item"
          variant="outlined"
          onChange={(e) => props.setItem(e.target.value)}
        />
        <br />

        <Button variant="outlined" onClick={props.handleInsert}>
          Insert
        </Button>
        </div>
     );
}
 
export default InsertForm;