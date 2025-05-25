import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';
import HelpIcon from '@mui/icons-material/Help';
import { IconButton } from '@mui/material';

export default function HelpModal() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <IconButton size="small" onClick={handleClickOpen}>
        <HelpIcon />
      </IconButton>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Understanding Flight Stats"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <b>Risk Assessment:</b>
            <br /> The three levels of the risk assessment are based on the
            health threats posed by respective CO₂ levels. Areas of "Low Risk"
            have CO₂ levels less than 1000 ppm and are considered safe. Areas of
            "Medium Risk" have CO₂ levels between 1000 and 1500 ppm where
            symptoms may appear. Areas of "High Risk" have CO₂ levels greater
            than 1500 ppm which can give rise to more intense symptoms.
            <br />
            <br />
            <b>Altitude:</b>
            <br /> The altitude figures represent the height of the drone above sea level. However,
            this may change based on the drone settings used.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            Exit
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}