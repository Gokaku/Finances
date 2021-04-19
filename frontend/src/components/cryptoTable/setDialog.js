import React from 'react';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';


export default function FormDialog(props) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSet = () => {

    if(value !== ""){
    props.setBalance(value, props.symbol)
    }
    setValue("")
    setOpen(false);
  }

  return (
    <div >
        <button onClick={handleClickOpen} style={{clear: "right", margin: "0px", marginRight: "8px"}} className="addBButton">
            <p className="pSet">Set</p>
        </button>
        <Dialog PaperProps={{style: {backgroundColor: "#181A21"}}} open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <p style={{backgroundColor: "#181A21", "color": "white"}} className="pDialog">Set your balance</p>
            <DialogContent>
            <TextField onKeyUp={(e) => {if (e.key === "Enter") {handleSet()}}} InputLabelProps={{style: { color: 'grey' },}} InputProps={{style: {color: "white"}}} value={value} onChange={(e) =>setValue(e.target.value)} type="number"/>
            </DialogContent>
            <DialogActions>
            <button onClick={handleClose} className="formButton">
                Cancel
            </button>
            <button onClick={handleSet} className="formButton" >
                Set
            </button>
            </DialogActions>
        </Dialog>
        </div>
    );
}
