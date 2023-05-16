import React, { Component } from 'react';
import Tour from 'reactour';

class App extends Component {
    state = {
        isTourOpen: true,
    };

    closeTour = () => {
        this.setState({ isTourOpen: false });
    };

    render() {
        const steps = [
            {
                selector: '.first-step',
                content: 'This is my first Step',
            },
            {
                selector: '.second-step',
                content: 'This is my second Step',
            },
            {
                selector: '.third-step',
                content: 'This is my third Step',
            },
            {
                selector: '.fourth-step',
                content: 'This is my fourth Step',
            },
            {
                selector: '.fifth-step',
                content: 'This is my fifth Step',
            },
        ];

        const customStyles = {
            // Customize the pop-up styles here
            overlay: {
                backgroundColor: 'red'
            },
            helper: {
                backgroundColor: 'rgba(0, 0, 255, 1)',
                borderRadius: '4px',
                boxShadow: '0 0 4px rgba(0, 0, 0, 0.2)',
                color: '#333',
            },
            closeButton: {
                color: '#999',
                fontSize: '18px',
                fontWeight: 'bold',
            },
        };


        return (
            <div>
                {/* other stuff */}
                <div className="first-step">
                    <p>This is the first step content</p>
                </div>
                <div className="second-step">
                    <p>This is the second step content</p>
                </div>
                <div className="third-step">
                    <p>This is the third step content</p>
                </div>
                <div className="fourth-step">
                    <p>This is the fourth step content</p>
                </div>
                <div className="fifth-step">
                    <p>This is the fifth step content</p>
                </div>
                <Tour steps={steps} styles={customStyles}
                    isOpen={this.state.isTourOpen} onRequestClose={this.closeTour} />
            </div>
        );
    }
}

export default App;
