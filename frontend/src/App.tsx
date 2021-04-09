import './App.scss';

import MomentUtils from '@date-io/moment';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import React, { useState } from 'react';
import Header from './components/header/header';
import QrCodeForm from './components/qr-code-form/qr-code-form';
import QrCodeImg, { IQrCodeImgProps } from './components/qr-code-scan/qr-code-img';
import { ICreateQrCode } from './shared/interfaces/create-qr-code.interface';
import { IQrCode } from './shared/interfaces/qr-code.interaface';

function App() {
  const [qrCodeImg, setQrCodeImg] = useState<IQrCodeImgProps>({
    img: '',
    isError: false
  });

  const submitForm = async (value: ICreateQrCode) => {
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(value)
    };
    
    const response = await fetch(`${process.env.REACT_APP_API}/qr-code`, requestOptions);

    if (response.ok) {
      const body: IQrCode = await response.json();
      setQrCodeImg({
        img: body.img,
        isError: false
      });
    } else {
      setQrCodeImg({
        img: '',
        isError: true
      });
    }
  }

  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <div className="app">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <Header></Header>
            </div>
            <div className="col-12">
              <div className="row">
                <div className="col-lg-6 col-md-12">
                  <div className="qr-code-form-wrapper">
                    <QrCodeForm submitForm={submitForm}></QrCodeForm>
                  </div>

                </div>
                <div className="col-lg-6 col-md-12">
                  <div className="qr-code-img-wrapper">
                    <QrCodeImg {...qrCodeImg}></QrCodeImg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MuiPickersUtilsProvider>
  );
}

export default App;
