import React, { Component } from 'react';
import { Grid, Cell, ProgressBar } from 'react-mdl';

class Skills extends Component {
    render() {
        return(
            <Grid>
                <Cell col={12}>
                <div style ={{display: '', margin: "auto", alignContent: "center", textAlign: "center"}}>
                {this.props.skill}
                <ProgressBar progress={95} buffer={87} style={{margin: 'auto', width: '75%', padding: 1.5, display: 'flex'}}></ProgressBar>
                {this.props.progress} 
                </div>
                </Cell>
            </Grid>
        )
    }
}

export default Skills;

// <ProgressBar progress={33} buffer={87} />