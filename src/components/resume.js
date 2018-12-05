import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl'
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import mainLogo from'./Image-1.PNG';


class Resume extends Component {
    render() {
        return(
            <div>
            <Grid>
                <Cell col={4}>
                    <div style={{textAlign: 'center'}}>
                    <img src={mainLogo}
                    alt="avatar"
                    style={{height: '300px'}}
                    />
                    </div>
                <h2 style={{paddingTop: '2em'}}>Deeno Bahri</h2>
                <h4 style={{color: 'grey'}}>Programmer</h4>
        
                <hr style={{borderTop: '3px solid black', width: '50%'}}/>        
                <p style={{fontSize: 21, fontFamily: 'oxygen'}}>
                Hello, my name is Deeno. I'm a Full stack Software Developer in the Twin Cities Metro area.
                I love to learn and coding is my passion.
                </p>
                 
                 <hr style={{borderTop: '3px solid black', width: '50%'}}/>
                <h4><i className="fa fa-map-pin res" aria-hidden="true"/>Location</h4>
                 <p style={{fontSize: 21, fontFamily: 'oxygen'}}>Minneapolis, Minnesota</p>
                
                <h4><i className="fa fa-phone-square res" aria-hidden="true"/>Phone</h4>                
                 <p style={{fontSize: 21}}>612 747 9100</p>
                
                <h4><i className="fa fa-envelope res" aria-hidden="true"/>Email</h4>
                 <p style={{fontSize: 21, fontFamily: 'oxygen'}}>deenobahri12@gmail.com</p>
               
                <h4><i className="fa fa-file res" aria-hidden="true"/>Resume (PDF)</h4>
                 <a style={{ backgroundColor: "", color: "green", fontSize: 20}} href="https://drive.google.com/open?id=1eBjeK2K_2b-6ve8cUnxwJZOJfKLJkn6o" target="_blank"><bold>RESUME</bold></a>
                <hr style={{borderTop: '3px solid black', width: '50%'}}/>
                </Cell>

                <Cell className="resume-right-col" col={8}>
              
               <h2>Skills</h2>
                <Skills 
                skill='JavaScript'
                skills={100}
                />
                <Skills 
                skill='HTML/CSS'
                skills={100}
                />
                <Skills 
                skill='MERN Stack'
                skills={100}
                />
                 <Skills 
                skill='Front End UI'
                skills={100}
                />
                <Skills 
                skill='Back End functionality'
                skills={100}
                />
                <Skills 
                skill='APIs'
                skills={100}
                />
                 <Skills 
                skill='ServerSide Development'
                skills={100}
                />
                <Skills 
                skill='Databases'
                skills={100}
                />
                <hr style={{borderTop: '3px solid #833fb2'}}/>
                
                <h2>Experience</h2>
                <Experience 
                startYear='2016'
                endYear='2018'
                jobName="Software Development"
                jobDescription="Began with python for 8 months. After that time spent with python, I switched gears to  
                javaScript and the Frameworks/Libraries surrounding JavaScript"
                />
                <hr style={{borderTop: '3px solid #833fb2'}} />
                <h2>Education</h2>
                <Education 
            
                endYear='2018'
                schoolName="University of Minnesota"
                schoolDescription="Full Stack Coding Boot Camp"
                />
                </Cell>

            </Grid>
            </div>
        )
    }
}
 export default Resume;