import { AUTH } from '../Constants/constant';
import * as api from '../api';

export const signin = (submit,history) => async(dispatch)=>{
    try {
        const { data } = await api.signIn(submit);

        dispatch({type:AUTH, data});

        history.push('/');
    } catch (error) {
        console.log(error);
    }
}
export const signup = (submit,history) => async(dispatch)=>{
    try {
        const { data } = await api.signUp(submit);

        dispatch({type:AUTH, data});

        history.push('/');

        
    } catch (error) {
        
    }
}