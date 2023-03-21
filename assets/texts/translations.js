// import { pages } from "../../constants";
import yaml from 'js-yaml';


// let fileContents = fs.readFileSync('./data-multi.yaml', 'utf8');
// let data = yaml.safeLoadAll(fileContents);

import CreditsTextEn from "./creditsEn";
import CreditsTextIt from "./creditsIt";
import CreditsTextEs from "./creditsEs";
import CreditsTextCa from "./creditsCa";
import PresentationTextEn from "./presentationEn";
import PresentationTextIt from "./presentationIt";
import PresentationTextEs from "./presentationEs";
import PresentationTextCa from "./presentationCa";
//import CreditsTextEn from './credits.en.yaml';
import Text from "./credits.it.yaml";
import CreditsEs from "./credits.es.yaml";

console.log("===========================================================")
console.log(yaml.safeLoad(CreditsTextEn))
console.log(yaml.safeLoad(CreditsTextEn.CreditsEn))
console.log("===========================================================")


export const translations = {
  en: {
    welcomeMessage: 'Welcome to my app!',
    languageButton: 'English',
    MainMenuButtonTextMap: "Map of Places",
    MainMenuButtonTextList: "List of Places",
    MainMenuButtonTextPresentation: "Presentation",
    MainMenuButtonTextSources: "Sources",
    MainMenuButtonTextCredits: "Credits",
    PageTextCredits: CreditsTextEn,    
    // PageTextCredits: yaml.safeLoad(CreditsTextEn.CreditsEn),
    PageTextPresentation: PresentationTextEn,    
  },
  it: {
    welcomeMessage: 'Benvenuti nella mia app!',
    languageButton: 'Italiano',
    MainMenuButtonTextMap: "Mappa dei luoghi",
    MainMenuButtonTextList: "Elenco dei luoghi",
    MainMenuButtonTextPresentation: "Presentazione",
    MainMenuButtonTextSources: "Fonti",
    MainMenuButtonTextCredits: "Crediti",
    PageTextCredits: yaml.safeLoad(require('./credits.it.yaml')),
    //   fs.readFileSync("./credits.en.yaml", "utf-8")
    //   ).CreditsIt, 
    PageTextCredits: CreditsTextIt,    
    // PageTextCredits: yaml.safeLoad(CreditsTextoEn.CreditsEn),
    PageTextPresentation: PresentationTextIt,    

  },
  es: {
    welcomeMessage: '¡Bienvenido a mi aplicación!',
    languageButton: 'Español',
    MainMenuButtonTextMap: "Mapa de lugares",
    MainMenuButtonTextList: "Lista de lugares",
    MainMenuButtonTextPresentation: "Presentación",
    MainMenuButtonTextSources: "Fuentes",
    MainMenuButtonTextCredits: "Créditos",
    // PageTextCredits: yaml.safeLoad(CreditsEs).CreditsEs,
    PageTextCredits: CreditsTextEs,
    PageTextPresentation: PresentationTextEs,  
  },
  ca: {
    welcomeMessage: '¡Benvingut a la meva aplicació!',
    languageButton: 'Catalan',
    MainMenuButtonTextMap: "Mapa de llocs",
    MainMenuButtonTextList: "Llista de llocs",
    MainMenuButtonTextPresentation: "Presentació",
    MainMenuButtonTextSources: "Fonts",
    MainMenuButtonTextCredits: "Crèdits",
    PageTextCredits: CreditsTextCa,
    PageTextPresentation: PresentationTextCa,  
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

