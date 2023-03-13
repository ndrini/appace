
# Aim 
Clone functionalities of Android's Appace APP, and provide further access in IOS platforms and , if possible, in web version. 

Developed with the permission of and in collaboration with MIR Padova association. 

# Develop

This app is developed using EXPO react-native SDK. 

Consider having a **3rd part check with snack.expo check**, like https://snack.expo.dev/@ndrini/appace

## Initial steps
Just once run in the desired folder (for us in react-native): 

    react_native$ npx create-expo-app appace
    react_native$ cd appace
    react_native/appace$ npm start

then you can execute and start the develop 

    npm start


### Installation of more packages

To allow web development

    appace$ npx expo install react-native-web@~0.18.10 react-dom@18.2.0
    @expo/webpack-config@^18.0.1

### # following official webpage

The url is https://docs.expo.dev/tutorial/create-your-first-app


## check the environment

Already installed: 
  - node
  - yarn

Check 'em again: 

    su@asusvivo:~/workspace/react_native/expo_dev$ node -v
    v16.14.2
    su@asusvivo:~/workspace/react_native/expo_dev$ yarn --version
    1.22.10

First time you run the project, run also the command: 

    npx expo install react-dom react-native-web @expo/webpack-config

So that you install to install the dependencies (to have web interface)
and download an install the assets (into assets folder).

Also 

    yarn add @react-native/assets-registry 

to fix error (https://github.com/expo/expo/issues/21469)


# Backlog

- simplified version of routing with switch statement
  - insert button to navigate between pages  
- migrate one page code and split it into components
- open individual item descriptions
- consider a different name
  - consider to use an app's name that is easier to be found and understood ('paths of peace, nonviolent tourism')
- git merge or delete main branch
