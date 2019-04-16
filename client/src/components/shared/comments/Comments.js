import React, { Component, Fragment } from 'react';
import { InputGroup, InputGroupAddon, FormInput, Button} from "shards-react";
import { Text } from '../styled-components';
import { postComment } from '../../../services/comments';

class Comments extends Component {
    state = {
        name: '',
        body: '',
    }

    onChange = (e) => {
        this.setState({body: e.target.value});
    }

    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.body !== '') {
            postComment(0, this.state.name, this.state.body);
        }

        this.setState({body: ''});
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
            </Fragment>
        );
    }
}
 
export default Comments;