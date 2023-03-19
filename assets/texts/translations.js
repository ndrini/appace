// import { pages } from "../../constants";
import yaml from 'js-yaml';


// let fileContents = fs.readFileSync('./data-multi.yaml', 'utf8');
// let data = yaml.safeLoadAll(fileContents);

import CreditsEn from "./creditsEn";
import {CreditsIt} from "./credits.it.yaml";
import {CreditsEs} from "./credits.es.yaml";

export const translations = {
    en: {
      welcomeMessage: 'Welcome to my app!',
      languageButton: 'English',
      MainMenuButtonTextMap: "Map of Places",
      MainMenuButtonTextList: "List of Places",
      MainMenuButtonTextPresentation: "Presentation",
      MainMenuButtonTextSources: "Sources",
      MainMenuButtonTextCredits: "Credits",  
      PageTextCredits: CreditsEn,    
    },
    it: {
      welcomeMessage: 'Benvenuti nella mia app!',
      languageButton: 'Italiano',
      MainMenuButtonTextMap: "Mappa dei luoghi",
      MainMenuButtonTextList: "Elenco dei luoghi",
      MainMenuButtonTextPresentation: "Presentazione",
      MainMenuButtonTextSources: "Fonti",
      MainMenuButtonTextCredits: "Crediti", 
      PageTextCredits: CreditsIt 
      // yaml.safeLoad(
      //   fs.readFileSync("./credits.en.yaml", "utf-8")
      //   ).CreditsIt, 
    },
    es: {
      welcomeMessage: '¡Bienvenido a mi aplicación!',
      languageButton: 'Español',
      MainMenuButtonTextMap: "Mapa de lugares",
      MainMenuButtonTextList: "Lista de lugares",
      MainMenuButtonTextPresentation: "Presentación",
      MainMenuButtonTextSources: "Fuentes",
      MainMenuButtonTextCredits: "Créditos", 
      PageTextCredits: yaml.safeLoad(CreditsEs), 
    },
    ca: {
      welcomeMessage: '¡Benvingut a la meva aplicació!',
      languageButton: 'Catalan',
      MainMenuButtonTextMap: "Mapa de llocs",
      MainMenuButtonTextList: "Llista de llocs",
      MainMenuButtonTextPresentation: "Presentació",
      MainMenuButtonTextSources: "Fonts",
      MainMenuButtonTextCredits: "Crèdits", 
    },
  };



//   export let pages = {
//     map : "map",
//     list : "list",
//     presentation : "presentation",
//     sources: "sources",
//     credits : "credits",
//     main : "main",

// }


// Map of Places (map)
// Places of peace (list)
// Presentation
// Sources
// Credits

