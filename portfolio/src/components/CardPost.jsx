
import * as React from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { API_URL } from '../config';

const theme = createTheme({
  typography: {
    fontFamily: [
      '"Miriam Mono CLM"',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
  palette: {
    background: {
      default: "black"
    }
  },
  extend: {
    lineHeight: {
      'extra-loose': '2.5',
      '12': '3rem',

    }
  }
});

const CardPost = ({projet}) => {
  
  const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  color: 'white',
  transform: 'translate(-50%, -50%)',
  width: '60%',
  bgcolor: 'black',
  border: '2px solid #F2BD00',
  boxShadow: 24,
  p: 2,
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <ThemeProvider theme={theme} >
      <Card sx={{ maxWidth: 345, background: "black" }} className="w-5/6 m-4" >
        <CardMedia
          component="img"
          onClick={handleOpen}
          height="140"
          image={ API_URL + projet.attributes.image.data[0].attributes.url}
          alt="project image"
          className="cursor-pointer max-h-52 object-cover fadeIn"
        />
        <CardContent className="bg-black fadeIn">
          <Typography variant="h5" component="div" color="white" className="font-miriam_clmbook">
            {projet.attributes.titre}
          </Typography>
          <Typography variant="caption" color="white" className="font-miriam_clmbook">
            {projet.attributes.content.substring(0,80)}
          </Typography>
        </CardContent>
        <CardActions className="bg-black fadeIn">
          <Button size="small" onClick={handleOpen} sx={{color: '#F2BD00',}}>Plus..</Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            className="modal"
          >
            <Box sx={style}
            className="fadeIn"
            >
              <CardMedia
                component="img"
                height="140"
                image={ API_URL + projet.attributes.image.data[0].attributes.url}
                alt="project image"
                className="max-w-xs justify-center"
              />
              <Typography id="modal-modal-title" variant="h6" component="h2">
              {projet.attributes.titre}
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              {projet.attributes.content}
              </Typography>
            </Box>
          </Modal>
        </CardActions>
      </Card>
    </ThemeProvider>
  );
}

export default CardPost;
