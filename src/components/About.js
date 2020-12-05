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
    Header,
    List,
    Icon,
    Label,
    Card, extra
} from 'semantic-ui-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faJava, faBootstrap, faStripeS } from '@fortawesome/free-brands-svg-icons'
import jyoti3 from '../jyoti3.jpg'



const About = () => {
    return (
        <section id="about" className="about-bg m-nav">
            <Container>
                <Segment className="about-align" >
                    <Grid columns={2}>
                        <Grid.Column width={6} verticalAlign='middle'>
                            <Card
                                image={jyoti3}
                                header='Front End Developer'
                                description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
                            />

                        </Grid.Column>

                        <Grid.Column width={10} verticalAlign='top'>
                            <Header size='huge' className="about-heading" ><u>About Me</u></Header>
                            <p className="about-me" ><i>I am Software developer focusing on front-end technologies.
                            I come from non traditional background,who fell in love with coding!
                            I am passionate to learn and grow myself to make intuitive user experiences.
                            I love simplicity combined with UI effects and animations.
                            </i></p>
                            <p className="about-me">I am organized and adaptive. Due to my self-learning and determination,
                            I completed  bootcamp certification with highest honors (Black belts).
                            I am a team player and eager to learn new technologies.</p>
                            <p className="about-me"><i>Currently I am working as a TA (Teaching Assistant) in Coding Dojo, and
                            I am looking for opportunities in an organization
                            which encourages new learners and provides growth opportunities.
                             </i></p>
                            


                        </Grid.Column>
                    </Grid>
                
                    <Divider />

                    <Grid stackable columns={4} >
                        <Grid.Column textAlign='center'>
                            <Header size='huge'>Languages</Header>
                            <List>
                                <List.Item>
                                    <Label circular size='big' className="px-1">
                                        <Icon name='js' /> JavaScript
                                        </Label>
                                </List.Item>
                                <List.Item>
                                    <Label circular size='big' className="px-1">
                                        <Icon name='python' /> Python
                                        </Label>
                                </List.Item>
                                <List.Item>
                                    <Label circular size='big' className="px-1">
                                        <Icon as={FontAwesomeIcon} icon={faJava} /> Java
                                        </Label>
                                </List.Item>
                            </List>
                        </Grid.Column>


                        <Grid.Column textAlign='center'>
                            <Header size='huge' >Frameworks</Header>
                            <List>

                                <List.Item>
                                    <Label circular size='big' className="px-1">
                                        <Icon name='node' /> Node.js
                                        </Label>
                                </List.Item>

                                <List.Item>
                                    <Label circular size='big' className="px-1">
                                        <Icon name='leaf' /> Spring
                                        </Label>
                                </List.Item>

                                <List.Item>
                                    <Label circular size='big' className="px-1">
                                        <Icon name='express' /> Express
                                        </Label>
                                </List.Item>

                                <List.Item>
                                    <Label circular size='big' className="px-1">
                                        <Icon name='react' /> React
                                        </Label>
                                </List.Item>

                                <List.Item>
                                    <Label circular size='big' className="px-1">
                                        <Icon name='django' /> Django
                                        </Label>
                                </List.Item>

                                <List.Item>
                                    <Label circular size='big' className="px-1">
                                        <Icon name='flask' /> Flask
                                        </Label>
                                </List.Item>





                                
                            </List>
                            </Grid.Column>
                        
                        <Grid.Column textAlign='center'>
                            <Header size='huge' >Database</Header>
                            <List>
                                <List.Item>
                                    <Label circular size='big' className="px-1">
                                        <Icon name='database' /> MongoDB
                                        </Label>
                                </List.Item>

                                <List.Item>
                                    <Label circular size='big' className="px-1">
                                        <Icon name='database' /> SQLite
                                        </Label>
                                </List.Item>

                                <List.Item>
                                    <Label circular size='big' className="px-1">
                                        <Icon name='database' /> MySql
                                        </Label>
                                </List.Item>



                                
                            </List>
                            </Grid.Column>

                        <Grid.Column textAlign='center'>
                            <Header size='huge'>Others</Header>
                            <List>

                                <List.Item>
                                    <Label circular size='big' className="px-1">
                                        <Icon as={FontAwesomeIcon} icon={faStripeS} /> Semantic UI
                                        </Label>
                                </List.Item>

                                <List.Item>
                                    <Label circular size='big' className="px-1">
                                        <Icon as={FontAwesomeIcon} icon={faBootstrap} /> Bootstrap
                                        </Label>
                                </List.Item>

                                <List.Item>
                                    <Label circular size='big' className="px-1">
                                        <Icon name='html5' /> HTML5
                                        </Label>
                                </List.Item>

                                <List.Item>
                                    <Label circular size='big' className="px-1">
                                        <Icon name='css3' /> CSS3
                                        </Label>
                                </List.Item>


                                
                            </List>        
                        </Grid.Column>

                    </Grid>


                </Segment>





              </Container>
        </section>
    )
}

export default About
