// There are 4 JSON objects in this file. Each object has EQUAL NUMBER OF KEYS, which means that, for example, key 5 in asstetsUKR corresponds to key 5 in webPagesOfAssetsUKR and to key 5 in assetsENG, webPagesOfAssetsUKR.
// That kind of order should be kept to allow switching between languages without resetting choosen options.
// The \u200B symbol is MANDATORY IN ALL VALUES OF THE KEYS. It allows to segment the line without breaking the rules of word wrapping in Ukrainian and English. For example, when there is only a number left on the line, without name of the street.
// Usually \u200B symbop is used here after city names. E.g.  "[м. Київ,\u200B Лабораторний провулок, 12]"
// But in some occasions the part after \u200B is too long and does not fit into the line. So, we use it like "[м. Бровари, вул. Богдана\u200B Хмельницького, 1]".
//Where \u200B is used in key VALUES (not in keys!), there the line breaks. 

let assetsUKR = {
	"ТОВ «ЦУМ Київ»": ["м. Київ,\u200B вул. Хрещатик, 38"]
}
let webPagesOfAssetsUKR = {
    "ТОВ «ЦУМ Київ»": "tsum.ua"
}
let assetsENG = {
	"TSUM Kyiv LLC": ["Kyiv,\u200B 38 Khreshchatyk Street"]
}
let webPagesOfAssetsENG = {
    "TSUM Kyiv LLC": "tsum.ua"
}

