import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

class Resume extends Component{
    render() {
        return(
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{textAlign:'center'}}>
                            <img className="avatar-img"  src="https://matierre.com/img/matierre2.jpg" 
                            alt="avatar"
                            />
                        </div>
                        <h2 style={{paddingTop:'2em'}}>Matias Rodriguez</h2> 
                        <h4 style={{color:'grey'}}>Programer</h4>
                        <hr style={{borderTop: '3px solid #833fb2', width:'50%'}}/>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero, veniam qui incidunt inventore vitae quos sit adipisci reprehenderit laboriosam molestias laborum odio eos distinctio laudantium ipsum facilis ducimus quaerat unde! Itaque quidem officia doloribus ratione placeat ut blanditiis optio nihil enim quod! Ducimus, accusantium. Possimus nisi nesciunt doloribus eos dolorem odio dicta iure corporis nihil minima velit, nam ad distinctio.
                        </p>   
                        <hr style={{borderTop: '3px solid #833fb2', width:'50%'}}/>
                        <h5>Adress</h5>
                        <p>Av Siempreviva, 5050</p>
                        <h5>Phone</h5>
                        <p>(123) 456-7890</p>
                        <h5>Email</h5>
                        <p>Example@matierre.com</p>
                        <h5>Web</h5>
                        <p>www.matierre.com</p>
                        <hr style={{borderTop: '3px solid #833fb2', width:'50%'}}/>
                    </Cell>
                    <Cell col={8} className="resume-right-col">
                        <h2>Education</h2>
                        <Education
                            startYear={2009}
                            endYear={2014}
                            schoolName="MACNAB BERNAL"
                            schoolDescription= "BACHILLER LABORAL CON SALIDA LABORAL DE AUXILIAR CONTABLE   "

                        />
                        <Education
                            startYear={2015}
                            endYear={2023}
                            schoolName="UTN"
                            schoolDescription= "INGENIERIA EN SISTEMAS DE LA INFORMACION"

                        />
                        <hr style={{borderTop:'3px solid #e22947'}} />

                        <h2>Experience</h2>
                        <Experience 
                             startYear={2015}
                             endYear={2017}
                             jobName="Ejercito Argentino"
                             jobDescription= "Auxiliar administrativo "
                        />
                        <Experience 
                             startYear={2017}
                             endYear={2019}
                             jobName="Ejercito Argentino"
                             jobDescription= "Full Stack Web Developer"
                        />
                        <hr style={{borderTop:'3px solid #e22947'}} />
                        <h2>Skills</h2>
                        <Skills
                            skill="javaScript"
                            progress={88}
                        />
                        <Skills
                            skill="html"
                            progress={75}
                        />
                        <Skills
                            skill="php"
                            progress={90}
                        />
                        <Skills
                            skill="react"
                            progress={25}
                        />

                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;