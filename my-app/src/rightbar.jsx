import React from 'react';
import { Box, ImageList, ImageListItem, Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';




const RightBar = () => {
  return (
    <Box flex={2} p={2} sx={{display: {xs: "none", sm: "block"}}}>
      <Box width={300}>
        <Typography variant='h6' fontWeight={100}>Online</Typography>
        <AvatarGroup max={4}>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
          <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
          <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
        </AvatarGroup>
        
        <Typography variant='h6' fontWeight={100} mt={2} mb={2} >Latest Posts</Typography>
        <ImageList cols={3} rowHeight={100} gap={5}>
          <ImageListItem>
            <img 
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.KwoYsNz9OWU5j3dIuZbcLQHaEo%26pid%3DApi&f=1&ipt=9d3b38d564f22ba669d95a966a3c9b9fe2722af17be94e74716e2bb82183352a&ipo=images"

            />
          </ImageListItem>
        <ImageListItem>
            <img 
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.duuvY57GsRA9whXTsZ6regHaE8%26pid%3DApi&f=1&ipt=91f62a13832e24d6a0343d228d4e5d3fa21d5e3c45b869ee747110d581e3df3b&ipo=images"
            
            />
          </ImageListItem>

          <ImageListItem>
            <img 
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP._3eSytAmdxDkD1204dcYCAHaE8%26pid%3DApi&f=1&ipt=549152643ffbc17277a07a21fd405ff551062e4e6681d5735c5793efebdf4510&ipo=images"
            
            />
          </ImageListItem>
          <ImageListItem>
            <img 
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.kRwXCTf9XR-hCqP4-c_1owHaFI%26pid%3DApi&f=1&ipt=90469450257982f55b1ff9f40b84948e0c579abd919faa1cfd30c756e1cbbf50&ipo=images"
            
            />
          </ImageListItem>
          <ImageListItem>
            <img 
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.Wi8v5f6VqV0K0CZoFSZZzQHaE8%26pid%3DApi&f=1&ipt=0a9c79796ade6a8df938521ae720172b00743ede740375d81b52ee63a8f88cec&ipo=images"
            
            />
          </ImageListItem>
          <ImageListItem>
            <img 
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.osmPNdu3wLCnIys8dQxMKgHaE8%26pid%3DApi&f=1&ipt=e608de17255a5900116415d4ed2d433062c194a6128cd0f793ded6d4fb59fd93&ipo=images"
            
            />
          </ImageListItem>
        </ImageList>
        <Typography variant='h6' fontWeight={100} mt={2} mb={2} >Inbox</Typography>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
      </Box>
    </Box>

  );
};

export default RightBar;