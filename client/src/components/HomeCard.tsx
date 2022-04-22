import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Typography } from '@mui/material';

import { BooksDocument } from '../type/types';

interface HomeCardType{
    book: BooksDocument
  }

const HomeCard = ({book}:HomeCardType) => {
  console.log(book)
  return (
    <Card sx={{ maxWidth: 345 }} key={book.name}>
    <CardMedia
      component='img'
      alt='book pic'
      height='140'
      image={book.selectedFile}
    />
    <CardContent>
      <Typography gutterBottom variant='h5' component='div'>
        {book.name}
      </Typography>
      <Typography variant='body2' color='text.secondary'>
        {book.publishedYear}
      </Typography>
    </CardContent>
    <CardActions>
    </CardActions>
  </Card>
  )
}

export default HomeCard