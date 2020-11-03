import React from 'react'
import styled from 'styled-components'
import Navbar, { NavbarBrand } from './Navbar'

const Layout = styled.div`
    display: grid;
    grid-template-rows: 60px 1fr;
`
const MainContent = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr;
`

const MainLayout = ({children}) => {
    return (
        <Layout>
            <Navbar>
                <NavbarBrand>Pokedex</NavbarBrand>
            </Navbar>
            <MainContent>
                {children}
            </MainContent>
        </Layout>
    )
}

export default MainLayout