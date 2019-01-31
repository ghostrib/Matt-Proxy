import React, { Component } from 'react';
import Grid from 'react-css-grid';

// .grid-container {
//     display: grid;
//     grid-template-columns: auto auto auto;
//     background-color: #2196F3;
//     padding: 10px;
//   }
//   .grid-item {
//     background-color: rgba(255, 255, 255, 0.8);
//     border: 1px solid rgba(0, 0, 0, 0.8);
//     padding: 20px;
//     font-size: 30px;
//     text-align: center;
//   }

// const containerStyle = {
//     display: 'grid',
//     // gridTemplateColumns: 'auto auto auto',
//     gridGap: '50px 100px',
//     backgroundColor: 'white',
//     padding: '10px'
// }

// const itemStyle = {
//     backgroundColor: 'rgba(255, 255, 255, 0.8)',
//     border: '1px solid rgba(0, 0, 0, 0.8)',
//     padding: '20px',
//     fontSize: '30px',
//     textAlign: 'center',
//     gridColumnGap: '10px'
// }

const wrapperStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '10px',
    gridAutoRows: 'minmax(100px, auto)'
}

const pledgeStyle = {
    gridColumn: '1 / 3',
    gridRow: '2 / 5'
}

const relatedStyle = {
    gridColumn: '2 / 4',
    gridRow: '1 / 3'
}

//   .one {
//     grid - column: 1 / 3;
//     grid - row: 1;
// }
//   .two {
//     grid - column: 2 / 4;
//     grid - row: 1 / 3;
// }
//   .three {
//     grid - column: 1;
//     grid - row: 2 / 5;
// }
//   .four {
//     grid - column: 3;
//     grid - row: 3;
// }
//   .five {
//     grid - column: 2;
//     grid - row: 4;
// }
//   .six {
//     grid - column: 3;
//     grid - row: 4;
// }



class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: Math.ceil(Math.random() * 107)
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e, ID) {
        console.log(ID)
        this.setState({
            id: ID
        })
    }

    render() {
        return (

            <div style={wrapperStyle}>
                <Project id={this.state.id} />
                <Pledge id={this.state.id} style={relatedStyle} />
                {/* <Comments id={this.state.id} /> */}
                <Related
                    onClick={this.handleClick}
                    id={this.state.id}
                    style={pledgeStyle}
                />
            </div>

        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));

export default App;