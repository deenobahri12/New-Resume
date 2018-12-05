import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class About extends Component {
    render() {
        return(
            <div>
                <Grid>
                    <Cell col={4}>
                    <div style={{textAlign: 'center'}}>
                    <img src="https://mail.google.com/mail/u/0?ui=2&ik=30dc591b7e&attid=0.1&permmsgid=msg-f:1617626318202872626&th=1672f690dbce2332&view=att&disp=safe"
                    alt="avatar"
                    style={{height: '550px'}}
                     /> 
                    </div>
                    </Cell>

                    <Cell className="resume-right-col" col={8}>
                    <h1 style={{fontFamily: 'Anton'}}>About Me</h1>

                    <hr style={{borderTop: '3px solid #e22947'}} />
                    
                    <p style={{fontSize: '20px', fontFamily: 'oxygen'}}>
                        Hello, my name is Deeno Bahri. I am Mnneapolis, Minnesota born and raised. I come from an intense and heavily diciplined fitness background. It all started
                        when I got a job as a front desk staff member at Los Campeones Gym, located in south Minneapolis. Soon after working as a front desk staff member, I 
                        gradually transitioned into a personal trainer/strength coach. Not long after, I became a business owner for the first time, and created my own training business called "Optimal Health & Performance" as a personal trainer 
                         and powerlifting coach. i currenly still own this business and i continue to train clients everyday because it is another huge passion of mine.
                    </p>

                    <p style={{fontSize: '20px', fontFamily: 'oxygen'}}>
                    All while pursuing my passion as a personal trainer and strength coach, I finally made the biggest decision of my life thus far, that is to dive deep into programming and software development fundamentals in 2016.
                    I always had a huge passion for technology and electronics. A close friend of mine introduced me to programming and I was hooked instantly. Once I was exposed to programming, I never considered making it an actual career for myself. 
                    But after hearing about other successful developer stories, and through words of encouragement, I made the decision to pursue the field of software and become a software engineer.
                    The first language I learned basic programming with was Python. I got comfortable with all the basic concepts in programming such as variables, while loops, for-loops,
                    logical operators, etc.. all in my first year of serious studying.
                    </p>
                    <p style={{fontSize: '20px', fontFamily: 'oxygen'}}>
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
