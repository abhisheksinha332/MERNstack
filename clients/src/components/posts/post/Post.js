import React from 'react';
import {Card, CardActions, CardContent, CardMedia, Button, Typography} from '@material-ui/core';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbUpAltOutlined from '@material-ui/icons/ThumbUpAltOutlined';
import DeleteIcon from '@material-ui/icons/Delete';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import {useDispatch} from 'react-redux';
import {deletePost,likePost} from '../../../actions/Posts';


import useStyles from './styles';

const Post = ({Post, setCurrentId}) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem('profile'));

    const LikeButton = () => {
        if(Post.likes.length >0 ){
        return Post.likes.find((like)=>like === (user?.result?.googleId || user?.result?._id))?
        (
            <><ThumbUpAltIcon fontSize="small" />&nbsp;{Post.likes.length > 2 ? `You and ${Post.likes.length - 1} others` : `${Post.likes.length} like${Post.likes.length > 1 ? 's' : ''}` }</>
        )   :(
            <><ThumbUpAltOutlined fontSize="small" />&nbsp;{Post.likes.length} {Post.likes.length === 1 ? 'Like' : 'Likes'}</>
        );

    }
     return <><ThumbUpAltOutlined fontSize="small" />&nbsp;Like</>;
};
    

    return(
        // <Card className={classes.card}>
        //     <CardMedia className={classes.media} image={Post.selectedFile} title={Post.title} />
        // <div className={classes.overlay}>
        //     <Typography variant="h6">{Post.name}</Typography>
        //     <Typography variant="body2">{moment(Post.createdAt).fromNow()}</Typography>
        // </div>
        // <div className={classes.overlay2}>
        // {(user?.result?.googleId === Post.creator || user?.result?._id === Post.creator) &&(
        //     <Button style={{color:'white'}} size="small" onClick={()=> setCurrentId(Post._id)}>
               
        //         <BorderColorIcon fontSize="medium" />
        //     </Button>
        // )}
        // </div>
        // <div className={classes.details}>
        // <Typography variant="body2" color="textSecondary">{Post.tags.map((tag)=> `#${tag} `)}</Typography>
        // </div>
        // <Typography className={classes.title} variant="h5" gutterBottom>{Post.title}</Typography>
        // <CardContent>
        //     <Typography variant="body2" color="textSecondary">{Post.message}</Typography>
        // </CardContent>
        // <CardActions className={classes.cardActions}>
        //     <Button size="small" color="primary" disabled={!user?.result} onClick={()=>dispatch(likePost(Post._id))}>
        //        <LikeButton />
        //     </Button>
        //     {(user?.result?.googleId === Post.creator || user?.result?._id === Post.creator) &&(
        //         <Button size="small" color="primary" onClick={()=>dispatch(deletePost(Post._id))}>
        //             <DeleteIcon fontSize="small" />Delete
        //         </Button>
        //     )}
       
        // </CardActions>
        // </Card>



        <Card className={classes.card}>
            
            <div className={classes.details1}>
                
            <Typography variant="h6">{Post.name}</Typography>
        <Typography variant="body2">{moment(Post.createdAt).fromNow()}</Typography>
            </div>

        <CardMedia className={classes.media} image={Post.selectedFile} title={Post.title} />
    <div className={classes.overlay}>
        {/* <Typography variant="h6">{Post.name}</Typography>
        <Typography variant="body2">{moment(Post.createdAt).fromNow()}</Typography> */}
    </div>
    <div className={classes.overlay2}>
    {(user?.result?.googleId === Post.creator || user?.result?._id === Post.creator) &&(
        <Button style={{color:'black'}} size="small" onClick={()=> setCurrentId(Post._id)}>
           
            <BorderColorIcon fontSize="default" />
        </Button>
    )}
    </div>
    <div className={classes.details}>
    <Typography variant="body2" color="textSecondary">{Post.tags.map((tag)=> `#${tag} `)}</Typography>
    </div>
    <Typography className={classes.title} variant="h5" gutterBottom>{Post.title}</Typography>
    <CardContent>
        <Typography variant="body2" color="textSecondary">{Post.message}</Typography>
    </CardContent>
    <CardActions className={classes.cardActions}>
        <Button size="small" color="primary" disabled={!user?.result} onClick={()=>dispatch(likePost(Post._id))}>
           <LikeButton />
        </Button>
        {(user?.result?.googleId === Post.creator || user?.result?._id === Post.creator) &&(
            <Button size="small" color="primary" onClick={()=>dispatch(deletePost(Post._id))}>
                <DeleteIcon fontSize="small" />Delete
            </Button>
        )}
   
    </CardActions>
    </Card>
    )
}

export default Post;