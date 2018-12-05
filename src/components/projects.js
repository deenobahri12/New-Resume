import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton, Row } from 'react-mdl';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0};
        
    }

    toggleCategories(){
    //Tab Projects content
    if(this.state.activeTab === 0) {
            return(
                <div className="projects-grid"> 
                {/*Project #1*/ }
               <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
               <CardTitle style={{color: 'black', height: '176px', background:
               'url(https://cdn.hipwallpaper.com/i/42/90/abKXHM.jpeg) center / cover'}} >Tourist Express</CardTitle>
               <cardText style={{paddingTop: 10, fontFamily: 'oxygen'}}>
                Enter a place or activity into the search bar to show popular tourism results for that place or activity.
                You can search by city, state, country, or activity.
                Click on the links to see additional information or extended weather forcasts for each result.
               </cardText>
               <hr style={{borderTop: '3px solid blue'}}/>
               <CardActions border>
               <Button className="Btn" href="https://github.com/deenobahri12/ClassProject1" target="_blank" colored>Github</Button>
               <Button className="Btn" href="https://tourist-express.herokuapp.com/index.html" target="_blank" colored>Site</Button>
               </CardActions>
              <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />  
              </CardMenu>
               </Card>

               {/* project 2*/}
               <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
               <CardTitle style={{color: '#fff', height: '176px', background:
               'url(http://www.sis-pik.com/wp-content/uploads/2017/03/debate.jpg) center / cover'}} >Settle It!</CardTitle>
               <cardText style={{paddingTop: 10, fontFamily: 'oxygen'}}>
               Settle It! is a web application where you post an issue and describe why you support or do not support your issue. 
               Then you invite a user of the app to respond or vote on your issue. Other users can vote for one side that they support.  
               </cardText>
               <hr style={{borderTop: '3px solid blue'}}/>
               <CardActions border>
               <Button className="Btn" href="https://github.com/deenobahri12/Settle-It" target="_blank" colored>Github</Button>
               <Button className="Btn" href="https://settle-it.herokuapp.com/" target="_blank" colored>Site</Button>
               </CardActions>
              <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />  
              </CardMenu>
               </Card>

              {/* project 3*/}
              <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
               <CardTitle style={{color: '#fff', height: '176px', background:
               'url(https://wallpapertag.com/wallpaper/full/f/6/c/841567-library-background-images-1920x1080-hd-for-mobile.jpg) center / cover'}} >Find That Book</CardTitle>
               <cardText style={{paddingTop: 10, fontFamily: 'oxygen'}}>
               Find That Book! In this application, you'll be able to find the book you seek with the help of the google books api.
               Save the books you're interested in and delete as you go through your list.
               </cardText>
               <hr style={{borderTop: '3px solid blue'}}/>
               <CardActions border>
               <Button className="Btn" href="https://github.com/deenobahri12/book-finder" target="_blank" colored>Github</Button>
               <Button className="Btn" href="https://thawing-island-97264.herokuapp.com/" target="_blank" colored>Site</Button>
               </CardActions>
              <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />  
              </CardMenu>
               </Card>
               </div>
            )

             } 
             else if(this.state.activeTab === 1) {
                     //Tab Mini apps content
                return(
                    <div className="projects-grid"> 
                    {/* project 1*/}
                   <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
               <CardTitle style={{color: '#fff', height: '176px', background:
               'url(https://medialliance.cc/wp-content/uploads/2017/01/people-holding-hand-with-sunset-as-a-background.jpg) center / cover'}} >Friend Finder</CardTitle>
               <cardText style={{paddingTop: 10, fontFamily: 'oxygen'}}>
               Find a friend! Through this Friend finder app, you can find a friend best suited for you through capability. 
               Take the survey provided with this application and we'll generate a friend for you with similar likes and interests. 
               </cardText>
               <hr style={{borderTop: '3px solid blue'}}/>
               <CardActions border>
               <Button className="Btn" href="https://github.com/deenobahri12/Friend-Finder" target="_blank" colored>Github</Button>
               <Button className="Btn" href="https://immense-dawn-17692.herokuapp.com/" target="_blank" colored>Site</Button>
               </CardActions>
              <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />  
              </CardMenu>
             
               {/* project 2*/}
               </Card>
               <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
               <CardTitle style={{color: '#fff', height: '176px', background:
               'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5FWkGf5j_CTapS21ix1bz5pTzv7QWhCktofSeMJ4706A_7MJC) center / cover'}} >DBZ Click Game</CardTitle>
               <cardText style={{paddingTop: 10, fontFamily: 'oxygen'}}>
               Click on a character and rack up points to acheive a highscore. Each click will shuffle around the
               character cards and make it harder to track. Don't click on a character more than once or else
               you lose the game. 
               </cardText>
               <hr style={{borderTop: '3px solid blue'}}/>
               <CardActions border>
               <Button className="Btn" href="https://github.com/deenobahri12/React-Click-app" target="_blank" colored>Github</Button>
               <Button className="Btn" href="https://deenobahri12.github.io/React-Click-app/" target="_blank"colored>Site</Button>
               </CardActions>
              <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />  
              </CardMenu>
               </Card>
              
               {/* project 4*/}
               <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
               <CardTitle style={{color: '#fff', height: '176px', background:
               'url(https://cdn.hipwallpaper.com/i/59/48/TOyQbM.jpg) center / cover'}} >Train Station</CardTitle>
               <cardText style={{paddingTop: 10, fontFamily: 'oxygen'}}>
               Train Station simulator. Enter Train data and this application will give you information on the frequency,
               next arrival time, and how many minutes away the next train is from you.
               </cardText>
               <hr style={{borderTop: '3px solid blue'}}/>
               <CardActions border>
               <Button className="Btn" href="https://github.com/deenobahri12/Train-Station" target="_blank" colored>Github</Button>
               <Button className="Btn" href="https://deenobahri12.github.io/Train-Station/index.html" target="_blank" colored>Site</Button>
               </CardActions>
              <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />  
              </CardMenu>
               </Card>

                {/* project 4*/}
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
               <CardTitle style={{color: '#fff', height: '176px', background:
               'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYU6YVYnasUE396ljcyThyJBWjNGboaEpEeY3V04RnDHJTdrWrWg) center / cover'}} >Movie Master</CardTitle>
               <cardText style={{paddingTop: 10, fontFamily: 'oxygen'}}>
               Find your favorite movie! Movie Master, a simple application where you can Search your favorite movie by title and get all the information you need.
               </cardText>
               <hr style={{borderTop: '3px solid blue'}}/>
               <CardActions border>
               <Button className="Btn" href="https://github.com/deenobahri12/Movie-search" target="_blank" colored>Github</Button>
               <Button className="Btn" href=" https://deenobahri12.github.io/Movie-search/" target="_blank" colored>Site</Button>
               </CardActions>
              <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />  
              </CardMenu>
               </Card>
               </div>
              
            )                
                }
                
            /*
            else if(this.state.activeTab === 2) {
                return(
                   <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
               <CardTitle style={{color: '#fff', height: '176px', background:
               'url(https://cdn-images-1.medium.com/max/2000/1*HSisLuifMO6KbLfPOKtLow.jpeg) center / cover'}} >Project #3</CardTitle>
               <cardText>
               Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.               </cardText>
               <CardActions border>
               <Button colored>Github</Button>
               <Button colored>Site</Button>
               <Button colored>Live Demo</Button>
               </CardActions>
              <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />  
              </CardMenu>
               </Card>
               
                )
                }
           
            else if(this.state.activeTab === 3) {
                return(
                  <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
               <CardTitle style={{color: '#fff', height: '176px', background:
               'url(https://cdn-images-1.medium.com/max/2000/1*HSisLuifMO6KbLfPOKtLow.jpeg) center / cover'}} >Project #4</CardTitle>
               <cardText>
               Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.               </cardText>
               <CardActions border>
               <Button colored>Github</Button>
               <Button colored>Site</Button>
               <Button colored>Live Demo</Button>
               </CardActions>
              <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />  
              </CardMenu>
               </Card>                )
            }*/
          }


    render() {
        return(
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange ={(tabid) => this.setState({ activeTab: tabid })} ripple> 
                     <Tab style={{fontSize: '25px'}}>Projects</Tab>
                     <Tab style={{fontSize: '25px'}}>Mini Apps</Tab>
                  {/*<Tab>Pets App</Tab>
                     <Tab>ClickGame</Tab>*/}
                </Tabs>

                <Grid>
                <Cell col={12}>
                <div className="content">{this.toggleCategories()}</div>
                </Cell>
                </Grid>
            </div>
        )
    }
}
 export default Projects;