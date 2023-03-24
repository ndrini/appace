import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, View, Image } from 'react-native';
const MainPageImage = require('../assets/images/main_page.jpg');


function LanguageSelector({ languages, onLanguageChange }) {
    return (
        <View>
            {languages.map((language) => (
                <Image
                    key={language.code}
                    source={language.icon}
                    // source={MainPageImage}
                    // alt={language.name}
                    onClick={() => onLanguageChange(language.code)}
                    // style={{ cursor: 'pointer' }}
                    style={Style.image}
                    />
            ))}

            <Image 
            source={MainPageImage}
            style={Style.image} />

        </View>
    );
}

LanguageSelector.propTypes = {
    languages: PropTypes.arrayOf(
        PropTypes.shape({
            code: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            icon: PropTypes.string.isRequired,
        })
    ).isRequired,
    currentLanguage: PropTypes.string.isRequired,
    onLanguageChange: PropTypes.func.isRequired,
};

const Style = StyleSheet.create({
    image: {
        width: 44,
        height: 32,
        borderRadius: 2,
    },
});

export default LanguageSelector;
