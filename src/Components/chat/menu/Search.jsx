import React from 'react'
import { Search as SearchIcon } from '@mui/icons-material'
import { Box, InputBase } from '@mui/material'
import styled from 'styled-components'

const Component = styled(Box)`
    background:#fff;
    height:45px;
    border-botto,:1px solid #f2f2f2;
    display:flex;
    align-items:center;

`;
const Wrapper = styled(Box)`
background:#fef2f5;
position : relative;
margin:0 13px;
boder-radius:10px;
width:100%;
`;

const Icon = styled(Box)`
    position:absolute;
    height:100%;
    padding:6px 10px;
    color:#919191;
`;

const InputField = styled(InputBase)`
width:100%;
padding:16px;
height:15px;
padding-left:65px;
`


const SearchComp = ({setText}) => {
    return (
        <Component>
            <Wrapper >
                <Icon>

                    <SearchIcon
                        fontSize='small'
                    />

                </Icon>
                <InputField 
                onChange={(e)=>setText(e.target.value)}
                placeholder='Search or start new chat' />
            </Wrapper>

        </Component>
    )
}

export default SearchComp