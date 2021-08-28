import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const RestaurantList = () => {
    return (
        <View style={styles.container}>
            <Text>Restaurant List</Text>
        </View>
    )
}

export default RestaurantList

const styles = StyleSheet.create({
    container: {
        alignSelf: 'flex-start'
    }
})
