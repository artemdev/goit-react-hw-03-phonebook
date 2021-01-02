import { Component } from 'react'

class Filter extends Component {


    render() {
        return (

            <label htmlFor="filter">
                <input type="text" id="filter" onChange={this.props.changeFilter} />
            </label>

        )
    }
}

export default Filter
