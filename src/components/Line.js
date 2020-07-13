import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Line = ({label = "", content = "-"}) => (
    <View style={styles.line}>
        <Text style={[styles.cell, styles.label, label.length > 8 ? styles.longLabel : null ]}>{label}</Text>
        <Text style={[styles.cell, styles.content]}>{ content }</Text>
    </View> 
);

const styles =  StyleSheet.create({
    line: {
        flexDirection: 'row',
        paddingTop: 3,
        paddingBottom: 3,
        borderWidth: 1,
        borderColor: '#e5e5e5'
    },
    label: {
        fontWeight: 'bold',
        flex: 2,
        textAlign: 'right'
    },
    longLabel: {
        fontSize: 14
    },
    content: {
        flex: 4
    },
    cell: {
        fontSize: 16,
        paddingLeft: 5
    },
});

export default Line;