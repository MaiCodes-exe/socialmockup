import React from 'react'
import { Tooltip } from '@mui/material'




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


// export default Add
