import React, { Component, Fragment } from 'react';
import { InputGroup, InputGroupAddon, FormInput, Button} from "shards-react";
import { Text } from '../styled-components';

class Comments extends Component {
    state = {
        comment: '',
    }

    onChange = (e) => {
        this.setState({comment: e.target.value});
    }

    onSubmit = (e) => {
        e.preventDefault();

        if (this.state.comment !== '') {
            // Send comment
        }
    }

    render() { 
        return (
            <Fragment>
                <Text>Comments</Text>
                <InputGroup>
                    <FormInput placeholder="Leave a Comment" />
                    <InputGroupAddon type="append">
                        <Button>Send</Button>
                    </InputGroupAddon>
                </InputGroup>
            </Fragment>
        );
    }
}
 
export default Comments;