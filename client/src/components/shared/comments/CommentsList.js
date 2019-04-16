import React, { Fragment } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Fade from '@material-ui/core/Fade';

const CommentsList = (props) => {
    return (
        <List>
            {props.comments.map((comment, i) => (
                <Fragment key={i}>
                    {i !== 0 ? <Divider/> : null}
                    <Fade in>
                        <ListItem>
                            <ListItemText>{comment.body}</ListItemText>
                        </ListItem>
                    </Fade>
                </Fragment>
            ))}
        </List>
    )
}

export default CommentsList