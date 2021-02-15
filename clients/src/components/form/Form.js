import React, {useState} from 'react';
import {TextField, Paper, Typography, Button} from '@material-ui/core';
import FileBase from 'react-file-base64';
import useStyles from './styles';

const Form = () => {
    const [PostData, setPostData] = useState({
        creator: '',
        title: '',
        message: '',
        tags:'',
        selectedFile:''
    })
    const classes = useStyles();
    const handleSubmit = () => {

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
                value={PostData.creator}
                onChange={(e)=>{setPostData({...PostData,title:e.target.value})}}
             > 
             </TextField>
            <TextField 
                className={classes.text}
                name="message" 
                variant="outlined"
                label="Message" 
                fullWidth
                value={PostData.creator}
                onChange={(e)=>{setPostData({...PostData,message:e.target.value})}}
             > 
             </TextField>
            <TextField 
                className={classes.text}
                name="tags" 
                variant="outlined"
                label="Tags" 
                fullWidth
                value={PostData.creator}
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
             fullWidth>Submit</Button>
             <Button 
              className={classes.buttonSubmit}
             contentEditable
             onClick={clear}
             variant = "contained"
             color="secondary"
             size="small"
             fullWidth>Clear</Button>
       </Paper>
    )
}

export default Form;