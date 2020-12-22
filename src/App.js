import './App.css';
import React, {Component} from 'react';
import {connect} from "react-redux";
import {plus} from "./store/actions";
import CardComponent from "./components/card/card";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            light: 0
        }
    }

    componentDidMount() {
        setInterval(this.Change, 1000)
    }

    Change = () => {
        this.setState((prevState) => {
            return {light: prevState.light + 100}
        })
    }

    render() {
        return (
            <div className="App">
                <h1 style={{fontSize: 144, fontFamily: 'sans-serif', color: '#0080A8'}}>{this.state.light}</h1>
                <p>{this.props.counter}</p>
                <p>{this.props.counter1}</p>
                <button onClick={this.props.Click}>Click</button>
                <hr/>
                <CardComponent bg={'#ff6663'}/>
                <CardComponent bg={'#635757'}/>
                <CardComponent bg={'#1bd776'}/>
                <CardComponent bg={'#95d71b'}/>
                <CardComponent bg={'#4af508'}/>
                <CardComponent bg={'#000000'}/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        counter: state.first.counter,
        counter1: state.second.counter1,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        Click: () => dispatch(plus())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

