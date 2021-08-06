import { useState } from 'react';

import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import './components/image-folder/css/header.css';
import ImageInfo from './components/image-folder/image-info';
import InputImage from './components/image-folder/image-input';

function App() {
  const [imageName, setImageName] = useState('');
  const formSubmit = imageName => {
    setImageName({ imageName });
  };

  return (
    <div>
      <header className="Searchbar">
        <InputImage onSubmit={formSubmit} />

        <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </header>

      <ImageInfo imageName={imageName} />
    </div>
  );
}

export default App;
