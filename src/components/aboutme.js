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
                    Since I was young, electronics and technology intrigued me. I was always curious of the process and mechanics that went into creating my smartphone, my Playstation, or the websites I would browse. Upon finishing high school, I wasn’t sure what my focus of study should be. Initially, I thought my passion was personal training and fitness. At the age of 17, I successfully created Optimal Health & Performance which is my personal training and strength coaching business. 
                    While I come from a disciplined fitness background and enjoy personal training, it never provided me with the challenge or satisfaction I hoped for. While my training business was successful, I started to seek out other avenues to creatively express myself.
                    In 2016, I was introduced to computer programming through a close friend of mine. Programming was never a career path I considered pursing. However, after learning more about what coding entailed it only drove me to want to study more and continue to ask questions. After going through some online programs, 
                    I was surprised to see how I could easily spend hours researching and learning about coding. The first language I learned was basic programming with python. Once I became comfortable with the basic concepts such as variables, while loops, for-loops, logical operations, etc., I wanted to apply to a professional certificate program. For about a year of conducting research and graining a better understanding of coding, I decided to enroll in the full stack coding boot camp at the University of Minnesota.
                    Coding boot camp has enhanced my passion for software development. I learned all around software development, including the front and UI, backend functionality, databases, and serverside development. My work ethic, motivation to continue learning, and commitment to my profession are strengths I pride myself in. I have created a solid foundation to continue building upon my software development skills and ability. 
                    </p>

                    <p style={{fontSize: '20px', fontFamily: 'Arial, Helvetica, sans-serif'}}>
                    
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
