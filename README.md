
# Aim 
Clone functionalities of Android's Appace APP, and provide further access in IOS platforms and, if possible, in web version. 

Developed with the permission of and in collaboration with MIR Padova association. 

# Implement new locations or languages
The file assets/texts/translations.js contains the core map to supported languages. 




# Develop

This app is developed using EXPO react-native SDK. 

Consider having a **3rd part check with snack.expo check**, like https://snack.expo.dev/@ndrini/appace


Actual react-native version 0.71.4
  (or install
  
    npx expo install react-native@0.71.4
)


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


## Check the environment

Already installed: 
  - node
  - yarn

Check 'em again: 

    su@asusvivo:~/workspace/react_native/expo_dev$ node -v
    v16.14.2
    su@asusvivo:~/workspace/react_native/expo_dev$ yarn --version
    1.22.10


    su@asusvivo:~/workspace/react_native/appace$ npm list webpack-dev-server

      appace@1.0.0 /home/su/workspace/react_native/appace
      └─┬ @expo/webpack-config@18.0.1
        └── webpack-dev-server@4.11.1


  
First time you run the project, run also the command: 

    npx expo install react-dom react-native-web @expo/webpack-config

So that you install to install the dependencies (to have web interface)
and download an install the assets (into assets folder).

Also 

    yarn add @react-native/assets-registry 

to fix error (https://github.com/expo/expo/issues/21469)

en other packages, like

    $ npm install @react-native-community/cookies


# Backlog

- add map page
  - install import MapView from 'react-native-maps';
  - integrate PageMap.js component  
- add list page
  - integrate PageList.js component  
- select text formatter (https://www.npmjs.com/package/react-native-htmlview?activeTab=dependents, https://www.npmjs.com/package/react-native-html-to-text , https://www.npmjs.com/package/react-native-html-to-text)
- style the buttons of routing and avoid code duplication by creating a component (for instance to main page)
- simplify the code before moving in further steps
- put assets/images/main_page.jpg picture into main page, like done for my_app
- migrate one page code tha provide the map and split it into components
- study how to open individual item descriptions page
- consider a different name
  - consider to use an app's name that is easier to be found and understood ('paths of peace, nonviolent tourism')
- git merge or delete main branch

Done: 
- 2023-03-24 add an image with flag to switch languages
- 2023-03-21 add the page with only text 
- 2023-03-16 change the hardcoded values of the pages with variables
  - leverage the constants.js file 
- 2023-03-15 simplified version of routing with switch statement
  

## Tech backlog


- remove from dependencies 
  - ...


Done 
- removed 
  - npm uninstall...
    - react-native-webview
    - react-native-community/cookies
