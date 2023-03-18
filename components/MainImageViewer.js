import { StyleSheet, Image } from 'react-native';

const MainPageImage = require('../assets/images/main_page.jpg');


export default function MainImageViewer() {

    return (
        <Image 
            source={MainPageImage}
            style={Style.image} />
    );
}

const Style = StyleSheet.create({
    image: {
        width: 320,
        height: 440,
        borderRadius: 18,
    },
});