import React from 'react';
import Header from './Header.js';
import Footer from './Footer.js';
import Main from './Main.js';
import data from './data.json';
import Modal from 'react-bootstrap/Modal'



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
      <Modal
        size="lg"
        show={this.state.isModalDisplayed}
        onHide={this.closeModalHandler}
      >
            <Modal.Header>
              <Modal.Title>{this.state.beastName}</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <img src={this.state.beastPic} alt={this.props.description} title={this.props.title}/>
            </Modal.Body>

            <Modal.Footer>
              {this.state.beastDescription}
            </Modal.Footer>
      </Modal>

      </>);
  }
}


export default App;