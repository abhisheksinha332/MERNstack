import { AUTH } from '../Constants/constant';
import * as api from '../api';

export const signin = (submit,history) => async(dispatch)=>{
    try {
        
        history.push('/');
    } catch (error) {
        console.log(error);
    }
}
export const signup = (submit,history) => async(dispatch)=>{
    try {
        
    } catch (error) {
        
    }
}