import React, {useState} from 'react';
import {TextField, Paper, Typography, Button} from '@material-ui/core';
import FileBase from 'react-file-base64';
import {useDispatch } from 'react-redux';
import useStyles from './styles';
import { createPost } from '../../actions/Posts';

const Form = () => {
    const [PostData, setPostData] = useState({
        creator: '',
        title: '',
        message: '',
        tags:'',
        selectedFile:''
    })
    const classes = useStyles();
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createPost(PostData));
    }
    const clear = () => {

    }
    
    return(
       <Paper className={classes.paper}>
           <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}></form>
            <Typography variant="h6">Creating Post</Typography>
            <TextField 
                className={classes.text}
                name="creator" 
                variant="outlined"
                label="Creator" 
                fullWidth
                value={PostData.creator}
                onChange={(e)=>{setPostData({...PostData,creator:e.target.value})}}
             > 
             </TextField>
            <TextField
                className={classes.text} 
                name="title" 
                variant="outlined"
                label="Title" 
                fullWidth
                value={PostData.title}
                onChange={(e)=>{setPostData({...PostData,title:e.target.value})}}
             > 
             </TextField>
            <TextField 
                className={classes.text}
                name="message" 
                variant="outlined"
                label="Message" 
                fullWidth
                value={PostData.message}
                onChange={(e)=>{setPostData({...PostData,message:e.target.value})}}
             > 
             </TextField>
            <TextField 
                className={classes.text}
                name="tags" 
                variant="outlined"
                label="Tags" 
                fullWidth
                value={PostData.tags}
                onChange={(e)=>{setPostData({...PostData,tags:e.target.value})}}
             > 
             </TextField>
             <div className={classes.fileInput}>
                 <FileBase
                    className={classes.text}
                    type="file"
                    multiple={false}
                    onDone={({base64})=>setPostData({...PostData, selectedFile:base64})}
                  />
             </div>
             <Button 
             className={classes.buttonSubmit}
             type="submit" 
             variant = "contained"
             color="primary"
             size="large"
             onClick={handleSubmit}
             fullWidth>Submit</Button>
             <Button 
              className={classes.buttonSubmit}
             onClick={clear}
             variant = "contained"
             color="secondary"
             size="small"
             fullWidth>Clear</Button>
       </Paper>
    )
}

export default Form;