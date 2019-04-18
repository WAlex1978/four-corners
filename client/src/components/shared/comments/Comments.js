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
        comments: this.props.comments,
    }

    onChange = (e) => {
        this.setState({body: e.target.value});
    }

    onSubmit = async (e) => {
        e.preventDefault();
        if (this.state.body !== '') {
            await postComment(this.props.id, this.props.token, this.state.body);
        }

        const data = await getComments(this.props.id);
        this.setState({ body: '', comments: data.data })
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

                {this.state.comments ? <CommentsList comments={this.state.comments} /> : <Flex><Spinner /></Flex> }
            </Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        token: state.token
    }
}
 
export default connect (mapStateToProps) (Comments);