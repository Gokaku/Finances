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
    props.addCrypto(value.toLowerCase())
    setValue("")
    setOpen(false);
  }


  return (
    <div>
        <button className="addButton" onClick={handleClickOpen}>
            <p className="pAddButton">ADD</p>
        </button>
        <Dialog PaperProps={{style: {backgroundColor: "#181A21"}}} open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <p style={{backgroundColor: "#181A21", "color": "white"}} className="pDialog">Cryptocurrencies</p>
            <DialogContent>
            <TextField onKeyUp={(e) => {if (e.key === "Enter") {handleAdd()}}} InputProps={{style: {color: "white"}}} InputLabelProps={{style: { color: 'grey' },}} value={value} onChange={(e) =>setValue(e.target.value)} label="Example: BTC for Bitcoin"/>
            </DialogContent>
            <DialogActions>
            <button onClick={handleClose} className="formButton">
                Cancel
            </button>
            <button type="submit" onClick={handleAdd} className="formButton">
                ADD
            </button>
            </DialogActions>
        </Dialog>
        </div>
    );
}
