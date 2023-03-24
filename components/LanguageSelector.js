import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Image } from 'react-native';

function LanguageSelector({ languages, onLanguageChange }) {
    return (
        <View style={Styles.container}>
            {languages.map((language) => (
                <Image
                    key={language.code}
                    source={language.icon}
                    alt={language.name}
                    onClick={() => onLanguageChange(language.code)}
                    style={Styles.image}
                />
            ))}
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

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    image: {
        width: 44,
        height: 32,
        borderRadius: 4,
        marginHorizontal: 5,
        cursor: 'pointer'
    },
});

export default LanguageSelector;
