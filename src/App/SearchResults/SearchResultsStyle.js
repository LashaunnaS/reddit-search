import styled from 'styled-components';

export const SRGrid = styled.section`
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    grid-template-rows: 20vh 100vh;
`;

export const SearchBlock = styled.form`
    grid-column: 2/3;
    justify-self: center;
    align-self: flex-end;
    padding-left: 4em;

`;

export const SearchBar = styled.input`
   width: 25vw;
   height: 5vh;
`;

export const Button = styled.button`
    color: #fff;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border-radius: 3px;
    background-image: linear-gradient( to left, #e1574a, #bada55);
    border: 2px solid #bada55;
    transition: 10s;

    :hover {
        background-image: linear-gradient( to right, #e1574a, #bada55);
        border-radius: 3px;
        transition: 10s;
    }
`;

export const ListTable = styled.div`
    
    grid-row: 2;
    grid-column: 2/3;
    justify-self: center;
`;
