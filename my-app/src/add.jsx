import React from 'react'
import { Tooltip } from '@mui/material'
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';


export const Add = () => {
  return (
    <>
        <Tooltip title="Delete" sx={{position:"fixed", bottom: 20, left:{xs:"calc(50% - 20px)", md:30}}}>
            <Fab color="primary" aria-label="add">
                <AddIcon />
            </Fab>
        </Tooltip>
    </>
  )
   
}


export default Add
