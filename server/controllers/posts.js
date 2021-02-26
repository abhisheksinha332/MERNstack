  
import express from 'express';
import PostMessage from '../models/postMessage.js';

import mongoose from 'mongoose';
import router from '../routes/posts.js';


export const getPosts = async (req, res)=> {
    try {
      const postMessages = await PostMessage.find();
      
      res.status(200).json(postMessages);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const createPosts = async (req, res) => {
    const post = req.body;
    const newPost = new PostMessage({...post, creator:req.userId, createdAt:new Date().toISOString()});
    try {
       await newPost.save();
       res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({message:error.message});
    }
}

export const updatePost = async(req,res) => {
    const { id: _id } = req.params;
    const post = req.body;

    if(!mongoose.Types.ObjectId.isValid(_id))
        return res.status(404).send("Post not found !");
    
   
    const updatedPost =await PostMessage.findByIdAndUpdate(_id, {...post,_id}, {new: true} );
    res.json(updatedPost);
    

}

export const deletePost = async(req,res) => {
    const{ id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("Post not found !");

    await PostMessage.findByIdAndRemove(id);

    res.json({message: 'Post Deleted'});
}

// export const likePost = async(req,res) => {
    export const likePost = async (req, res) => {
//     const{ id } = req.params;
       const { id } = req.params;
      
//     if(!req.userId) return res.json({message:'Permission denied'})
    if (!req.userId) {
     return res.json({ message: "Permission Denied" });
  }

//     if(!mongoose.Types.ObjectId.isValid(id))
//     return res.status(404).send("Post not found !");
if (!mongoose.Types.ObjectId.isValid(id)) {
return res.status(404).send(`No post with id: ${id}`);
}

//     const post = await PostMessage.findById(id);

        const post = await PostMessage.findById(id);

//     const index= post.likes.findIndex((id)=> id === String(req.userId));
        const index = post.likes.findIndex((id) => id === String(req.userId));

//     if(index=== -1){
//         post.likes.push(req,userId);
//     }
//     else{
//         post.likes = post.likes.filter((id)=>id !== String(req.userId));
//     }
if (index === -1) {
    post.likes.push(req.userId);
  } else {
    post.likes = post.likes.filter((id) => id !== String(req.userId));
  }

//     const updatedPost = await PostMessage.findByIdAndUpdate(id, post ,{new: true});
        const updatedPost = await PostMessage.findByIdAndUpdate(id, post, { new: true });
                                                                    
//     res.json(updatedPost );
        res.status(200).json(updatedPost); 
          
}



// }


    

   

 
    

    

   
    




