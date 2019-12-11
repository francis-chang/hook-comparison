import React from "react";
import axios from "axios";

class Component extends React.Component {
    constructor(props) {
        super(props);
        this.onClickHander = this.onClickHander.bind(this);
    }

    state = {
        count: 1,
        data: null
    };

    componentDidMount() {
        axios
            .get(
                `https://jsonplaceholder.typicode.com/todos/${this.state.count}`
            )
            .then(resp => this.setState({ data: resp.data }));
    }

    componentDidUpdate(_, prevState) {
        if (prevState.count !== this.state.count) {
            axios
                .get(
                    `https://jsonplaceholder.typicode.com/todos/${this.state.count}`
                )
                .then(resp => this.setState({ data: resp.data }));
        }
    }

    onClickHander() {
        this.setState(state => ({ count: state.count + 1 }));
    }

    render() {
        const { data } = this.state;
        return (
            <div>
                {data && (
                    <div style={{ fontSize: "20px" }}>
                        {" "}
                        id:{data.id} | title: {data.title} | completed:{" "}
                        {data.completed.toString()}{" "}
                    </div>
                )}
                <div>{this.state.count}</div>
                <button onClick={this.onClickHander}>Add</button>
            </div>
        );
    }
}

export default Component;
