import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { capitalizeFirstLetter } from '../util';

const PeopleListItem = props => {
    const { people, navigateToPeopleDetail } = props;
    const { title, first, last } = people.name

    return (
        <TouchableOpacity onPress={() => navigateToPeopleDetail({people})}>
            <View style={styles.line}>
                <Image style={styles.avatar} source={{uri: people.picture.thumbnail }}/>
                <Text style={styles.lineText}>
                    { `${capitalizeFirstLetter(title)} ${capitalizeFirstLetter(first)} ${capitalizeFirstLetter(last)}`}
                </Text>
            </View> 
        </TouchableOpacity> 
    );

}

const styles =  StyleSheet.create({
    line: {
        height: 60,
        borderBottomWidth: 1,
        borderBottomColor: "#bbb",
        flexDirection: 'row',
        alignItems: 'center'
    },
    lineText: {
        flex: 7,
        fontSize: 20,
        paddingLeft: 15,
    },
    avatar:{
        flex: 1,
        aspectRatio: 1,
        marginLeft: 15,
        borderRadius: 50
    }
});


export default PeopleListItem;