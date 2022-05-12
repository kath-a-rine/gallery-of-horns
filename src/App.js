import React from 'react';
import Header from './Header.js';
import Footer from './Footer.js';
import Main from './Main.js';
import data from './data.json';
import SelectedBeast from './SelectedBeast.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalDisplayed: false,
      beastName: '',
      beastPic: '',
      beastDescription: ''
    };
  }

  openModalHandler = (title, image_url, description) => {
    
    this.setState({
      isModalDisplayed: true,
      beastName: title,
      beastPic: image_url,
      beastDescription: description

    });
  }

  closeModalHandler = () => {
    this.setState({
      isModalDisplayed: false,
    });
  }

  render() {
    return (
     <>
      <Header />
      <Main
        data={data}
        openModalHandler={this.openModalHandler}
      />
      <Footer />

      <SelectedBeast 
        isModalDisplayed={this.state.isModalDisplayed}
        beastPic={this.state.beastPic}
        beastName={this.state.beastName}
        beastDescription={this.state.beastDescription}
        closeModalHandler={this.closeModalHandler}
        />

      </>);
  }
}


export default App;