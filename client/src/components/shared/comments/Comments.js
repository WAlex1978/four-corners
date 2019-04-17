import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { InputGroup, InputGroupAddon, FormInput, Button} from "shards-react";
import { Text, Flex } from '../styled-components';
import { getComments, postComment } from '../../../services/comments';
import CommentsList from './CommentsList';
import Spinner from '../Spinner';

class Comments extends Component {
    state = {
        body: '',
        comments: [],
    }

    componentWillMount = async () => {
        this.fetchComments(this.props.locationId);
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
            await postComment(this.props.locationId, this.props.token, this.state.body);
        }

        this.setState({body: ''});
        this.fetchComments(this.props.locationId);
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

const mapStateToProps = (state) => {
    return {
        token: state.token,
        locationId: state.locationId,
    }
}
 
export default connect (mapStateToProps) (Comments);