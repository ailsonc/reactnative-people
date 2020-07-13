import React from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import axios from 'axios';
import PeopleList from '../components/PeopleList';
import Error from '../components/Error';

export default class PeoplePage extends React.Component {
 
  constructor(props) {
    super(props);

    this.state = {
      peoples: [],
      loading: false,
      error: false
    }
  }

  componentDidMount() {
    this.setState({ loading: true});
    setTimeout(() =>{
      axios
      .get('https://randomuser.me/api/?nat=br&results=20')
      .then(response => {
        const { results } = response.data;
        this.setState({
          peoples: results,
          loading: false
        });
      }).catch(error => {
        this.setState({
          loading: false, 
          error: true
        });
      });
    },3500)
  }
 
  render() {
    return (
      <View style={styles.container}>
        { 
          this.state.loading 
            ? <ActivityIndicator size="large" color="#6ca2f7"/> 
            : this.state.error 
              ? <Error msg="Algo deu errado :("/>
              : <PeopleList peoples={ this.state.peoples } navigateToPeopleDetail={pageParams => this.props.navigation.navigate('PeopleDetail', pageParams)}/>
        }
      </View>
    );
  }
  
}

const styles =  StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  }
});
