import './qr-code-form.scss';

import { Button, TextField } from '@material-ui/core';
import { KeyboardDatePicker } from '@material-ui/pickers';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';

import { ICreateQrCode } from '../../shared/interfaces/create-qr-code.interface';

interface IQrCodeFormProps {
    submitForm: (value: ICreateQrCode) => Promise<void>;
}

export default function QrCodeForm({ submitForm }: IQrCodeFormProps) {
    const { control, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (value: any) => {
        const createQrCode: ICreateQrCode = {
            ...value,
            birthdate: value.birthdate.toISOString()
        };
        submitForm(createQrCode);
    }
    const onError = () => {
        if (Object.entries(errors).length === 1 && errors.birthdate) {
            errors.birthdate.ref.children[1].children[1].focus();
        }
    }

    const emailHelperText = () => {
        if (errors.email) {
            if (errors.email.type === 'required') {
                return 'Required';
            }
            if (errors.email.type === 'pattern') {
                return 'Invalid email address';
            }
        }

        return '';

    }
    return (
        <div className="form">
            <form onSubmit={handleSubmit(onSubmit, onError)}>
                <Controller
                    name="name"
                    defaultValue=""
                    control={control}
                    render={({ field: { onChange, value, ref } }) => (
                        <TextField
                            id="outlined-basic"
                            value={value}
                            inputRef={ref}
                            error={errors.name ? true : false}
                            helperText={errors.name ? 'Required' : ''}
                            onChange={onChange}
                            label="Name"
                            variant="outlined" />
                    )}
                    rules={{ required: true }}
                />

                <Controller
                    name="lastName"
                    defaultValue=""
                    control={control}
                    render={({ field: { onChange, value, ref } }) => (
                        <TextField id="outlined-basic"
                            value={value}
                            inputRef={ref}
                            error={errors.lastName ? true : false}
                            helperText={errors.lastName ? 'Required' : ''}
                            onChange={onChange}
                            label="Last Name"
                            variant="outlined" />
                    )}
                    rules={{ required: true }}
                />

                <Controller
                    name="phone"
                    defaultValue=""
                    control={control}
                    render={({ field: { onChange, value, ref } }) => (
                        <TextField id="outlined-basic"
                            helperText={errors.phone ? 'Required' : ''}
                            error={errors.phone ? true : false}
                            value={value}
                            inputRef={ref}
                            onChange={onChange}
                            label="Phone"
                            variant="outlined" />
                    )}
                    rules={{ required: true }}
                />

                <Controller
                    name="email"
                    defaultValue=""
                    control={control}
                    render={({ field: { onChange, value, ref } }) => (
                        <TextField
                            id="outlined-basic"
                            value={value}
                            inputRef={ref}
                            onChange={onChange}
                            label="Email"
                            helperText={emailHelperText()}
                            error={errors.email ? true : false}
                            variant="outlined"

                        />
                    )}
                    rules={{
                        required: true,
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "invalid email address"
                        }
                    }}
                />

                <Controller
                    name="birthdate"
                    defaultValue={null}
                    control={control}
                    render={({ field: { onChange, value, ref } }) => (
                        <KeyboardDatePicker
                            variant="inline"
                            inputVariant="outlined"
                            label="Date of Birth"
                            onChange={onChange}
                            name="birthdate"
                            value={value}
                            error={errors.birthdate ? true : false}
                            innerRef={ref}
                            helperText={errors.birthdate ? 'Required' : ''}
                            InputAdornmentProps={{ position: "start" }}
                        />
                    )}
                    rules={{
                        required: true,
                        validate: (value) => {
                            return value.isValid();
                        }
                    }}
                />
                <Button type="submit" variant="contained" color="primary">
                    Create QR code
                </Button>

            </form>
        </div>
    )
}
