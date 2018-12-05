import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Contact extends Component {
    render() {
        return(
            <div className="contact-body">
            <Grid className="contact-grid">
            <Cell col={6}>\
            <h2>Deeno Bahri</h2>
            <img 
            src="https://mail.google.com/mail/u/0?ui=2&ik=30dc591b7e&attid=0.1&permmsgid=msg-f:1617626318202872626&th=1672f690dbce2332&view=att&disp=safe"
           alt="avatar"
           style={{height: '300px'}}
           />
           <p style={{width: '75%', margin: 'auto', paddingTop: '1em'}}>
           Hi there, thank you for taking the time to look over my portfolio! 
           If you would like to contact me, feel free to use any of the contact sources I provided here.
           </p>
            </Cell>
            <Cell col={6}>
            <h2>Contact Me</h2>
            <hr/>
            <div className="contact-list">
         <List>
             <ListItem>
                 <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                 <i className="fa fa-phone-square" aria-hidden="true"/>
                 (612) 747-9100</ListItemContent>
            </ListItem>
          
            <ListItem>
                 <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                 <i className="fa fa-envelope" aria-hidden="true"/>
                 deenobahri12@gmail.com</ListItemContent>
            </ListItem>
           
            <ListItem>
                 <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                 <i className="fa fa-skype" aria-hidden="true"/>
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