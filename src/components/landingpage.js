import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import mainLogo from'./Image-1.PNG';

class Landing extends Component {
    render() {
        return(
            <div style={{width: '100%', margin: 'auto'}}>
            <Grid className="landing-grid">
                <Cell col={12}>
                <img 
                src={mainLogo}
                alt="avatar"
                className="avatar-img"
                />
                <div className="banner-text">
                    <h1>Full Stack Software Developer</h1>
                    
                <hr/>

                <p>Object-oriented programming | JavaScript | HTML/CSS | MERN Stack Development | APIs | Databases | Server Side</p>
                
                <div className="social-links">
                {/*Linkedin*/}
                <a href="https://www.linkedin.com/in/deeno-shamsul-bahri-854a02168/" rel="noopener noreferrer" target="_blank">
                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>
                 {/*Github*/}
                 <a href="https://github.com/deenobahri12" rel="noopener noreferrer" target="_blank">
                    <i className="fa fa-github-square" aria-hidden="true" />
                </a> 
                {/*Mail(gmail)*/}
                <a href="mailto:deenobahri12@gmail.com?subject=Email%20Subject&body=Email%20Body%20Text" rel="noopener noreferrer" target="_blank">
                    <i className="fa fa-envelope-square" aria-hidden="true" />
                </a>
                </div>
                     </div>
                </Cell>
            </Grid>
            </div>
        )
    }
}
 export default Landing;

