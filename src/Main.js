import React from 'react';
import HornedBeast from './HornedBeast';
import data from './data.json';
import {Row, Col} from 'react-bootstrap'


class Main extends React.Component{
    render() {
    
        return (
            <Row xs={1} sm={2} md={3} lg={4} className="g-4">
                    {data.map((creature, idx) => {
                     return(  
                    <Col>
                        <HornedBeast
                            id={creature._id} 
                            image_url={creature.image_url}
                            title={creature.title}
                            description={creature.description}
                            keyword={creature.keyword}
                            horns={creature.horns}
                            key={idx}
                    />
                    </Col>
                     )
                    })
                    }
                </Row>
        )
}
}

export default Main;