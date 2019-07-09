import React from 'react';
import { connect } from 'react-redux';
import { nap, eat, play } from '../actions/oakley';

const Activity = ({ activity, nap, eat, play }) => {
    return (
        <>
            <h2>The cat is: {activity}</h2>
            <button onClick={() => eat()}>eating</button>
            <button onClick={() => nap()}>napping</button>
            <button onClick={() => play()}>playing</button>
        </>
    );
}

// const mapDispatchToProps = () => {

// }

const mapStateToProps = state => {
    const { activity } = state;
    return activity;
}

const mapDispatchToProps = dispatch => {
    return {
        eat: () => dispatch(eat()),
        nap: () => dispatch(nap()),
        play: () => dispatch(play()),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Activity);