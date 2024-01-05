import { createI18n } from 'vue-i18n';

const messages = {
  en: {
    header:{
            title:"HI, I'm VACH",
            title1:"FULL STACK WEB DEVELOPER",
            subtitle:"LET'S START A PROJECT TOGETHER",
            headerLink:"About"
    },
    service:{
            frontEnd:"Front End",
            frontEndTitle:"I'm craft solid and scalable frontend products with great user experiences.",
            backEnd:"Back End",
            backEndTitle:"I can develop the back-end part for any front-end project.",
            Mobile:"Mobile Apps",
            MobileTitle:"I also have experience in Native & Hybrid mobile app development." 
    }
  },
  hy: {
    header:{
        title:"Բարև, ես Վաչն եմ",
        title1:"ՎԵԲ ԾՐԱԳՐԱՎՈՐՈՂ",
        subtitle:"Արի սկսենք պրոյեկտը միասին ",
        headerLink:"Իմ Մասին"
},
service:{
        frontEnd:"Front End",
        frontEndTitle:"I'm craft solid and scalable frontend products with great user experiences.",
        backEnd:"Back End",
        backEndTitle:"I can develop the back-end part for any front-end project.",
        Mobile:"Mobile Apps",
        MobileTitle:"I also have experience in Native & Hybrid mobile app development." 
}
  },
  ru: {
    header:{
        title:"HI, I'm VACH",
        title1:"FULL STACK WEB DEVELOPER",
        subtitle:"LET'S START A PROJECT TOGETHER",
        headerLink:"About"
},
service:{
        frontEnd:"Front End",
        frontEndTitle:"I'm craft solid and scalable frontend products with great user experiences.",
        backEnd:"Back End",
        backEndTitle:"I can develop the back-end part for any front-end project.",
        Mobile:"Mobile Apps",
        MobileTitle:"I also have experience in Native & Hybrid mobile app development." 
}
  },
  // Add more locales as needed
};

const i18n = createI18n({
  locale: 'en', // Set the default locale
  legacy:false,
  messages,
});

export default i18n;