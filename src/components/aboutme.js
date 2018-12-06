import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import mainLogo from'./Image-1.PNG';


class About extends Component {
    render() {
        return(
            <div>
                <Grid>
                    <Cell col={4}>
                    <div style={{textAlign: 'center'}}>
                    <img src={mainLogo}
                    alt="avatar"
                    style={{height: '550px'}}
                     /> 
                    </div>
                    </Cell>

                    <Cell className="resume-right-col" col={8}>
                    <h1 style={{fontFamily: 'Arial black'}}>About Me</h1>

                    <hr style={{borderTop: '3px solid #833fb2'}} />
                    
                    <p style={{fontSize: '20px', fontFamily: 'Arial, Helvetica, sans-serif'}}>
                    Since I was young, electronics and technology intrigued me. I was always curious of the process and the mechanics that went into creating my smart phone, or my Play Station, or the websites I would browse. Upon finishing high school, I wasn’t sure as to what my focus of study should be. 
                    Initially, I thought my passion was personal training and fitness. At the age of 17, I successfully created Optimal Health & Performance which is my personal training and strength coaching business. While I come from a disciplined fitness background and enjoy personal training, it never provided me with the challenge or satisfaction I craved. 
                    Although this was my first professional experience, I started to seek out other avenues to creatively express myself. 
                    </p>

                    <p style={{fontSize: '20px', fontFamily: 'Arial, Helvetica, sans-serif'}}>
                        Still in production....
                    </p>

                    <p style={{fontSize: '20px', fontFamily: 'Arial, Helvetica, sans-serif'}}>
                    
                    </p>
                    </Cell>

                    </Grid>
            </div>
        )
    }
}
 export default About;
