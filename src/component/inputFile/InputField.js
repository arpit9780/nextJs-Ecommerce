import { TextField } from "@mui/material";
import React from "react";
const InputField = ({ disabled,register, label, placeholder, type, variant, error, defaultValue }) => {

    return (
        <div className="form-group">
            <TextField
                label={label}
                type={type}
                disabled={disabled}
                variant={variant}
                error={error}
                {...register}
                defaultValue={defaultValue}
                className="form-control"
                placeholder={placeholder}
              
            />
            
        </div>
    );
};

export default InputField;