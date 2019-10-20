import React from 'react';
import styled from 'styled-components';

const SearchContainer = styled.input`
    -webkit-appearance: none;
    border: 1px solid;
    outline: none;
    padding: 10px; 
    width: 150px;
    line-height: 30px;
    margin-bottom: 30px;    
`;

export const SearchBox = ({ placeholder, handleChange }) => {
    return(<SearchContainer type='search' placeholder={placeholder} onChange={handleChange} />);
}