import { View, Text, StyleSheet, Image, useWindowDimensions } from 'react-native'
import React from 'react'
import AppIntroSlider from 'react-native-app-intro-slider'
import { onboardingSwiperData } from '@/constants/constants'
import { router } from 'expo-router'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'

export default function OnboardingScreen() {
    const { width } = useWindowDimensions()
const renderItem = ({item}: {item:onboardingSwiperDataType}) =>{
return (
    <View style={[styles.container,{width}]}>
        <Image 
        source={item.image}
        style={{ marginBottom: 30, width: 260, resizeMode: 'center'}}/>
        <View style={{flex: 0.3, marginTop: 15}}>
            <Text style={[styles.title, {width:300}]}>
                {item.title}
            </Text>
            <Text style={[styles.description, {width: 290}]}>
                {item.description}
            </Text>
        </View>

    </View>
)
}

  return (
    <AppIntroSlider
    renderItem={renderItem}
    data={onboardingSwiperData}
    onDone={() => {
        router.push("/login")
    }}
    onSkip={() => {
        router.push("/login")
    }}
    renderNextButton={() => (
        <View style={styles.buttonContainer}>
            <Text style={styles.buttonText}>
                Lanjut
            </Text>
           

        </View>
    )}
    renderDoneButton={() => (
        <View style={styles.buttonContainer}>
            
            <Text style={styles.buttonText}>
                Mulai Sekarang
            </Text>

        </View>
    )}
    showSkipButton={false}
    dotStyle={styles.dot}
    bottomButton={true}
    activeDotStyle={styles.activeDot}
     />
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 0.7,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonContainer:{
        backgroundColor: "#0077C9",
        width: responsiveWidth(88),
        height: responsiveHeight(2.5),
        borderRadius: 12,
        marginHorizontal: 5
    },
    buttonText: {
        fontSize: 14,
        color: '#fff',
        textAlign: 'center'
    },
    dot: {
        height: 5,
        borderRadius: 5,
        backgroundColor: "#0079c9",
        marginHorizontal: 8,
    },
    activeDot: {
        backgroundColor: "#0079c9",
        borderRadius: 5,
        marginHorizontal: 8,
        height: 5
    },
    title: {
        fontSize: 24,
        fontWeight: '700',
        textAlign: 'center',
        color: '#212121',
        marginBottom: 10,
    },
    description: {
        fontSize: 16,
        color: '#858597',
        fontWeight: '300',
        paddingHorizontal: 64,
        textAlign: 'center',
    }
    
})