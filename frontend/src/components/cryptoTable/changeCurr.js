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

  const handleAdd = () => {
    props.changeCurr(value.toLowerCase())
    setValue("")
    setOpen(false);
  }


  return (
    <div>
        <button className="currButton" onClick={handleClickOpen}>
            <p className="pCurrButton">Change</p>
        </button>
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <p className="pDialog">Currencies</p>
            <DialogContent>
            <TextField value={value} onChange={(e) =>setValue(e.target.value)} label="Example: USD for Dollar"/>
            </DialogContent>
            <DialogActions>
            <button onClick={handleClose} className="formButton">
                Cancel
            </button>
            <button onClick={handleAdd} className="formButton">
                ADD
            </button>
            </DialogActions>
        </Dialog>
        </div>
    );
}
