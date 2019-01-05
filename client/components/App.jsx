import React, { Component } from 'react';

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
                {/* <Project id={this.state.id} /> */}
                <Pledge id={this.state.id} />
                {/* <Comments id={this.state.id} /> */}
                <Related
                    onClick={this.handleClick}
                    id={this.state.id}
                />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));

export default App;