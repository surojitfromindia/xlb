

type localsType ="en" | "ben"

const LocalsArray : {label: string, value: localsType}[] = [
    {
        label : "Bengali",
        value : "ben",
    },
    {
        label  : "English",
        value : "en"
    }
]

const defaultLanguage   = "en"

export { LocalsArray, defaultLanguage}
export type {localsType}