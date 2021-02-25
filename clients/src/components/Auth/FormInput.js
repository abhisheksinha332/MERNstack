import React from 'react';
import { TextField, Grid,  IconButton, InputAdornment } from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

const FormInput = ({half, name, changeHandler, autoFocus, type, label, showPasswordHandler }) => {
    return (
        <Grid item  xs={12} sm={half ? 6 : 12 }>
            <TextField
           
                name={name}
                onChange={changeHandler}
                fullWidth
                type={type}
                autoFocus={autoFocus}
                label={label}
                required
                variant="outlined"
                inputProps={name === 'password' && {
                    endAdornment:(
                        <InputAdornment position="end">
                            <IconButton onClick={showPasswordHandler}>{type === "password" ? <Visibility /> : <VisibilityOff />}</IconButton>
                        </InputAdornment>
                    ),
                } 
                }
                 />
        </Grid>
    )
}

export default FormInput
