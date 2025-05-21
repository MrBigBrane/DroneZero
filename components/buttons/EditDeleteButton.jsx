import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import { Box, Checkbox, IconButton, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import savefilename from '@/serveractions/save/savefilename';
import deletecsv from '@/serveractions/delete/deletecsv';

export default function EditDeleteButton({ data, setData, item, setSaved, setFullData }) {
  const [deleting, setDeleting] = useState(false);
  const [editing, setEditing] = useState(false);
  const [filename, setFilename] = useState(item.filename);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        paddingTop: 1,
        paddingBottom: 1,
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        
        <Checkbox
          className= 'previouslogs4'
          
          checked={data.some((i) => i.id == item.id)}
          onChange={() => {
            if (data.some((i) => i.id == item.id)) {
              setData((prevData) => prevData.filter((i) => i.id !== item.id));
            } else {
              setData((prevData) => [...prevData, item]);
            }
          }}
        />
        
        {!editing ? (
          <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography sx={{fontFamily: "monospace"}}>{filename} </Typography>
              <Typography variant='caption' sx={{fontFamily: "monospace"}}>Date: {item.created_at.substring(0, 10)}</Typography>
          </Box>
        ) : (
          <TextField
            autoFocus
            required
            // margin="dense"
            id="name"
            name="filename"
            variant="standard"
            value={filename}
            onChange={(e) => {
              setFilename(e.target.value);
            }}
          />
        )}
      </Box>
      {!deleting && !editing && (
        <Box>
          <div className='previouslogs3'>
            <IconButton
            onClick={() => {
              setEditing(true);
            }}
          >
            <CreateIcon />
          </IconButton>
          <IconButton
            onClick={() => {
              setDeleting(true);
            }}
          >
            <DeleteIcon />
          </IconButton>
          </div>
          
        </Box>
      )}
      {deleting && (
        <Box>
          <IconButton
            onClick={() => {
              setDeleting(false);
              setFullData((prevData) =>
                prevData.filter((i) => i.id !== item.id)
              );
              setData((prevData) => prevData.filter((i) => i.id !== item.id));
              deletecsv(item);
              setSaved(2);
              setTimeout(() => {
                setSaved(false);
              }, 3000);
            }}
          >
            <CheckIcon />
          </IconButton>
          <IconButton
            onClick={() => {
              setDeleting(false);
            }}
          >
            <CloseIcon />
          </IconButton>
        </Box>
      )}
      {editing && (
        <Box>
          <IconButton
            onClick={() => {
              setEditing(false);
              savefilename(item, filename);
              setSaved(true);
              setTimeout(() => {
                setSaved(false);
              }, 3000);
            }}
          >
            <CheckIcon />
          </IconButton>
          <IconButton
            onClick={() => {
              setEditing(false);
            }}
          >
            <CloseIcon />
          </IconButton>
        </Box>
      )}
    </Box>
  );
}