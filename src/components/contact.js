import React, { Component } from 'react';
import {Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl';

class Contact extends Component{
    render() {
        return(
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Matias Rodriguez</h2>
                        <img src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png" alt="avatar" style={{height:'250px'}}/>
                        <p style={{width:'75%' ,margin:'auto', paddingTop: '1em'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi commodi quidem perspiciatis expedita nulla! Necessitatibus exercitationem quis neque nesciunt illum. Consequuntur iure veniam sit labore, ipsum assumenda! Sapiente, placeat! Non quia enim expedita adipisci fuga reprehenderit inventore sed corrupti quibusdam, necessitatibus nobis deleniti ab distinctio repellat facilis maxime! Commodi quo eaque quibusdam autem sit necessitatibus </p>
                    </Cell>
                    <Cell col={6}>
                       <h2>Contact Me</h2>
                       <hr/>
                       <div className="contact-list">
                        <List>
                            <ListItem>
                                <ListItemContent style={{fontSize:'25px', fontFamily:'Anton'}}>
                                    <i className='fa fa-phone-square' aria-hidden='true'/>
                                    (123)-456-7890
                                </ListItemContent>
                            </ListItem>
                            <ListItem>
                                <ListItemContent style={{fontSize:'25px', fontFamily:'Anton'}}>
                                    <i className='fa fa-fax' aria-hidden='true'/>
                                    (123)-456-7890
                                </ListItemContent>
                            </ListItem>
                            <ListItem>
                                <ListItemContent style={{fontSize:'25px', fontFamily:'Anton'}}>
                                    <i className='fa fa-envelope' aria-hidden='true'/>
                                    example@matierre.com
                                </ListItemContent>
                            </ListItem>
                            <ListItem>
                                <ListItemContent style={{fontSize:'25px', fontFamily:'Anton'}}>
                                    <i className='fa fa-skype' aria-hidden='true'/>
                                    skapeid@matierre.com
                                </ListItemContent>
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