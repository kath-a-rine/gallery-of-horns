import React from 'react';
import Card from 'react-bootstrap/Card'
import {Col} from 'react-bootstrap'

class HornedBeast extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            favorite: 0,    
        }
    }

    imgVote = () => {
        this.setState({
            favorite: this.state.favorite + 1,
        });
    }

    handleImgClick = () => {
        this.props.openModalHandler(this.props.title, this.props.image_url, this.props.description);
        console.log(this.handleImgClick);
    }

    render() {
        return (
           <>
           <Col>
            <Card style={{ width: '18rem'}} className="cards h-100">
            <Card.Img 
                onClick={this.handleImgClick}
                variant="top" 
                src={this.props.image_url} 
                alt={this.props.alt} 
                title={this.props.title}
                />
            <Card.Body onClick={this.imgVote}>
                <Card.Title>
                    {this.props.title}
                </Card.Title>
                <Card.Text>
                    {this.props.description}
                </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted">💖 {this.state.favorite}</Card.Footer>
            </Card>
            </Col>
           </>
        )
    }
}

export default HornedBeast;