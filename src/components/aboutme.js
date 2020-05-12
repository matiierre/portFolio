import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';


class AboutMe  extends Component{
    render() {
        return(
            <Grid>
                <Cell col={12}>
                    <div className="aboutMe-div" style={{backgroundColor:'orange', width:'100%', height:'100%'}}>
                        DALE GIL PARATE DE MANOS
                    </div>
                </Cell>
            </Grid>
        )
    }
}

export default AboutMe ;