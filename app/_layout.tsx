import React from 'react';
import {StyleSheet, View, Platform} from 'react-native';
import {WebView} from 'react-native-webview';
import * as SplashScreen from 'expo-splash-screen';

export default function HomeScreen() {

    const hideSplash = async () => {
        // Esta función se dispara cuando el WebView termina de cargar
        try {
            await SplashScreen.hideAsync();
        } catch (e) {
            // Previene errores si el splash ya se había ocultado
        }
    };

    return (
        <View style={styles.container}>
            <WebView
                // Reemplaza con tu URL real
                source={{uri: 'https://qa.gsweb.com.do/login'}}
                style={styles.webview}
                onLoadEnd={hideSplash} // Disparador del Splash
                domStorageEnabled={true}
                javaScriptEnabled={true}
                startInLoadingState={true}
                // Evita que el contenido se mueva en Android al abrir el teclado
                androidLayerType="hardware"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        // Ajuste opcional para no chocar con la barra de estado en Android
        paddingTop: Platform.OS === 'android' ? 35 : 0,
    },
    webview: {
        flex: 1,
    },
});