import React from 'react';
import HornedBeast from './HornedBeast';


class Main extends React.Component{
    render() {
        return (
            <main>
                <HornedBeast 
                    title='Bison'
                    imgUrl="./src/bison.jpg"
                    description='Largest land animal in North America'
                />
                <HornedBeast 
                    title='Mountain Goat'
                    imgUrl='./mountainGoat.jpg'
                    description='Between 2,400 and 3,200 mountain goats are estimated to live in Western Washington.'
                />
            </main>
        )
    }
}

export default Main;