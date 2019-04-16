import React, { Component, Fragment } from 'react';
import { InputGroup, InputGroupAddon, FormInput, Button} from "shards-react";
import { Text, Flex } from '../styled-components';
import { getComments, postComment } from '../../../services/comments';
import CommentsList from './CommentsList';
import Spinner from '../Spinner';

class Comments extends Component {
    state = {
        name: '',
        body: '',
        comments: [],
    }

    componentWillMount = async () => {
        this.fetchComments(0);
    }

    fetchComments = async (id) => {
        const data = await getComments(id);
        this.setState({comments: data});
    }

    onChange = (e) => {
        this.setState({body: e.target.value});
    }

    onSubmit = async (e) => {
        e.preventDefault();
        if (this.state.body !== '') {
            await postComment(0, this.state.name, this.state.body);
        }

        this.setState({body: ''});
        this.fetchComments(0);
    }

    render() { 
        return (
            <Fragment>
                <Text>Comments</Text>
                <InputGroup>
                    <FormInput value={this.state.body} onChange={this.onChange} placeholder="Leave a Comment" />
                    <InputGroupAddon type="append">
                        <Button onClick={this.onSubmit}>Send</Button>
                    </InputGroupAddon>
                </InputGroup>

                {this.state.comments && this.state.comments.data ?
                     <CommentsList comments={this.state.comments.data} /> : <Flex><Spinner /></Flex>}
            </Fragment>
        );
    }
}
 
export default Comments;