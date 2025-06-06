import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';
import Checkbox from '@mui/material/Checkbox';
import { Box, IconButton, Typography } from '@mui/material';
import EditDeleteButton from './EditDeleteButton';


export default function PreviousLogs({ totalData, data, setData, setSaved, className, open, setOpen }) {
  const [fullData, setFullData] = useState(totalData);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button variant="outlined" onClick={handleClickOpen} className={className} sx={{fontFamily: "monospace"}}>
        Previous Logs
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        
      >
        <div className='previouslogs2'> 
          <DialogTitle sx={{fontFamily: "monospace"}}>Select Previous Logs to Display</DialogTitle>
        <DialogContent>
          <Box sx={{ maxHeight: "50vh", overflowY: "scroll", width: "100%" }}>
            {fullData.length > 0 &&
              fullData.map((item, index) => (
                <Box key={item.id} sx={{ width: "100%" }}>
                  <EditDeleteButton item={item} data={data} setData={setData} setSaved={setSaved} setFullData={setFullData}/>
                </Box>
              ))}
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} sx={{fontFamily: "monospace"}}>Exit</Button>
        </DialogActions>
        </div>
        
      </Dialog>
    </>
  );
}