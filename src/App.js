import React from 'react';
import Header from './Header.js';
import Footer from './Footer.js';
import Main from './Main.js';
import data from './data.json';
import SelectedBeast from './SelectedBeast.js';
import Form from 'react-bootstrap/Form'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalDisplayed: false,
      beastName: '',
      beastPic: '',
      beastDescription: '',
      data: data
    };
  }

  openModalHandler = (title, image_url, description) => {
    
    this.setState({
      isModalDisplayed: true,
      beastName: title,
      beastPic: image_url,
      beastDescription: description,
    });
  }

  closeModalHandler = () => {
    this.setState({
      isModalDisplayed: false,
    });
  }

  hornSelected = (e) => {
    let selected = e.target.value;
   console.log(selected);
    if (selected === 'one') {
      // return all one horned beasts
      let newData = data.filter(beast => beast.horns === 1);
      console.log(newData);
      this.setState({ data: newData});
    } else if (selected === 'two') {
      // return all two horned beasts
      let newData = data.filter(beast => beast.horns === 2);
      this.setState({ data: newData});
    } else if (selected === 'threeOrMore') {
      // return all beasts with three or more horns
      let newData = data.filter(beast => beast.horns >= 3);
      this.setState({ data: newData});
    } else {
      this.setState({data: data})
    }
   
  }

  render() {

    return (
     <>
      <Header />
      <Form>
        <Form.Group>
          <Form.Select
            onChange={this.hornSelected}>
            <option value="all">All</option>
            <option value="one">One Horn</option>
            <option value="two">Two Horns</option>
            <option value="threeOrMore">Three or More Horns</option>
          </Form.Select>
        </Form.Group>
      </Form>
      <Main
        data={this.state.data}
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