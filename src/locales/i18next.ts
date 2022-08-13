import entranslation from  "./en.json";
import bentranslation from  "./ben.json";

import i18next from "i18next";
import { initReactI18next } from "react-i18next";

i18next.use(initReactI18next).init({
    lng:"en",
    resources:{
        en : {
            translation : entranslation
        },
        ben :{
            translation : bentranslation
        }
    },
    fallbackLng :"en"
})

export {i18next}