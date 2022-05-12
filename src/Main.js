import React from 'react';
import HornedBeast from './HornedBeast';
import {Row, Col} from 'react-bootstrap'


class Main extends React.Component{
    render() {
    
    
        return (
            <Row xs={1} sm={2} md={3} lg={4} className="g-4">
                    {this.props.data.map((beast, idx) => {
                     return(  
                        <HornedBeast
                            id={beast._id} 
                            image_url={beast.image_url}
                            title={beast.title}
                            description={beast.description}
                            keyword={beast.keyword}
                            horns={beast.horns}
                            key={idx}
                            openModalHandler={this.props.openModalHandler}
                    />
                     )
                    })
                    }
                </Row>
        )
}
}

export default Main;