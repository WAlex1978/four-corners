import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { InputGroup, InputGroupAddon, FormInput, Button} from "shards-react";
import { Wrapper, Text, Flex } from '../../../shared/styled-components';
import { getComments, postComment } from '../../../../services/comments';
import CommentsList from './CommentsList';
import Spinner from '../../../shared/Spinner';

class Comments extends Component {
    state = {
        body: '',
        comments: this.props.comments,
        avatars: this.props.avatars,
    }

    onChange = (e) => {
        this.setState({body: e.target.value});
    }

    onSubmit = async (e) => {
        e.preventDefault();

        // If comment is not an empty string
        if (this.state.body !== '') {
            await postComment(this.props.id, this.props.token, this.state.body);
        }

        const data = await getComments(this.props.id);

        if (data && data.data) {
            this.setState({ body: '', comments: data.data.comments, avatars: data.data.avatars })
        }
    }

    render() { 
        return (
            <Wrapper width="95%" style={{marginTop: "35px"}}>
                {this.props.token ? (
                    <Fragment>
                        <Text>Comments</Text>
                        <form onSubmit={this.onSubmit}>
                            <InputGroup>
                                <FormInput value={this.state.body} onChange={this.onChange} placeholder="Leave a Comment" />
                                <InputGroupAddon type="append">
                                    <Button onClick={this.onSubmit}>Send</Button>
                                </InputGroupAddon>
                            </InputGroup>
                        </form>
                    </Fragment>
                ) : <Link to="/login" style={{textDecoration: "none"}}>
                        <Text size="1.1rem" align="center">Log in to leave a comment</Text>
                    </Link> }

                {this.state.comments ? 
                    <CommentsList comments={this.state.comments} avatars={this.state.avatars} /> : 
                <Flex><Spinner /></Flex> }
            </Wrapper>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        token: state.token
    }
}
 
export default connect (mapStateToProps) (Comments);