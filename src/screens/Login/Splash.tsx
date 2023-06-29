import React, { useEffect } from 'react'
import { StyleSheet, View, Dimensions } from 'react-native'
import LottieView from 'lottie-react-native'

import cat from '../../assets/Image/141179-jiji.json'
import { useNavigation, CommonActions } from '@react-navigation/core'

export interface SplashScreenProps {
}

const size = Dimensions.get('window').width * 0.5

const SplashScreen = () => {
    const navigation = useNavigation()

    useEffect(() => {
        setTimeout(() => {
            navigation.dispatch(CommonActions.reset({
                index: 0,
                routes: [{ name: 'Home' }]
            }))
        }, 2000);
    }, [])

    return (
        <View style={styles.container}>
            <LottieView source={cat} style={{ width: size, height: size }}
                autoPlay loop resizeMode='contain' />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
})
export default SplashScreen;