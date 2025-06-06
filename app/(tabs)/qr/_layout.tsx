import AppHeaderInfo from "@/components/App.headerInfo";
import { Entypo, MaterialCommunityIcons } from "@expo/vector-icons";
import { router, Stack } from "expo-router";
import { useState, useRef, useEffect } from "react";
import { TouchableOpacity, View, Text, Modal, Animated, StyleSheet, Dimensions } from "react-native";

export default function QRLayout ()
{
    const [ menuVisible, setMenuVisible ] = useState( false );
    const menuAnimation = useRef( new Animated.Value( 0 ) ).current;

    // Animate menu when visibility changes
    useEffect( () =>
    {
        Animated.timing( menuAnimation, {
            toValue: menuVisible ? 1 : 0,
            duration: 200,
            useNativeDriver: true,
        } ).start();
    }, [ menuVisible ] );

    const handleToggleMenu = () =>
    {
        setMenuVisible( !menuVisible );
    };

    const handleCreateQR = () =>
    {
        setMenuVisible( false );
        router.push( "/(tabs)/qr/create" );
    };

    // Menu animation styles
    const menuOpacity = menuAnimation.interpolate( {
        inputRange: [ 0, 1 ],
        outputRange: [ 0, 1 ],
    } );

    const menuTranslateY = menuAnimation.interpolate( {
        inputRange: [ 0, 1 ],
        outputRange: [ -20, 0 ],
    } );

    return (
        <>
            <Stack initialRouteName='scanner-qr'>
                <Stack.Screen
                    name="index"
                    options={ {
                        header: () => <AppHeaderInfo title="Thanh Toán Với QR" onPress={ () => router.replace( "/(tabs)" ) }
                            rightComponent={
                                <TouchableOpacity
                                    onPress={ handleToggleMenu }
                                    className="p-2"
                                >
                                    <Entypo name="dots-three-vertical" size={ 18 } color="white" />
                                </TouchableOpacity>
                            }
                        />
                    } }
                />
                <Stack.Screen
                    name='scanner-qr'
                    options={ {
                        headerShown: false
                    } }
                />
                <Stack.Screen
                    name='create'
                    options={ {
                        header: () => <AppHeaderInfo title="Tạo mã QR" onPress={ () => router.replace( "/(tabs)" ) } />
                    } }
                />
                <Stack.Screen
                    name='display'
                    options={ {
                        headerShown: false
                    } }
                />
            </Stack>

            {/* Dropdown Menu */ }
            <Modal
                transparent={ true }
                visible={ menuVisible }
                animationType="none"
                onRequestClose={ () => setMenuVisible( false ) }
            >
                <TouchableOpacity
                    style={ styles.modalOverlay }
                    activeOpacity={ 1 }
                    onPress={ () => setMenuVisible( false ) }
                >
                    <Animated.View
                        style={ [
                            styles.menuContainer,
                            {
                                opacity: menuOpacity,
                                transform: [ { translateY: menuTranslateY } ]
                            }
                        ] }
                    >
                        <TouchableOpacity
                            style={ styles.menuItem }
                            onPress={ handleCreateQR }
                        >
                            <MaterialCommunityIcons name="qrcode-plus" size={ 20 } color="#1c40f2" />
                            <Text style={ styles.menuItemText }>Tạo mã QR</Text>
                        </TouchableOpacity>
                    </Animated.View>
                </TouchableOpacity>
            </Modal>
        </>
    );
}

const styles = StyleSheet.create( {
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
    },
    menuContainer: {
        position: 'absolute',
        top: 60, // Adjust based on your header height
        right: 16,
        backgroundColor: 'white',
        borderRadius: 12,
        padding: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        minWidth: 160,
    },
    menuItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderRadius: 8,
    },
    menuItemText: {
        marginLeft: 12,
        fontSize: 16,
        fontWeight: '500',
        color: '#333',
    },
} );