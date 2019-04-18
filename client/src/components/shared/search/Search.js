import React, { useState } from 'react';
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { InputGroup, InputGroupAddon, InputGroupText, FormInput } from "shards-react";
import { search } from '../../../services/search';

const Search = () => {
    const [params, setParams] = useState('');

    const onChange = (e) => {
        setParams(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();

        // If search params are not empty
        // Search for location
        if (params !== '') {
            search(params);
        }
    }

    return (
        <form onSubmit={onSubmit}>
            <InputGroup size="sm" seamless>
                    <InputGroupAddon type="prepend">
                        <InputGroupText><FontAwesomeIcon icon={faSearch} /></InputGroupText>
                    </InputGroupAddon>
                    <FormInput className="border-0" placeholder="Search..." value={params} onChange={onChange}/>
            </InputGroup>
        </form>
    )
}

export default Search;