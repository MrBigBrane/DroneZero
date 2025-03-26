import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';
import Checkbox from '@mui/material/Checkbox';
import { Box, Typography } from '@mui/material';

export default function PreviousLogs({ data, check, setCheck }) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button variant="outlined" onClick={handleClickOpen}>
        Previous Logs
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>Select Previous Logs to Display</DialogTitle>
        <DialogContent>
          <Box sx={{ maxHeight: "50vh", overflowY: "scroll" }}>
            {data.length > 0 && data.map((item, index) => (
              <Box key={index} sx={{ display: "flex", alignItems: "center" }}>
                <Checkbox checked={check.includes(item)} onChange={() => {
                  if (check.includes(item)) {
                    setCheck(check.filter((i) => i !== item));
                  } else {
                    setCheck([...check, item]);
                  }
                }} />
                <Typography>
                  {item.filename}
                </Typography>
              </Box>
            ))}
          </Box>
          {/* <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="email"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          /> */}

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Subscribe</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}