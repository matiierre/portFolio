import React, { Component } from 'react';
import { Tab, Tabs, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText } from 'react-mdl';


class Projects extends Component{

    constructor (props){
        super(props);
        this.state = {activeTab:0};
    }
    
    toggleCategories(){
        if (this.state.activeTab === 0 ){
            return(
                <div className="project-grid">
                    <div className="card-container">
                        <Card shadow={5} style={{minWidth:'450', margin: 'auto'}}>
                            <CardTitle style={{color:'black', height:'176px', background:'url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/400px-React-icon.svg.png) center / cover'}}>React Projects #1</CardTitle>
                            <CardText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium,     quisquam vel, nisi ex delectus dignissimos libero dolorem accusamus autem eius  maiores! Facilis sed suscipit nesciunt. Fuga dolore, facere eveniet eius illo    aspernatur voluptates, ipsa nobis facilis culpa esse veritatis incidunt?</ CardText>
                            <CardActions border >
                                <Button colored>Github</Button>
                                <Button colored>CodePen</Button>
                                <Button colored>LivePen</Button>
                            </CardActions>
                            <CardMenu style={{color:'#fff'}}>
                                <IconButton name="share"/>
                            </CardMenu>
                        </Card>
                    </div>
                    <div className="card-container">
                        <Card shadow={5} style={{minWidth:'450', margin: 'auto'}}>
                            <CardTitle style={{color:'black', height:'176px', background:'url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/400px-React-icon.svg.png) center / cover'}}>React Projects #2</CardTitle>
                            <CardText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium,     quisquam vel, nisi ex delectus dignissimos libero dolorem accusamus autem eius  maiores! Facilis sed suscipit nesciunt. Fuga dolore, facere eveniet eius illo    aspernatur voluptates, ipsa nobis facilis culpa esse veritatis incidunt?</ CardText>
                            <CardActions border >
                                <Button colored>Github</Button>
                                <Button colored>CodePen</Button>
                                <Button colored>LivePen</Button>
                            </CardActions>
                            <CardMenu style={{color:'#fff'}}>
                                <IconButton name="share"/>
                            </CardMenu>
                        </Card>
                    </div>
                    <div className="card-container">
                        <Card shadow={5} style={{minWidth:'450', margin: 'auto'}}>
                            <CardTitle style={{color:'black', height:'176px', background:'url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/400px-React-icon.svg.png) center / cover'}}>React Projects #3</CardTitle>
                            <CardText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium,     quisquam vel, nisi ex delectus dignissimos libero dolorem accusamus autem eius  maiores! Facilis sed suscipit nesciunt. Fuga dolore, facere eveniet eius illo    aspernatur voluptates, ipsa nobis facilis culpa esse veritatis incidunt?</ CardText>
                            <CardActions border >
                                <Button colored>Github</Button>
                                <Button colored>CodePen</Button>
                                <Button colored>LivePen</Button>
                            </CardActions>
                            <CardMenu style={{color:'#fff'}}>
                                <IconButton name="share"/>
                            </CardMenu>
                        </Card>
                    </div>

                   
                </div>
                
                
            )
        }else if(this.state.activeTab ===1){
            return(
                <div><h1>This is Vue</h1></div>
            )
        }else if(this.state.activeTab ===2){
            return(
                <div><h1>This is Laravel</h1></div>
            )
        }else if(this.state.activeTab ===3){
            return(
                <div><h1>This is Python</h1></div>
            )
        }
    }
    


    render() {
        return(
        <div className="category-tabs">
            <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})} ripple>
                <Tab>React</Tab>
                <Tab>Vue</Tab>
                <Tab>Laravel</Tab>
                <Tab>Python</Tab>
            </Tabs>
            <section className="projects-grid">
                <Grid >
                    <Cell col={12}>
                        <div className="content">
                            {this.toggleCategories()}
                        </div>
                    </Cell>
                </Grid>
                
            </section>
        </div>
        )
    }
}

export default Projects;