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
    },
    about:{
          aboutTitle:"About",
          aboutTitle1:"Myself",
          descriptionVach:"I'm Vach, Full-Stack Web Developer with 2 years of experience from Armenia.I started my career of Web Developer since 2021.",
          descriptionSoftSkills:"I'm a well organized person, problem solver, independent employee with high attention to details. Fan of reading and listening to music, outdooractivities with my friends, TV series and books about pschology and personal development.",
          descriptionProgSkills:"My main using programing languages is JavaScript and PHP.For front-end part i usually work with React,Vue and Next for back-end part I use Laravel and NodeJS's frameworks like Express.js, Nest.js.",
          aboutTitle2:"My",
          aboutTitle3:"Skills & Experiences",
          descriptionExperience:"I’m a passionate full-stack JavaScript developer with a journey that began in 2021 when I delved into programming independently. In 2022, I proudly graduated from Relq Technology School, earning a certification to validate my skills. ",
          descriptionExperience1:"I gained hands-on experience working on Upwork for 10 months, focusing on React. Later, I spent 9 months at YogurtTeam as a Full Stack Developer, utilizing a diverse tech stack including React, Nest, Next, Vue, Laravel, and both SQL and NoSQL databases. Excited to bring my expertise and enthusiasm to new challenges!",
          descriptionExperience2:"I'm a student at ASUE, and my original major is finance. However, I've been transitioning  to the IT sphere because I didn't find myself enjoying the traditional finance role. My aspiration is to combine my financial knowledge with my IT expertise to develop innovative products that will have a significant impact. I'm confident that both finance and IT will remain relevant and in high demand for the foreseeable future. ",
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
},
      about:{
        aboutTitle:"ԻՄ",
        aboutTitle1:"ՄԱՍԻՆ",
        descriptionVach:"Ես Վաչն եմ, ՎԵԲ ծրագրավորող ավելի քան 2 տարվա փորձով։ Իմ կարիերան, որպես ՎԵԲ ծրագրավորող սկսել եմ 2021թ․ ից",
        descriptionSoftSkills:"Ես կազմակերպված, խնդիրներ լուծող, անկախ աշխատող, մանրուքների նկատմամբ մեծ ուշադրություն դարձնող մարդ և ծրագրավորող եմ: Գործից դուրս սիրում եմ գրքեր կարդալ,փոդքասթներ լսել անձնական աճի և հոգեբանության մասին և իհարկե ընկերներիս հետ հաճելի ժամանակ անցկացնել։",
        descriptionProgSkills:" Մինչև 2025թ․ նպատակ ունեմ միջազգային ՏՏ թիմ հավաքել և փոխել աշխարհը դեպի լավը։",
        aboutTitle2:"Իմ",
        aboutTitle3:"հմտությունները և փորձը",
        descriptionExperience:"Ես JavaScript ծրագրավորող եմ,իմ ծրագրավորման ուղղին սկսվեց 2021 թվականից, երբ ես ինքնուրույն սկսեցի ուսումնասիրել  ծրագրավորումը: 2022 թվականին ես ավարտեցի Relq տեխնոլոգիական դպրոցը՝ ստանալով վկայական՝ իմ հմտությունները հաստատելու համար:",
        descriptionExperience1:"Ես ունեմ 10 ամիս Upwork-ում աշխատելու գործնական փորձ՝ կենտրոնանացած React-ի վրա: Հետագայում ես 9 ամիս անցկացրեցի YogurtTeam-ում որպես Full Stack Developer՝ օգտագործելով տարբեր տեխնոլոգիական լեզուներ, ներառյալ React, Nest, Next, Vue, Laravel և SQL և NoSQL տվյալների բազաները: Ոգևորված եմ իմ փորձն ու գիտելիքները նոր մարտահրավերների մեջ փորձելու համար:",
        descriptionExperience2:"Ես նաև ՀՊՏՀ ուսանող եմ, նախնական մասնագիտությունս ֆինանսիստն է: Այնուամենայնիվ, ես մտա ՏՏ ոլորտ, քանի որ չգտա ինձ ֆինանսական և բանկային աշխատողի մեջ: Իմ ձգտումն է համատեղել իմ ֆինանսական գիտելիքները, ՏՏ փորձի հետ՝ զարգացնելու նորարարական ապրանքներ, որոնք զգալի ազդեցություն կունենան աշխարհի վրա:",
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
},
    about:{
      aboutTitle:"About",
      aboutTitle1:"Myself",
      descriptionVach:"I'm Vach, Full-Stack Web Developer with 2 years of experience from Armenia.I started my career of Web Developer since 2021.",
      descriptionSoftSkills:"I'm a well organized person, problem solver, independent employee with high attention to details. Fan of reading and listening to music, outdooractivities with my friends, TV series and books about pschology and personal development.",
      descriptionProgSkills:"My main using programing languages is JavaScript and PHP.For front-end part i usually work with React,Vue and Next for back-end part I use Laravel and NodeJS's frameworks like Express.js, Nest.js.",
      aboutTitle2:"My",
      aboutTitle3:"Skills & Experiences",
      descriptionExperience:"I’m a passionate full-stack JavaScript developer with a journey that began in 2021 when I delved into programming independently. In 2022, I proudly graduated from Relq Technology School, earning a certification to validate my skills. ",
      descriptionExperience1:"I gained hands-on experience working on Upwork for 10 months, focusing on React. Later, I spent 9 months at YogurtTeam as a Full Stack Developer, utilizing a diverse tech stack including React, Nest, Next, Vue, Laravel, and both SQL and NoSQL databases. Excited to bring my expertise and enthusiasm to new challenges!",
      descriptionExperience2:"I'm a student at ASUE, and my original major is finance. However, I've been transitioning  to the IT sphere because I didn't find myself enjoying the traditional finance role. My aspiration is to combine my financial knowledge with my IT expertise to develop innovative products that will have a significant impact. I'm confident that both finance and IT will remain relevant and in high demand for the foreseeable future. ",
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