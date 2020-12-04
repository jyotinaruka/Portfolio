import React from 'react'
import { Segment, Header, Grid, GridRow, Embed } from 'semantic-ui-react';
import videoMuzic from '../projects-video/muzic.webm'
import videoPycommerce from '../projects-video/pycommerce.webm'
import videoFriendbook from '../projects-video/friendbook.webm'

const Projects = () => {
    return (
        <div className="projects-bg p-1">
            <Header as='h1' textAlign='center' size='huge' inverted>Projects</Header>
            <Grid stackable columns={2}>
                <Grid.Column>
                    <Header as='h2' attached='top'>Muzic</Header>
                    <Segment attached>
                        <p>Muzic is a react web application which uses Spotify APIs to fetch songs,
                        artist or album details and play your chosen track.
                            User can search songs and artrists by name</p>
                    </Segment>
                    <video controls autoPlay="true" loop width="100%">
                        <source src={videoMuzic} type="video/webm" />
                            Sorry, your browser doesn't support embedded videos.
                        </video>
                </Grid.Column>


                <Grid.Column>
                    <Header as='h2' attached='top'>Friendbook</Header>
                    <Segment attached>
                        <p>Friendbook is a social application¬ developed in Java stack which features wall posts,
                             comments, events and user profiles. User can Add and Like the comments </p>
                    </Segment>
                    <video controls autoPlay="true" loop width="100%">
                        <source src={videoFriendbook} type="video/webm" />
                            Sorry, your browser doesn't support embedded videos.
                        </video>

                </Grid.Column>

                <Grid.Column>
                    <Header as='h2' attached='top'>Pycommerce</Header>
                    <Segment attached>
                        <p>
                            Pycommerce is an ecommerce web application developed in Python which features product listing, search, cart and administration portal to manage new products, inventory and fulfill orders.
                        </p>
                    </Segment>
                    <video controls autoPlay="true" loop width="100%">
                        <source src={videoPycommerce} type="video/webm" />
                        Sorry, your browser doesn't support embedded videos.
                    </video>
                </Grid.Column>
            </Grid>
        </div>
    )
}

export default Projects
