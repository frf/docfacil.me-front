import React from 'react';
import './styles.css';
// import FormLogin from '../../components/FormLogin';
import SVG from '../../assets/images/svg-7.svg';

function Upload() {
  return (
    <div className={'content'}>
      <div className={'container'}>
        <div className='row'>
          <div className='col register-center'>

            Upload de arquivos
            {/* <FormLogin /> */}
          </div>
          <div className='col'>
            <div className={'img-wrapper'}>
                  <img src={SVG} alt={'Login'} className={'hero-img'} />
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Upload;
