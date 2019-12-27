import React, { Component } from 'react';
import axios from 'axios';

class Fetch extends Component {
    state = {};
    componentDidUpdate(prevProps){
        if(this.props.url !== prevProps.url){
            this.fetch();
        }
    }
    fetch = async () => {
        const response = await axios.get(this.props.url);
        this.setState({
            data: response.data
        })
    }
    render() {
        const {data} = this.state;
        return (
            <div className='fetch'>
                <button onClick={this.fetch}>Fetch</button>
                {data ? <span data-testid='greeting'>'data fetched'</span> : null}
            </div>
        )
    }
}
export default Fetch;