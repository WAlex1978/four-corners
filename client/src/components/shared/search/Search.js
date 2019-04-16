import React, { useState } from 'react';
import { InputGroup, InputGroupAddon, FormInput, Button} from "shards-react";
import { search } from '../../../services/search';

const Search = () => {
    const [params, setParams] = useState('');

    const onChange = (e) => {
        setParams(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        search(params);
    }

    return (
        <InputGroup>
            <FormInput value={params} onChange={onChange}/>
            <InputGroupAddon type="append">
                <Button theme="dark" onClick={onSubmit}>Search</Button>
            </InputGroupAddon>
        </InputGroup>
    )
}

export default Search;