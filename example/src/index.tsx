import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Button } from '../../src';
import { Button as ButtonFromCRLLibrary }from "@muathyhkefayah/react-elements-library-crl";


const App = () => {
  return (
    <div>
       <Button className='test' type='submit' onClick={() => alert("test")}> Save </Button>
       <ButtonFromCRLLibrary  className='test' type='submit' onClick={() => alert("test2")}> Submit</ButtonFromCRLLibrary>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
