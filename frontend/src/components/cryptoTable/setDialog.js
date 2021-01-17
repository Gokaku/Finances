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
    props.setBalance(value, props.symbol)
    setValue("")
    setOpen(false);
  }

  return (
    <div>
        <button onClick={handleClickOpen} style={{clear: "right", margin: "0px", marginRight: "8px"}} className="addBButton">
            <p className="pSet">Set</p>
        </button>
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <p className="pDialog">Set your balance</p>
            <DialogContent>
            <TextField value={value} onChange={(e) =>setValue(e.target.value)} type="number"/>
            </DialogContent>
            <DialogActions>
            <button onClick={handleClose} className="formButton">
                Cancel
            </button>
            <button onClick={handleSet} className="formButton">
                Set
            </button>
            </DialogActions>
        </Dialog>
        </div>
    );
}
