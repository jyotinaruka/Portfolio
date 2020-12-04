import React, { useState } from 'react'
import {
    Button,
    Image,
    Transition,
    Divider,
    Container,
    Grid,
    Segment,
    TransitionablePortal,
    Header
} from 'semantic-ui-react'
import jyoti3 from '../jyoti3.jpg'



const About = () => {


    return (
        <div className="about-bg">
            <Container>
                <Segment className="about-align" >
                    <Grid columns={2}>
                        <Grid.Column width={6} verticalAlign='middle'>
                            <p><Image size='medium' src={jyoti3} /></p>
                        </Grid.Column>

                        <Grid.Column width={10} verticalAlign='top'>
                            <Header size='huge' ><u><i>About Me</i></u></Header>
                            <p className="about-me"><i>I am full stack developer with a background of Inside Sales in different domains,
                            who fell in love with coding! I have serious passion for UI effects, animations and creating intuitive,
                            dynamic user experiences.</i></p>
                            <p className="about-me"><i>Currently seeking a full time position in
                            Front-end developer to work with
                            dedicated team to provide quality products and services.
                             </i></p>


                        </Grid.Column>
                    </Grid>
                </Segment>

                <Segment className="about-align " inverted>
                    <Grid>
                        <Grid.Column width={10} verticalAlign='top'>
                            <Button className="skills" inverted color='violet'><h1>Skills</h1></Button>
                        </Grid.Column>
                    </Grid>

                    <Grid>
                        <Grid.Row>
                            <Grid.Column width={8}>
                                <Header size='huge' inverted><u>Languages</u></Header>
                                <Button className="skills" size="medium" inverted color='yellow' icon="js" content="JavaScript" />
                                <Button className="skills" size="medium" inverted color='blue' icon="python" content="Python" />
                                <Button className="skills" size="medium" inverted color='blue' content="Java" />
                            </Grid.Column>


                            <Grid.Column width={8}>
                                <Header size='huge' inverted><u>Frameworks</u></Header>
                                <Button className="skills" size="medium" inverted color='teal' icon="react" content="React" />
                                <Button className="skills" size="medium" inverted color='green' content="Django" />
                                <Button className="skills" size="medium" inverted color='black' icon="flask" content="Flask" />
                                <Button className="skills" size="medium" inverted color='olive' icon="leaf" content="Spring" />
                                <Button className="skills" size="medium" inverted color='orange' content="Express" />
                                <Button className="skills" size="medium" inverted color='green' icon="node js" content="Node.js" />
                            </Grid.Column>
                        </Grid.Row>

                        <Grid.Row>
                            <Grid.Column width={8}>
                                <Header size='huge' inverted><u>Database</u></Header>
                                <Button className="skills" size="medium" inverted color='green' icon="database" content="MongoDB" />
                                <Button className="skills" size="medium" inverted color='blue' icon="database" content="MySql" />


                            </Grid.Column>
                            <Grid.Column width={8}>
                                <Header size='huge' inverted><u>Other</u></Header>
                                <Button className="skills" size="medium" inverted color='orange' icon="html5" content="HTML5" />
                                <Button className="skills" size="medium" inverted color='blue' icon="css3" content="CSS3" />
                                <Button className="skills" size="medium" inverted color='teal' content="Semantic UI" />
                                <Button className="skills" size="medium" inverted color='blue' content="Bootstrap" />

                            </Grid.Column>
                        </Grid.Row>
                    </Grid>


                </Segment>




                <Segment className="about-align" inverted>
                    <Grid>
                        <Grid.Column width={10} verticalAlign='top'>
                            <Button className="skills" inverted color='violet'><h2>Github Contribution</h2></Button>
                            <img src="http://ghchart.rshah.org/jyotinaruka" alt="2016rshah's Github chart" />
                        </Grid.Column>
                    </Grid>
                </Segment>
              </Container>
        </div>
    )
}

export default About
