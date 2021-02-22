import {  makeStyles } from "@material-ui/core"
import { deepPurple } from "@material-ui/core/colors"

export default makeStyles((theme)=>({


appBar:{
    borderRadius:15,
   
    marginTop:'0',
    marginLeft:'0',
    marginRight:'0',
    marginBottom:'60px',
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    padding:'0px 50px',
    width:'100%',
},
heading:{
    color:'rgba(0,183,255,1)',
    fontSize:'30px',
},
image:{
    marginLeft:'15px',
    height:'55px',
    width:'55px',
},
toolbar:{
    display:'flex',
    justifyContent:'flex-end',
    width:'400px',
},
profile:{
    display:'flex',
    justifyContent:'space-between',
    width:'400px',
},
UserName:{
    display:'flex',
    alignItems:'center',
},
brandContainer:{
    display:'flex',
    alignItems:'center',
},
purple:{
    color:theme.palette.getContrastText(deepPurple[500]),
    backgroundColor:deepPurple[500],
}
}));