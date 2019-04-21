import React, { Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Fade from '@material-ui/core/Fade';

const CommentsList = (props) => {
    const redirect = (name) => {
        props.history.push('/user/' + name);
    }

    return (
        <List style={{marginBottom: "50px"}}>
            {props.comments.map((comment, i) => (
                <Fragment key={i}>
                    {i !== 0 ? <Divider/> : null}
                    <Fade in>
                        <ListItem alignItems="flex-start">
                            <ListItemAvatar style={{cursor: "pointer"}}>
                                <Avatar onClick={() => redirect(comment.name)} src={comment.avatar} />
                            </ListItemAvatar>
                            <ListItemText 
                                primary = {
                                    <Fragment>
                                        <div onClick={() => redirect(comment.name)} style={{cursor: "pointer"}}>
                                            {comment.name}
                                        </div>
                                        <Typography paragraph color="textPrimary">
                                            {comment.body}
                                        </Typography>
                                    </Fragment>}
                                secondary = {<Typography variant="caption">{comment.date}</Typography>} 
                            />
                        </ListItem>
                    </Fade>
                </Fragment>
            ))}
        </List>
    )
}

export default withRouter (CommentsList);