import React, { InputHTMLAttributes } from "react";
import { useField } from "formik";
import {
    FormControl,
    FormLabel,
    Select,
    FormErrorMessage,
} from "@chakra-ui/react";
import { TriangleDownIcon } from '@chakra-ui/icons'

type SelectFieldProps = InputHTMLAttributes<HTMLSelectElement> & {
    label?: string;
    name: string;
    options?: Array<string>;
    value: string;
    onChange?(evn: React.ChangeEvent<HTMLSelectElement>): void;
};

// '' => false
// 'error message stuff' => true

export const SelectField: React.FC<SelectFieldProps> = ({
    name,
    label,
    value,
    options = [],
    onChange,
    size: _,
    ...props
}) => {


    return (
        <>
            {label ? <FormLabel htmlFor={label}>{label}</FormLabel> : null}
            <Select icon={<TriangleDownIcon fontSize='1rem' />}  {...props} id={name} value={value} onChange={onChange}>
                {options.map((item, key) => {
                    const optionProps: React.OptionHTMLAttributes<HTMLOptionElement> = {};
                    if (value === item) {
                        optionProps.value = item;
                    }
                    return (
                        <option key={key} {...optionProps}>
                            {item}
                        </option>
                    );
                })}
            </Select>
        </>
    );
}
