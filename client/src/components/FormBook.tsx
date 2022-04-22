import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@mui/material';
import FileBase from 'react-file-base64';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@mui/styles';

import {BooksDocument} from '../type/types'
import {createBook} from '../redux/book/action'

const useStyles = makeStyles({
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  fileInput: {
    width: '97%',
    margin: '10px 0',
  },
  buttonSubmit: {
    marginBottom: 10,
  },
});

const FormBook = () => {
  const classes = useStyles();
  const [bookData, setBookData] = useState<BooksDocument>({
    name: '',
    publishedYear: 0,
    amount: 0,
    selectedFile: '',
  });

  const dispatch = useDispatch();

  useEffect(() => {}, []);

  const handleSubmit = (e:any) => {
      e.preventDefault();
      dispatch(createBook(bookData))
  };
console.log("book data    ",bookData)
  // if (!user?.result?.name) {
  //     return (
  //         <Paper className={classes.paper}>
  //             <Typography variant='h6' align='center'>
  //                 Please Sign In to create your own story and like other's story.
  //             </Typography>
  //         </Paper>
  //     )
  // }

  // const clear = () => {
  //     setCurrentId(null);
  //     setPostData({
  //         title: '', message: '', tags: '', selectedFile: ''
  //     })
  // }
  return (
    <Paper sx={{ width: '70%' }}>
      <form autoComplete='off' noValidate onSubmit={handleSubmit}>
        <Typography sx={{ m: 2 }} variant='h6'>
          Create Book
        </Typography>
        <TextField
          sx={{ m: 2, width: '70%' }}
          name='name'
          variant='outlined'
          label='Book Name'
          fullWidth
          value={bookData.name}
          onChange={(e) => setBookData({ ...bookData, name: e.target.value })}
        />
        <TextField
          sx={{ m: 2, width: '70%' }}
          name='publishedYear'
          variant='outlined'
          label='published Year'
          type="number"
          fullWidth
          value={bookData.publishedYear}
          onChange={(e:any) =>
            setBookData({ ...bookData, publishedYear: e.target.value })
          }
        />
        <TextField
          sx={{ m: 2, width: '70%' }}
          name='amount'
          variant='outlined'
          label='Amount'
          fullWidth
          value={bookData.amount}
          onChange={(e:any) => setBookData({ ...bookData, amount: e.target.value })}
        />
        <div className={classes.fileInput}>
          <FileBase
            type='file'
            multiple={false}
            onDone={({ base64 }: any) =>
              setBookData({ ...bookData, selectedFile: base64 })
            }
          />
        </div>
        <Button
          sx={{ m: 2, width: '70%' }}
          className={classes.buttonSubmit}
          variant='contained'
          color='primary'
          size='large'
          type='submit'
          fullWidth
        >
          Submit
        </Button>
        <Button
          sx={{ m: 2, width: '70%' }}
          variant='contained'
          color='secondary'
          size='small'
          fullWidth
        >
          Clear
        </Button>
      </form>
    </Paper>
  );
};

export default FormBook;
