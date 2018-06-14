import React from 'react';
import styled from 'styled-components'

const Main = styled.section`
margin-top:15px;

`



const layout = (props)=>{
  return (
  <React.Fragment>
    <div>Toolbar, SideDrawer,Backdrop</div>
    <Main>
      {props.children}
    </Main>
  </React.Fragment>

  )
}

export default layout
