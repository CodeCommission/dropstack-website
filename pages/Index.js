import React from 'react'
import styles from './Index.css'
import {Helmet} from 'react-helmet'
import styled from 'styled-components'

const IndexContainer = styled.div`
  display: flex;
  flex-direction: column;
`
const Nav = styled.nav`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: lightgrey;
`

const Content = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`

const Footer = styled.footer`
  width: 100%;
  margin-top: auto;
  display: flex;
  bottom: 0px;
  background-color: lightgrey;
`

export default class Index extends React.Component {
  render() {
    return (
      <IndexContainer>
        <Helmet>
          <title>DropStack</title>
          <meta charset="utf-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link href='https://fonts.googleapis.com/css?family=Raleway:400,300,500,600,800' rel="stylesheet" />
          <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.6.3/css/font-awesome.min.css" rel="stylesheet" />
        </Helmet>
        <Nav>
          <ul className={styles.aLister}>
            <li>A</li>
            <li>B</li>
            <li>C</li>
          </ul>
        </Nav>
        <Content>
          Aaaa<br/>
          Aaaa<br/>
          Aaaa<br/>
          Aaaa<br/>
          Aaaa<br/>
          Aaaa<br/>
          Aaaa<br/>
          Aaaa<br/>
          Aaaa<br/>
          Aaaa<br/>
          Aaaa<br/>
          Aaaa<br/>
          Aaaa<br/>
          Aaaa<br/>
          Aaaa<br/>
          Aaaa<br/>
          Aaaa<br/>
          Aaaa<br/>
          Aaaa<br/>
          Aaaa<br/>
          Aaaa<br/>
          Aaaa<br/>
          Aaaa<br/>
          Aaaa<br/>
          Aaaa<br/>
          Aaaa<br/>
          Aaaa<br/>
        </Content>
        <Footer>
          lsllsl lsls
        </Footer>
      </IndexContainer>
    )
  }
}