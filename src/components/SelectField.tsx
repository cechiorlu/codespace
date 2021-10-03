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
    onChange?(evn: React.ChangeEvent<HTMLSelectElement>): void;
};

// '' => false
// 'error message stuff' => true

export const SelectField: React.FC<SelectFieldProps> = ({
    label,
    options = [],
    onChange,
    size: _,
    ...props
}) => {


    const [field, { error }] = useField(props);
    return (
        <FormControl isInvalid={!!error}>
            {label ? <FormLabel htmlFor={field.name}>{label}</FormLabel> : null}
            <Select icon={<TriangleDownIcon fontSize='1rem' />} {...field} {...props} id={field.name} onChange={onChange}>
                {options.map((item, key) => {
                    const optionProps: React.OptionHTMLAttributes<HTMLOptionElement> = {};
                    if (props.name === item) {
                        optionProps.value = item;
                    }
                    return (
                        <option key={key} {...optionProps}>
                            {item}
                        </option>
                    );
                })}
            </Select>
            {error ? <FormErrorMessage>{error}</FormErrorMessage> : null}
        </FormControl>
    );
};

