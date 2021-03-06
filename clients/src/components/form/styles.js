import { makeStyles} from '@material-ui/core/styles';

export default makeStyles((theme)=>({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
        },
    },
    paper:{
        padding:theme.spacing(2),
    },
    form: {
        display:'flex',
        flexWrap:'wrap',
        justifyContent:'center',
        
    },
    text:{
        margin: theme.spacing(1),
    },
    fileInput:{
        width:'97%',
        margin:'20px 0',
    },
    buttonSubmit:{
        marginButton:10,
        margin: theme.spacing(1),
    },
}))