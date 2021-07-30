import React, { Component } from 'react';

import { ToastContainer } from 'react-toastify';
// import LoadButton from './components/image-folder/loadButton';
import 'react-toastify/dist/ReactToastify.css';
import ImageInfo from './components/image-folder/image-info';
import InputImage from './components/image-folder/image-input';

class App extends Component {
  state = {
    imageName: [],
  };
  formSubmit = imageName => {
    this.setState({ imageName });
  };

  render() {
    return (
      <div>
        <header className="Searchbar">
          <InputImage onSubmit={this.formSubmit} />

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

        <ImageInfo imageName={this.state.imageName} />
        {/* {this.state.imageName.length !== 0 && (
          <LoadButton
            onSubmit={this.loadSubmit}
            length={this.state.imageName.length}
            imageName={this.state.imageName}
          />
        )} */}
      </div>
    );
  }
}

export default App;
