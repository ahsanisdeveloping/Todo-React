import { TextField,  Button } from "@mui/material";
const UpdateForm = (props) => {
    return ( 
        <div>
        <div>
              <TextField
          id="outlined-basic"
          label="ID"
          variant="outlined"
          onChange={(e) => props.setUpdateID(e.target.value)}
        />
        <TextField
        id="outlined-basic"
        label="New Item Value"
        variant="outlined"
        onChange={(e) => props.setUpdateItem(e.target.value)}
      />
      <Button variant="outlined" onClick={()=>{props.handleUpdate()}}>
        Update
      </Button>
              </div>
        </div>
     );
}
 
export default UpdateForm;