import { StyleSheet } from 'react-native';

// Centralized styles for titles and subtitles
export const appStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingBottom:50,
        paddingTop: 50,
    },
    title: {
        fontWeight: '600',
        fontSize: 24,
        lineHeight: 28, // Correct line height based on font size
        color: '#000000',
        marginTop: 20,
        marginBottom:10
    },
    subtitle: {
        fontSize: 16,
        textAlign: 'center',
        marginVertical: 7,
    },
    title2: {
        fontFamily: 'Inter',
        fontWeight: '600',
        fontSize: 24,
        lineHeight: 28, // Correct line height based on font size
        color: '#407aff',
        marginTop: 20,
    },
    textBody:{
        color: '#87898E',
        fontSize: 14,
        textAlign: 'center',
        marginVertical:5,
    },
    textBodySmall:{
        color: '#87898E',
        fontSize: 13,
        textAlign: 'center',

    },
    positiveButton: {
        padding: 10,
        backgroundColor: '#007bff',
        alignItems: 'center',
        width: 327, // Fixed width
        marginTop: 20,
        marginHorizontal: 24,  // Margins on left and right
        borderRadius: 25, // Rounded corners
      },
    redButton: {
        backgroundColor: '#FF6565',
        padding: 10,
        borderRadius: 25, // Rounded corners
        marginTop: 20,
        marginHorizontal: 24, 
        width: 327, // Width of the button
        alignItems: 'center', // Center text inside the button
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
    },
    margin20: {
        marginTop: 20,
    },
});