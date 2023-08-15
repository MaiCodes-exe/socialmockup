import React from 'react';
import { Box, Checkbox } from '@mui/material';
// import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { pink, red } from '@mui/material/colors';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';



const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const Post = () => {
  return (
<Box flex={4} p={2}> 
    
    <Card sx={{margin: 5}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            B
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Bella Goth"
        subheader="August 13, 2023"
      />
      <CardMedia
        component="img"
        height="20%"
        image="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F1.bp.blogspot.com%2F-fzhxM0Pl8Pw%2FVQE6U38w6cI%2FAAAAAAAAYzk%2Fw996OjYjKE4%2Fs1600%2FPaul%252BGauguin%252C%252BWatermill%252Bin%252BPont-Aven%252C%252Boil%252Bon%252Bcanvas%252C%252B1894%252C%252BMus%25C3%25A9e%252Bd%27Orsay.jpg&f=1&nofb=1&ipt=72ab3d3c00237d8c73ba75b353eac5bf507e5e72afa1b6d53c3c69733e2668b9&ipo=images"
        alt="Painting"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This is my favourite painting by Gauguin! I just saw it at the museum.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
        <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
      <Checkbox
        {...label}
        icon={<BookmarkBorderIcon />}
        checkedIcon={<BookmarkIcon />}
      />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
      
    </Card>
    <Card sx={{margin: 5}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: pink[200] }} aria-label="recipe">
            P
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Penny Pancakes"
        subheader="September 23, 2023"
      />
      <CardMedia
        component="img"
        height="20%"
        image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi1.wp.com%2Fwww.guggenheim.org%2Fwp-content%2Fuploads%2F1927%2F01%2F76.2553.71_ph_web.jpg&f=1&nofb=1&ipt=eb2c82c1a9c5e3bb8662c7aba38dadd8b76e24c7ce01e5cfca533c19d823c005&ipo=images"
        alt="Painting"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        Had such a great time at the museum with Bella, here's my favourite piece from the exibit.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
        <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
      <Checkbox
        {...label}
        icon={<BookmarkBorderIcon />}
        checkedIcon={<BookmarkIcon />}
      />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
      
    </Card>
    <Card sx={{margin: 5}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="20%"
        image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi1.wp.com%2Fwww.guggenheim.org%2Fwp-content%2Fuploads%2F1927%2F01%2F76.2553.71_ph_web.jpg&f=1&nofb=1&ipt=eb2c82c1a9c5e3bb8662c7aba38dadd8b76e24c7ce01e5cfca533c19d823c005&ipo=images"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
        <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
      <Checkbox
        {...label}
        icon={<BookmarkBorderIcon />}
        checkedIcon={<BookmarkIcon />}
      />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
      
    </Card>
    <Card sx={{margin: 5}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Don Luthario"
        subheader="September 14, 2023"
      />
      <CardMedia
        component="img"
        height="20%"
        image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi1.wp.com%2Fwww.guggenheim.org%2Fwp-content%2Fuploads%2F1927%2F01%2F76.2553.71_ph_web.jpg&f=1&nofb=1&ipt=eb2c82c1a9c5e3bb8662c7aba38dadd8b76e24c7ce01e5cfca533c19d823c005&ipo=images"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
        <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
      <Checkbox
        {...label}
        icon={<BookmarkBorderIcon />}
        checkedIcon={<BookmarkIcon />}
      />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
      
    </Card>
    </Box>  );
};

export default Post;