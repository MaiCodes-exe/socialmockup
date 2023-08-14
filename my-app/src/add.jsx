import React from 'react'
import { Tooltip } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';


export const Add = () => {
  return (
    <>
        <Tooltip title="Delete">
            <Fab color="primary" aria-label="add">
                <AddIcon />
            </Fab>
            <DeleteIcon />
        </Tooltip>
    </>
  )
   
}


export default Add
