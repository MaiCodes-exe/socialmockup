import React from 'react'
import { Tooltip, Modal, Box, Typography, Avatar, TextField, styled, Stack, ButtonGroup, DateRange} from '@mui/material'
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import ImageIcon from '@mui/icons-material/Image';
import DateRangeIcon from '@mui/icons-material/DateRange';
import GifBoxIcon from '@mui/icons-material/GifBox';





const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  height: 250,
  width: 500,
  bgcolor: 'background.paper',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginBottom: "20px",
});

export const Add = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <>
        <Tooltip onClick={e=>setOpen(true)}
        title="Create" sx={{position:"fixed", bottom: 20, left:{xs:"calc(50% - 20px)", md:30}}}>
            <Fab color="light" aria-label="add">
                <AddIcon />
            </Fab>
        </Tooltip>
        <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={e=>setOpen(false)}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 500, borderRadius: 3}} bgcolor={"background.default"} color={"text.primary"}>
          <Typography variant='h5' color="grey" textAlign={"center"}> Create a new Post</Typography>
          <UserBox>

          <Avatar alt="Jemy Sharp" src="/static/images/avatar/1.jpg" 
           sx={{ width: 30, height: 30 }}
          />
            <Typography fontWeight={500} variant="span">
              John Doe
            </Typography>
          </UserBox>
          <TextField
            sx={{ width: "100%" }}
            id="standard-multiline-static"
            multiline
            rows={3}
            placeholder="What's on your mind?"
            variant="standard"
          />
          <Stack direction="row" gap={1} mt={2} mb={3} justifyContent={'center'}>
            <GifBoxIcon/>
            <ImageIcon/>
            <VideoCameraBackIcon/>
            <PersonAddIcon/>
          </Stack>
          <ButtonGroup
            fullWidth
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button>Post</Button>
            <Button md={{ width: "300px" }}>
              <DateRangeIcon/>
            </Button>
          </ButtonGroup>
        </Box>
      </Modal>
    </div>

    </>
  )
   
}


export default Add
