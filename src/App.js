import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content, Tab } from 'react-mdl'
import Main from './components/main';
import { Link } from 'react-router-dom';

class App extends Component { 
  render() {
      return(
        <div className="demo-big-content">
    <Layout>
      <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">
        Home
      </Link>} scroll>   
            <Navigation>
                <Link to="/resume"><bold className="link">Resume</bold></Link>
                <Link to="/aboutme"><bold className="link">About Me</bold></Link>
                <Link to="/projects"><bold className="link">Projects</bold></Link>
                <Link to="/contact"><bold className="link">Contact</bold></Link>
            </Navigation>
        </Header>
        
        <Drawer title={<Link style={{textDecoration: 'none', color: 'black'}} to="/">
        Home
      </Link>}>
            <Navigation>
                <Link to="/resume"><bold className="link2">Resume</bold></Link>
                <Link to="/aboutme"><bold className="link2">About Me</bold></Link>
                <Link to="/projects"><bold className="link2">Projects</bold></Link>
                <Link to="/contact"><bold className="link2">Contact</bold></Link>
                <Tab style={{fontSize: 20}} href="https://drive.google.com/open?id=1KMN73f9VZaWWUh3hTkK5W2TOhLS719au" target="_blank">Resume (PDF)</Tab>
           </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>
    );
  }
}

export default App;
