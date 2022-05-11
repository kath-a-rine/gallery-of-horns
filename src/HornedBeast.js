import React from 'react';
import Card from 'react-bootstrap/Card'

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

    render() {
        return (
           <>
            <Card style={{ width: '18rem' }}>
            <Card.Img onClick={this.imgVote} variant="top" src={this.props.image_url} alt={this.props.alt} title={this.props.title}/>
            <Card.Body>
                <Card.Title>{this.props.title}</Card.Title>
                <Card.Text>
                {this.props.description}
                </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted">💖 {this.state.favorite}</Card.Footer>
            </Card>
           {/* <article>
                <h2>{this.props.title}</h2>
                <p> 💖 {this.state.favorite}</p>
                <img 
                    src={this.props.image_url} 
                    alt={this.props.alt} 
                    title={this.props.title}
                    onClick={this.imgVote}
                    />
                <p>{this.props.description}</p>
            </article> */}
           </>
        )
    }
}

export default HornedBeast;