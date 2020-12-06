import React from 'react'
import { Segment, Header, Grid, GridRow, Embed, Card, Label, Icon } from 'semantic-ui-react';
import Codepen from "react-codepen-embed";
import videoMuzic from '../projects-video/muzic.webm'
import videoPycommerce from '../projects-video/pycommerce.webm'
import videoFriendbook from '../projects-video/friendbook.webm'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBootstrap, faJava, faStripeS } from '@fortawesome/free-brands-svg-icons';

const Projects = () => {
    return (
        <section id="projects" className="projects-bg p-1 m-nav">
            <Header as={'h2'} textAlign='center'>These are some of my projects</Header>
            <Grid stackable stretched columns={2}>
                <Grid.Column>
                    <Card>
                        <Card.Content>
                            <Card.Header>Muzic</Card.Header>
                            <Card.Description>
                                Muzic is a react web application which uses Spotify APIs to fetch songs,
                                artist or album details and play your chosen track. User can search songs and artists by name.
                            </Card.Description>
                            <Card.Meta className="my-1">
                            </Card.Meta>
                        </Card.Content>
                        <video controls autoPlay="true" loop width="100%">
                            <source src={videoMuzic} type="video/webm" />
                            Sorry, your browser doesn't support embedded videos.
                        </video>
                        <Card.Content extra>
                            <Label circular size='large' className="px-1">
                                <Icon name='react' /> React
                            </Label>
                            <Label circular size='large' className="px-1">
                                <Icon as={FontAwesomeIcon} icon={faStripeS} /> Semantic UI
                            </Label>
                        </Card.Content>
                    </Card>
                </Grid.Column>
                <Grid.Column>
                    <Card>
                        <Card.Content>
                            <Card.Header>Friendbook</Card.Header>
                            <Card.Description>
                                Friendbook is a social application¬ developed in Java stack which features wall posts,
                                comments, events and user profiles. User can Add and Like the comments.
                            </Card.Description>
                            <Card.Meta className="my-1">
                            </Card.Meta>
                        </Card.Content>
                        <video controls autoPlay="true" loop width="100%">
                            <source src={videoFriendbook} type="video/webm" />
                            Sorry, your browser doesn't support embedded videos.
                        </video>
                        <Card.Content extra>
                            <Label circular size='large' className="px-1">
                                <Icon as={FontAwesomeIcon} icon={faJava} /> Java
                            </Label>
                            <Label circular size='large' className="px-1">
                                <Icon name='leaf' /> Spring
                            </Label>
                            <Label circular size='large' className="px-1">
                                <Icon name='database' /> MySql
                            </Label>
                            <Label circular size='large' className="px-1">
                                <Icon as={FontAwesomeIcon} icon={faBootstrap} /> Bootstrap
                            </Label>
                        </Card.Content>
                    </Card>
                </Grid.Column>
                <Grid.Column>
                    <Card>
                        <Card.Content>
                            <Card.Header>Pycommerce</Card.Header>
                            <Card.Description>
                                Pycommerce is an ecommerce web application developed in Python which features product listing, search,
                                cart and administration portal to manage new products, inventory and fulfill orders.
                            </Card.Description>
                            <Card.Meta className="my-1">
                            </Card.Meta>
                        </Card.Content>
                        <video controls autoPlay="true" loop width="100%">
                            <source src={videoPycommerce} type="video/webm" />
                            Sorry, your browser doesn't support embedded videos.
                        </video>
                        <Card.Content extra>
                            <Label circular size='large' className="px-1">
                                <Icon name='python' /> Python
                            </Label>
                            <Label circular size='large' className="px-1">
                                Django
                            </Label>
                            <Label circular size='large' className="px-1">
                                <Icon name='database' /> SqlLite
                            </Label>
                            <Label circular size='large' className="px-1">
                                <Icon as={FontAwesomeIcon} icon={faBootstrap} /> Bootstrap
                            </Label>
                        </Card.Content>
                    </Card>
                </Grid.Column>
                <Grid.Column>
                    <Card>
                        <Card.Content>
                            <Card.Header>Survey Form</Card.Header>
                            <Card.Description>
                                Single page dummy survey form built in pure html and css3. Part of
                                freecodecamp.org Responsive web design certification.
                            </Card.Description>
                            <Card.Meta className="my-1">
                            </Card.Meta>
                        </Card.Content>
                        <Codepen hash="qBOLRqp" user="jyotinaruka" defaultTab="result" />
                        <Card.Content extra>
                            <Label circular size='large' className="px-1">
                                <Icon name='html5' /> HTML5
                            </Label>
                            <Label circular size='large' className="px-1">
                                <Icon name='css3' /> CSS3
                            </Label>
                        </Card.Content>
                    </Card>
                </Grid.Column>
                <Grid.Column>
                    <Card>
                        <Card.Content>
                            <Card.Header>Technical Documentation</Card.Header>
                            <Card.Description>
                                Single page technical documentation page is built in pure html and css3. Part of freecodecamp.org Responsive web design certification.
                            </Card.Description>
                            <Card.Meta className="my-1">
                            </Card.Meta>
                        </Card.Content>
                        <Codepen hash="KKdJQLE" user="jyotinaruka" defaultTab="result" />
                        <Card.Content extra>
                            <Label circular size='large' className="px-1">
                                <Icon name='html5' /> HTML5
                            </Label>
                            <Label circular size='large' className="px-1">
                                <Icon name='css3' /> CSS3
                            </Label>
                        </Card.Content>
                    </Card>
                </Grid.Column>
            </Grid>
        </section>
    )
}

export default Projects
