import {  makeStyles } from "@material-ui/core"
import { deepPurple } from "@material-ui/core/colors"

export default makeStyles((theme)=>({


appBar:{
    
    marginTop:'0',
    marginLeft:'0',
    marginRight:'0',
    marginBottom:'60px',
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    padding:'0px 20px',
    width:'100%',
   
},
heading:{
    color:'rgba(0,145,255,1)',
    fontSize:'35px',
    fontFamily: 'Satisfy',
    
},
image:{
    marginLeft:'15px',
    height:'55px',
    width:'55px',
},
toolbar:{
    display:'flex',
    justifyContent:'flex-end',
    // width:'300px',
    marginRight:'50px',
    width:'100%',
    
    
},
profile:{
    display:'flex',
    justifyContent:'space-between',
    // width:'400px',
    paddingRight:'10px',
    width:'100%',
},
UserName:{
    display:'flex',
    alignItems:'center',
    marginTop:'30px',
   
},
brandContainer:{
    display:'flex',
    alignItems:'center',
},
purple:{
    color:theme.palette.getContrastText(deepPurple[500]),
    backgroundColor:deepPurple[500],
    marginRight:'30px',
},
logout:{
    display:'flex',
    justifyContent:'space-between',
    background:'red',
},


}));