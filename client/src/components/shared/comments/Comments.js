import React, { Component, Fragment } from 'react';
import { InputGroup, InputGroupAddon, FormInput, Button} from "shards-react";
import { Text } from '../styled-components';
import { getComments, postComment } from '../../../services/comments';

class Comments extends Component {
    state = {
        name: '',
        body: '',
        comments: [],
    }

    componentWillMount = async () => {
        this.setState({comments: await getComments(0)});
        console.log(this.state.comments)
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