import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const FooterCom = ({navigation}) => {

    return (
        <>
            <View style={styles.footerContainer}>
                <TouchableOpacity
                    style={styles.iconFooter}
                    onPress={
                        () => {navigation.navigate('List') }
                    }
                >
                    <Text>Lista</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.iconFooter}
                    onPress={
                        () => {navigation.navigate('Favorite') }
                    }
                >
                    <Text>Favoritos</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.iconFooter}
                    onPress={
                        () => {navigation.navigate('Download') }
                    }
                >
                    <Text>Descargas</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.iconFooter}
                    onPress={
                        () => {navigation.navigate('Profile') }
                    }
                >
                    <Text>Perfil</Text>
                </TouchableOpacity>
            </View>
        </>
    )

}

const styles = StyleSheet.create({
    footerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 1,
    },
    iconFooter: {
        backgroundColor:'#9900A5',
        flex: 1,
        justifyContent: 'center',
        alignItems: "center"
    }
});


export default FooterCom