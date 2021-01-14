import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
        <button className="addButton" onClick={handleClickOpen}>
            <p className="pAddButton">ADD</p>
        </button>
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <p className="pDialog">Cryptocurrencies</p>
            <DialogContent>
            <TextField label="Example: BTC for Bitcoin"/>
            </DialogContent>
            <DialogActions>
            <button onClick={handleClose} className="formButton">
                Cancel
            </button>
            <button onClick={handleClose} className="formButton">
                ADD
            </button>
            </DialogActions>
        </Dialog>
        </div>
    );
}
