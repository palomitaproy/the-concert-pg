import React from 'react';
import Carrousel from './Carrousel';
import TimeUntil from  './TimeUntil';

const Home = () => {
    return (
        <div style = {{position:'relative'}}>
            <Carrousel />

            <div className="person_name">
                <div className="wrapper">
                    Jennifer Lopez
                </div>
            </div>
            <TimeUntil />
        </div>
    );
};

export default Home;