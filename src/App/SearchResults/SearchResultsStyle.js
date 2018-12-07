import styled from 'styled-components';

export const SRGrid = styled.section`
    display: grid;
    grid-template-rows: 50px 100%;
    min-height: 100vh;
    grid-template-columns: 2fr 2fr;
    min-width: 500px;
    padding-left: 2em;
    font-family: 'Roboto';
`;

export const SearchDiv = styled.div`

    grid-column: 1/3;
    align-self: center;
    background: #fff;
    display: flex;
    border: 1px solid #dfe1e5;
    box-shadow: none;
    border-radius: 24px;
    width: 40vw;
    min-width: 200px;
    height: 44px;
    margin: -19px auto 0 auto;

    :hover{
        box-shadow: 0 1px 6px 0 rgba(32,33,36,0.28);
    }
`

export const SearchBar = styled.input`
    @import url('https://fonts.googleapis.com/css?family=Nunito|Roboto');
    font-family: Nunito;
    font-weight: 500;
    font-size: 16px;

    background-color: transparent;
    border: none;
    margin: 0;
    padding: 5px 0 5px 10px;
    color: rgba(0,0,0,.87);
    word-wrap: break-word;
    outline: none;
    display: flex;
    flex: 100%;
   
`;

export const Button = styled.button`
    background-color: transparent;
    border: none;
    outline: none;
`;

export const ListTable = styled.div`
    grid-row: 2;
    grid-column: 1;
`;
