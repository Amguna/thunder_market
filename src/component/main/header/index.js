import React from 'react'
import AppDownload from './appDownload/index';
import Favorite from './favorite/index';
import LoginSignup from './loginSignup/index';
import MyStore from './myStore/index';

//styles
import { Header } from './styles';

export default function Component() {
  return (
    <Header>
      <div style={styles.block}>
        <AppDownload />
        <Favorite />
      </div>
      <div style={styles.block}>
        <LoginSignup />
        <MyStore />
      </div>
    </Header>
  )
}

const styles = {
  container:{
    display:"flex",
    justifyContent:"space-between",
    flex:1,
    alignItems:"center",
  },
  block:{
    display:"flex",
    flexDirection:"row",
  }
}