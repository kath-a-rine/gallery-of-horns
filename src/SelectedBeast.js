import React from 'react';
import Modal from 'react-bootstrap/Modal'


class SelectedBeast extends React.Component {

  render() {
    return (
  
      <Modal
        size ='lg'
        show={this.props.isModalDisplayed}
        onHide={this.props.closeModalHandler}
      >
            <Modal.Header closeButton>
              <Modal.Title>{this.props.beastName}</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <img src={this.props.beastPic} alt={this.props.beastDescription} title={this.props.beastName}/>
            </Modal.Body>

            <Modal.Footer>
              {this.props.beastDescription}
            </Modal.Footer>
      </Modal>

   );
  }
}

export default SelectedBeast;