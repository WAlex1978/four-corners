import React, { useState } from 'react';
import { InputGroup, InputGroupAddon, FormInput, Button} from "shards-react";

const Search = () => {
    const [params, setParams] = useState('');

    const onChange = (e) => {
        setParams(e.target.value);
    }

    return (
        <InputGroup>
            <FormInput value={params} onChange={onChange}/>
            <InputGroupAddon type="append">
                <Button theme="dark">Search</Button>
            </InputGroupAddon>
        </InputGroup>
    )
}

export default Search;