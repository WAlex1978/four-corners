import React, { Fragment } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Fade from '@material-ui/core/Fade';

const CommentsList = (props) => {
    return (
        <List style={{marginBottom: "50px"}}>
            {props.comments.map((comment, i) => (
                <Fragment key={i}>
                    {i !== 0 ? <Divider/> : null}
                    <Fade in>
                        <ListItem alignItems="flex-start">
                            <ListItemAvatar>
                                <Avatar src="/images/avatar.png"/>
                            </ListItemAvatar>
                            <ListItemText 
                                primary = { <Typography variant="subtitle1">{comment.name}</Typography> }
                                secondary = {
                                    <Fragment>
                                        <Typography paragraph color="textPrimary">{comment.body}</Typography>
                                        <Typography variant="caption">{comment.date}</Typography>
                                    </Fragment>} />
                        </ListItem>
                    </Fade>
                </Fragment>
            ))}
        </List>
    )
}

export default CommentsList