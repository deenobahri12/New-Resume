import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import mainLogo from'./Image-1.PNG';


class Contact extends Component {
    render() {
        return(
            <div className="contact-body">
            <Grid className="contact-grid">
            <Cell col={6}>
            <h2 style={{fontFamily: 'Arial black'}}>Deeno Bahri</h2>
            <img 
            src={mainLogo}
           alt="avatar"
           style={{height: '300px'}}
           />
           <p style={{width: '75%', margin: 'auto', paddingTop: '1em', fontFamily: 'Arial, Helvetica, sans-serif'}}>
           Hi there, thank you for taking the time to look over my portfolio! 
           If you would like to contact me, feel free to use any of the contact sources I provided here.
           </p>
            </Cell>
            <Cell col={6}>
            <h2 style={{fontFamily: 'Arial black'}}>Contact Me</h2>
            <hr/>
            <div className="contact-list">
         <List>
             <ListItem>
                 <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                 <i className="fa fa-phone-square con" aria-hidden="true"/>
                 (612) 747-9100</ListItemContent>
            </ListItem>
          
            <ListItem>
                 <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                 <i className="fa fa-envelope con" aria-hidden="true"/>
                 deenobahri12@gmail.com</ListItemContent>
            </ListItem>
           
            <ListItem>
                 <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                 <i className="fa fa-skype con" aria-hidden="true"/>
                 SkypeID: 5fc191e9f0eefb60</ListItemContent>
            </ListItem>
        </List>
          </div>
            
            </Cell>
            </Grid>
            </div>
        )
    }
}
 export default Contact;