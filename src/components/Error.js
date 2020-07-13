import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

const Error = props => (
    <View>
        <Image style={styles.icon} source={require('../../assets/no-disconnect.png')} />
        <Text style={styles.error}>{ props.msg }</Text>
    </View>
);

const styles =  StyleSheet.create({
    error: {
        color: '#1eb1ed',
        alignSelf: 'center',
        fontSize: 18
    },
    icon:{
        aspectRatio: 1,
        alignSelf: 'center',
        width: 100, 
        height: 100
    }
});

export default Error;