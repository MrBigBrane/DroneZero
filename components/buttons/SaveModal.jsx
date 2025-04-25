import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';
import savecsv from '@/serveractions/save/savecsv';

export default function SaveModal({ data, file, setSaved }) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button variant="outlined" onClick={handleClickOpen} style={{ width: "100%"}} className='save'>
        Save
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        slotProps={{
            paper: {
              component: 'form',
              onSubmit: async (event) => {
                event.preventDefault();
                const formData = new FormData(event.currentTarget);
                const formJson = Object.fromEntries(formData.entries());
                const filename = formJson.filename;
                savecsv(data, filename);
                setSaved(true);
                handleClose();
                setTimeout(() => {
                  setSaved(false);
                }, 3000);
              },
            },
          }}
      >
        <DialogTitle>Save File</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To save this file, please confirm the file name
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="filename"
            label="File Name"
            // type="email"
            fullWidth
            defaultValue={file.name}
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Save</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
