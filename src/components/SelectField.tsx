import React, { InputHTMLAttributes } from "react";
import { useField } from "formik";
import {
    FormControl,
    FormLabel,
    Select,
    FormErrorMessage,
} from "@chakra-ui/react";

type SelectFieldProps = InputHTMLAttributes<HTMLSelectElement> & {
    label: string | null;
    name: string;
    options: Array<string>;
};

// '' => false
// 'error message stuff' => true

export const SelectField: React.FC<SelectFieldProps> = ({
    label,
    options,
    size: _,
    ...props
}) => {


    const [field, { error }] = useField(props);
    return (
        <FormControl isInvalid={!!error}>
            {label ? <FormLabel htmlFor={field.name}>{label}</FormLabel> : null}
            <Select {...field} {...props} id={field.name}>
                {options.map((option, i) => {
                    <option value={option}> { option } </option>
                })}
            </Select>
            {error ? <FormErrorMessage>{error}</FormErrorMessage> : null}
        </FormControl>
    );
};

