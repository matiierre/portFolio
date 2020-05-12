import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';

class LandingPage extends Component{
    render() {
        return(
            <div style={{width:'100%', margin:'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img 
                            src="https://matierre.com/img/matierre2.jpg"
                            alt="avatar"
                            className="avatar-img">

                        </img>
                        <div className="banner-text">
                            <h1>Full Stack Web Developer</h1>
                            <hr/>
                            <p>HTML/CSS | Bootstrap | Javascript | React | Vue | PHP | NetCore | NodeJs | Sql/MySql</p>
                            
                            <div className="social-links">
                                <a href="https://www.linkedin.com/in/matias-rodriguez-597363190/" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-linkedin-square"  aria-hidden="true"/>
                                </a>
                                <a href="https://www.instagram.com/matiierre/" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-instagram" aria-hidden="true"/>
                                </a>
                                <a href="https://www.twitter.com/matiierre/" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-twitter" aria-hidden="true"/>
                                </a>
                                <a href="https://www.github.com/matiierre/" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-github" aria-hidden="true"/>
                                </a>
                            </div>
                                

                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default LandingPage;