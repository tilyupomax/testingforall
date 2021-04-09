import './qr-code-img.scss';

import React, { Fragment } from 'react';

export interface IQrCodeImgProps {
    img: string;
    isError: boolean;
}

export default function QrCodeImg({ img, isError }: IQrCodeImgProps) {
    return (
        <div className="qr-code-img" >

            { isError ? <b>Error</b> : 
                img ? < img src={img} alt="QR code" /> : null 
            }
        </div >
    )
}
