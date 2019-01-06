import React, { Component } from 'react';
//import Grid from '@material-ui/core/Grid';
import { Grid, Row, Col } from 'react-bootstrap'


const wrapperStyle = {
    // display: 'grid',
    // maxWidth: '100%',
    // margin: '0 auto',
    // gridTemplateColumns: 'repeat(3, 1fr)',
    // gridGap: '10px',
    // gridAutoRows: 'minmax(100px, auto)'
}



const projectStyle = {
    // border: '2px solid rgb(233,171,88)',
    // borderRadius: '5px',
    // backgroundColor: 'rgba(233,171,88,.5)',
    // padding: '1em',
    // color: '#d9480f',
    // gridColumn: '1 / 3',
    // gridRow: '1 / 4'
}

const pledgeStyle = {
    // border: '2px solid rgb(233,171,88)',
    // borderRadius: '5px',
    // backgroundColor: 'rgba(233,171,88,.5)',
    // padding: '1em',
    // color: '#d9480f',
    // gridColumn: '1 / 4',
    // gridRow: '1 / 4'
}

const commentStyle = {
    // border: '2px solid rgb(233,171,88)',
    // borderRadius: '5px',
    // backgroundColor: 'rgba(233,171,88,.5)',
    // padding: '1em',
    // color: '#d9480f',
    // gridColumn: '1 / 3',
    // gridRow: '4 / 6'
}

const relatedStyle = {
    // border: '2px solid rgb(233,171,88)',
    // borderRadius: '5px',
    // backgroundColor: 'rgba(233,171,88,.5)',
    // padding: '1em',
    // color: '#d9480f',
    // gridColumn: '3',
    // gridRow: '4 / 6'
}



// const App = () => {
//     return (
//         <Grid>
//             <Cell>
//                 <p>Lorem</p>
//             </Cell>
//             <Cell>
//                 <p>ipsum</p>
//             </Cell>
//             <Cell>
//                 <p>dolor</p>
//             </Cell>
//             <Cell>
//                 <p>sit</p>
//             </Cell>
//         </Grid>
//     );
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
            <div>
                <Grid>
                    <Row>
                        <Project className='project' id={this.state.id} />

                    </Row>

                    <Row md={4} xs={3} lg={2}>
                        <Pledge className='pledge' id={this.state.id} />

                    </Row>


                    <Related onClick={this.handleClick} id={this.state.id} />

                    <Comments id={this.state.id} />

                </Grid>



            </div>

        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));

export default App;