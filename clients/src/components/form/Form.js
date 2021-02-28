import React, {useState, useEffect} from 'react';
import {TextField, Paper, Typography, Button} from '@material-ui/core';


import FileBase from 'react-file-base64';
import {useDispatch } from 'react-redux';
import useStyles from './styles';
import { createPost } from '../../actions/Posts';
import { updatePost } from '../../actions/Posts';
import { useSelector } from 'react-redux';

const Form = ({currentId, setCurrentId}) => {
    const [PostData, setPostData] = useState({
       
        title: '',
        message: '',
        tags:'',
        selectedFile:''
    })
    const Post = useSelector((state)=> currentId ? state.Posts.find((p)=>p._id === currentId): null );
    const classes = useStyles();
    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem('profile'));
   
    useEffect (()=>{
        if(Post) 
        {
           
            setPostData(Post);
        }
    },[Post])
    const handleSubmit = async (e) => {
        e.preventDefault();
        if(currentId){
            dispatch(updatePost(currentId,{...PostData, name :user?.result?.name}));  
            clear();
        }
        else{
        dispatch(createPost({...PostData, name :user?.result?.name}));
        clear();
        }
    }

    if(!user?.result?.name){
        return(
            <Paper className={classes.paper}>
                <Typography variant="h6" align="center">
                    Please Sign In to create your Post
                </Typography>
            </Paper>
        )
    }

    const clear = () => {
        setCurrentId=null;
        setPostData({
           
            title: '',
            message: '',
            tags:'',
            selectedFile:''
        })
    }
    
    return(
       <Paper className={classes.paper}>
           <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}></form>
            <Typography variant="h6">{currentId ? 'Editing' : 'Creating'} Post</Typography>
            {/* <TextField 
                className={classes.text}
                name="creator" 
                variant="outlined"
                label="Creator" 
                fullWidth
                value={PostData.creator}
                onChange={(e)=>{setPostData({...PostData,creator:e.target.value})}}
             > 
             </TextField> */}
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
                onChange={(e)=>{setPostData({...PostData,tags:e.target.value.split(',')})}}
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
             style={{background:'red'}}
             size="small"
             fullWidth>Clear</Button>
       </Paper>
    )
}

export default Form;