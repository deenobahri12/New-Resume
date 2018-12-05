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
                    <h1 style={{fontFamily: 'Anton'}}>About Me</h1>

                    <hr style={{borderTop: '3px solid #833fb2'}} />
                    
                    <p style={{fontSize: '20px', fontFamily: 'Arial, Helvetica, sans-serif'}}>
                        Hello, my name is Deeno Bahri. I am Minneapolis, Minnesota born and raised. I come from an intense and heavily disciplined fitness background. It all started
                        when I got a job as a front desk staff member at Los Campeones Gym, located in south Minneapolis. Soon after working as a front desk staff member, I 
                        gradually transitioned into a personal trainer/strength coach. I continue to train clients every week because it is another huge passion of mine.
                    </p>

                    <p style={{fontSize: '20px', fontFamily: 'Arial, Helvetica, sans-serif'}}>
                    All while pursuing my passion as a personal trainer and strength coach, I finally made the biggest decision of my life thus far, that is to dive deep into programming and software development fundamentals in 2016.
                    I always had a huge passion for technology and electronics. A close friend of mine introduced me to programming and I was hooked instantly. Once I was exposed to programming, I never considered making it an actual career for myself. 
                    But after hearing about other successful developer stories, and through words of encouragement, I made the decision to pursue the field of software and become a software engineer.
                    The first language I learned basic programming with was Python. I got comfortable with all the basic concepts in programming such as variables, while loops, for-loops,
                    logical operators, etc.. all in my first year of serious studying.
                    </p>
                    <p style={{fontSize: '20px', fontFamily: 'Arial, Helvetica, sans-serif'}}>
                    After spending alot of time learning basic programming logic, I made the life changing decision to enroll into the full stack Coding Boot Camp at the University of Minnesota.
                    There, everything came together for me and clicked. I learned all around software development, everything from the front end UI, backend functionality, databases, and serverside development.
                    I love to learn and won't stop until the job is done. Programming will forever be a major part of my life and I wouldn't have it any other way! 
                    </p>
                    </Cell>

                    </Grid>
            </div>
        )
    }
}
 export default About;
