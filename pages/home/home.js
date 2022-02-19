import React from 'react'
import UserContext from "../../context/UserContext";
import Layout from '../../components/Layouts/Layout';

const Home = () => {

  return (
    <UserContext.Consumer>
      {({ usuario, token }) => {
        
        return (
          <Layout>
            home
          </Layout>
        );
      }}
    </UserContext.Consumer>
  )
}

export default Home