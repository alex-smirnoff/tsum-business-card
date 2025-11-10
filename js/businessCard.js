let varLanguage = "";
let qr = "";
const fullnameInCard = document.getElementById("fullnameInCard");
const fullnameInput = document.getElementById("fullnameInput"); 
const emailInCard = document.getElementById("emailInCard");
const emailInput = document.getElementById("emailInput"); 
const positionInCard = document.getElementById("positionInCard");
const positionInput = document.getElementById("positionInput"); 
const additionalInfoInCard = document.getElementById("additionalInfoInCard");
const additionalInfoInput = document.getElementById("additionalInfoInput"); 
const workPhoneInCard = document.getElementById("workPhoneInCard");
const workPhoneInput = document.getElementById("workPhoneInput"); 
const mobilePhoneInCard = document.getElementById("mobilePhoneInCard");
const mobilePhoneInput = document.getElementById("mobilePhoneInput");
const generateCardButton = document.querySelector(".generateCardButton");
const qrDiv = document.getElementById("qrDiv");
const getQrButton = document.querySelector(".getQrButton");
const warningMessage = document.querySelector(".warningMessage");
const successMessageQR = document.querySelector(".successMessageQR");
const successMessageCard = document.querySelector(".successMessageCard");
const errorMessage = document.querySelector(".errorMessage");
const charCount1 = document.getElementById("charCount1");
const charCount2 = document.getElementById("charCount2");
const charCount3 = document.getElementById("charCount3");
const charCount4 = document.getElementById("charCount4");
const charCount5 = document.getElementById("charCount5");

//--------------------------------dropdown with enterprises options
const webPageInCard = document.getElementById("webPageInCard");
const officeInCard = document.getElementById("officeInCard");
const dropdownInputLanguage = document.getElementById("dropdownInputLanguage");
const dropdownInputOrganization = document.getElementById("dropdownInputOrganization");
const dropdownArrowOrganization = document.getElementById("dropdownArrowOrganization");
const dropdownsInFormOrganization = document.getElementById("dropdownsInFormOrganization");
const dropdownListOrganization = document.getElementById("dropdownListOrganization");
const searchInDropdownsOrganization = document.getElementById("searchInDropdownsOrganization");
const companyInCard = document.getElementById("companyInCard");
document.addEventListener("DOMContentLoaded", () => {
    const pageLanguage = document.querySelector(".pageLanguage");
    dropdownInputLanguage.value = pageLanguage.textContent === "UKR" ? "Українська" : "English";
    varLanguage = pageLanguage.textContent;
    if (varLanguage === "UKR") {
        loadConnections(assetsUKR, webPagesOfAssetsUKR)
        positionInput.value = "Стиліст";
    }
    if (varLanguage === "ENG") {
        loadConnections(assetsENG, webPagesOfAssetsENG)
        positionInput.value = "Stylist";
    }
    const firstOrgButton = document.querySelector(".buttonsInDropdownsOrganization");
    firstOrgButton.click();
    const firstOfficeButton = document.querySelector(".buttonsInDropdownsOffice");
    firstOfficeButton.click();
    positionInput.dispatchEvent(new Event("input", { bubbles: true }));
    positionInput.dispatchEvent(new Event("change", { bubbles: true }));
    changeMainButtonsState()

})
dropdownInFormOpenClose(dropdownInputOrganization, dropdownArrowOrganization, dropdownsInFormOrganization, "#dropdownsInFormOrganization", "#searchInDropdownsOrganization", "#dropdownInputOrganization")
searchInDropdownsOrganization.addEventListener("input", function(e) {
    dropdownInFormSearch(searchInDropdownsOrganization.value.toLowerCase(), document.getElementsByClassName("buttonsInDropdownsOrganization"))
})

//--------------------------------dropdown with office locations options
const dropdownInputOffice = document.getElementById("dropdownInputOffice");
const dropdownArrowOffice = document.getElementById("dropdownArrowOffice");
const dropdownsInFormOffice = document.getElementById("dropdownsInFormOffice");
const searchInDropdownsOffice = document.getElementById("searchInDropdownsOffice");
dropdownInFormOpenClose(dropdownInputOffice, dropdownArrowOffice, dropdownsInFormOffice, "#dropdownsInFormOffice", "#searchInDropdownsOffice", "#dropdownInputOffice")
searchInDropdownsOffice.addEventListener("input", function(e) {
    const buttonsInDropdownsOffice = document.getElementsByClassName("buttonsInDropdownsOffice");
    dropdownInFormSearch(searchInDropdownsOffice.value.toLowerCase(), buttonsInDropdownsOffice)
})

//--------------------------------dropdown with language options
const dropdownArrowLanguage = document.getElementById("dropdownArrowLanguage");
const dropdownsInFormLanguage = document.getElementById("dropdownsInFormLanguage");
const searchInDropdownsLanguage = document.getElementById("searchInDropdownsLanguage");
const buttonsInDropdownsLanguage = document.getElementsByClassName("buttonsInDropdownsLanguage");
dropdownInFormOpenClose(dropdownInputLanguage, dropdownArrowLanguage, dropdownsInFormLanguage, "#dropdownsInFormLanguage", "#searchInDropdownsLanguage", "#dropdownInputLanguage")
searchInDropdownsLanguage.addEventListener("input", function(e) {
    dropdownInFormSearch(searchInDropdownsLanguage.value.toLowerCase(), buttonsInDropdownsLanguage)
})
for (let i = 0; i < buttonsInDropdownsLanguage.length; i++) {
    buttonsInDropdownsLanguage[i].addEventListener("click", () => {
        if (dropdownInputLanguage.value === buttonsInDropdownsLanguage[i].textContent) {
        }
        else{
            let assetsArrayUKR = Object.keys(assetsUKR);
            let assetsArrayENG = Object.keys(assetsENG);
            if (buttonsInDropdownsLanguage[i].textContent === "Українська" || buttonsInDropdownsLanguage[i].textContent === "Ukrainian") {
                varLanguage = "UKR";
                let position = assetsArrayENG.indexOf(companyInCard.textContent);
                let position2 = dropdownInputOffice.value === "" ? -1 : assetsENG[companyInCard.textContent].indexOf(dropdownInputOffice.value);
                loadConnections(assetsUKR, webPagesOfAssetsUKR)
                const buttonsInDropdownsOrganization = document.getElementsByClassName("buttonsInDropdownsOrganization");
                for (let j = 0; j < buttonsInDropdownsOrganization.length; j++) {
                    if (buttonsInDropdownsOrganization[j].textContent === assetsArrayUKR[position]) {
                        buttonsInDropdownsOrganization[j].click()
                    }
                }
                if (position2 != -1) {
                    const buttonsInDropdownsOffice = document.getElementsByClassName("buttonsInDropdownsOffice");
                    for (let j = 0; j < buttonsInDropdownsOffice.length; j++) {
                        if (buttonsInDropdownsOffice[j].textContent === assetsUKR[companyInCard.textContent][position2]) {
                            buttonsInDropdownsOffice[j].click()
                        }
                    }
                }            
            }
            else if (buttonsInDropdownsLanguage[i].textContent === "Англійська" || buttonsInDropdownsLanguage[i].textContent === "English") {
                varLanguage = "ENG";
                let position = assetsArrayUKR.indexOf(companyInCard.textContent);
                let position2 = dropdownInputOffice.value === "" ? -1 : assetsUKR[companyInCard.textContent].indexOf(dropdownInputOffice.value);
                loadConnections(assetsENG, webPagesOfAssetsENG)
                const buttonsInDropdownsOrganization = document.getElementsByClassName("buttonsInDropdownsOrganization");
                for (let j = 0; j < buttonsInDropdownsOrganization.length; j++) {
                    if (buttonsInDropdownsOrganization[j].textContent === assetsArrayENG[position]) {
                        buttonsInDropdownsOrganization[j].click()
                    }
                }
                if (position2 != -1) {
                    const buttonsInDropdownsOffice = document.getElementsByClassName("buttonsInDropdownsOffice");
                    for (let j = 0; j < buttonsInDropdownsOffice.length; j++) {
                        if (buttonsInDropdownsOffice[j].textContent === assetsENG[companyInCard.textContent][position2]) {
                            buttonsInDropdownsOffice[j].click()
                        }
                    }
                } 
            } 
        }
    })
}
dropdownInFormSelectChoice(buttonsInDropdownsLanguage, dropdownInputLanguage, null, null, null, null)

//--------------------------------other inputs
fullnameInput.addEventListener("input", function(e) {
    e.target.value = e.target.value.replace(/[{}\[\]<>&\^;?%]/g, "");
    changeCardContent(fullnameInput, fullnameInCard, "Повне ім'я", "Full name")
    const paragraphHeight = fullnameInCard.getBoundingClientRect().height;
    fullnameInCard.style.position = paragraphHeight > 27 ? "relative" : "absolute";
    positionInCard.style.marginTop = paragraphHeight > 27 ? "4px" : "65px";
    changeMainButtonsState()
    charCount1.textContent = `${e.target.value.length}/80`;
})
emailInput.addEventListener("input", function(e) {
    e.target.value = e.target.value.replace(/[{}\[\]<>&\^;?%]/g, "");
    changeCardContent(emailInput, emailInCard, "Електронна пошта", "Email")
    stringLengthControl(emailInCard, emailInput)
    changeMainButtonsState()
    if (emailInCard.textContent.includes("@") || emailInput.value.length === 0) {
        document.querySelector(".errorMessage2").style = null;
    }
})
emailInput.addEventListener("focusin", () => {
    inputAutoSuggestion(emailInput, "@tsum.com.ua")
})
positionInput.addEventListener("input", function(e) {
    e.target.value = e.target.value.replace(/[{}\[\]<>&\^;?%]/g, "");
    changeCardContent(positionInput, positionInCard, "Посада", "Position")
    changeMainButtonsState()
    charCount2.textContent = `${e.target.value.length}/130`;
})
additionalInfoInput.addEventListener("input", function(e) {
    e.target.value = e.target.value.replace(/[{}\[\]<>&\^;?%]/g, "");
    changeCardContent(additionalInfoInput, additionalInfoInCard, "", "")
    changeMainButtonsState()
    charCount3.textContent = `${e.target.value.length}/100`;
})
workPhoneInput.addEventListener("input", function(e) {
    let value = e.target.value;
    let hasPlus = value.startsWith('+');
    let x = value.replace(/\D/g, '').match(/(\d{0,2})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/);
    if (value === "" || value === "+") {
        e.target.value = hasPlus ? "+" : "";
    } else {
        e.target.value = (hasPlus ? '+' : '+') + 
            (x[1] ? x[1] : '') +
            (x[2] ? ' ' + x[2] : '') +
            (x[3] ? ' ' + x[3] : '') +
            (x[4] ? ' ' + x[4] : '') +
            (x[5] ? ' ' + x[5] : '');
    }
    changeCardContent(workPhoneInput, workPhoneInCard, "", "")
    changeMainButtonsState()
    charCount5.textContent = `${e.target.value.length}/35`;
})
mobilePhoneInput.addEventListener("input", function(e) {
    let value = e.target.value;
    let hasPlus = value.startsWith('+');
    let x = value.replace(/\D/g, '').match(/(\d{0,2})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/);
    if (value === "" || value === "+") {
        e.target.value = hasPlus ? "+" : "";
    } else {
        e.target.value = (hasPlus ? '+' : '+') + 
            (x[1] ? x[1] : '') +
            (x[2] ? ' ' + x[2] : '') +
            (x[3] ? ' ' + x[3] : '') +
            (x[4] ? ' ' + x[4] : '') +
            (x[5] ? ' ' + x[5] : '');
    }
    changeCardContent(mobilePhoneInput, mobilePhoneInCard, "Мобільний телефон", "Mobile number")
    changeMainButtonsState()
    charCount4.textContent = `${e.target.value.length}/35`;
})
workPhoneInput.addEventListener("focusin", () => {
    if (document.querySelector(".pageLanguage").textContent === "UKR") {
        inputAutoSuggestion(workPhoneInput, "+38 0")
    }
    else{
        inputAutoSuggestion(workPhoneInput, "+")
    }
})
mobilePhoneInput.addEventListener("focusin", () => {
    if (document.querySelector(".pageLanguage").textContent === "UKR") {
        inputAutoSuggestion(mobilePhoneInput, "+38 0")
    }
    else{
        inputAutoSuggestion(mobilePhoneInput, "+")
    }
})
fullnameInput.addEventListener("change", function(e) {
    createQrCode()
    changeMainButtonsState()
})
emailInput.addEventListener("focusout", function(e) {
    if (emailInCard.getBoundingClientRect().height < 14) {
        createQrCode()
    }
    if (!emailInCard.textContent.includes("@") && emailInput.value.length > 0){
        showInfoMessage(document.querySelector(".errorMessage2"), "#FFE2E0", null, null, null, null)
        changeBorderAndOutline(emailInput, "1px solid #FF3B30", true)
    }
    else{
        changeMainButtonsState()
    }
})
mobilePhoneInput.addEventListener("change", function(e) {
    createQrCode()
    changeMainButtonsState()
})
workPhoneInput.addEventListener("change", function(e) {
    createQrCode()
    changeMainButtonsState()
})
positionInput.addEventListener("change", function(e) {
    changeMainButtonsState()
})

//--------------------------------two main buttons in generation form
generateCardButton.addEventListener("mouseenter", function() {
    if (this.disabled === true && (fullnameInput.value.length === 0 || emailInput.value.length === 0 || dropdownInputOrganization.value.length === 0 || positionInput.value.length === 0 || mobilePhoneInput.value.length === 0 || dropdownInputOffice.value.length === 0)) {
        showInfoMessage(warningMessage, "#FFF8D9", true, document.querySelector(".warningText"), "Заповніть всі необхідні поля, щоб створити візитку", "Fill in all necessary fields to create a card")
        document.querySelector(".errorMessage2").style = null;
    }   
})
generateCardButton.addEventListener("mouseleave", function() {
    if (!emailInCard.textContent.includes("@") && emailInput.value.length > 0){
        showInfoMessage(document.querySelector(".errorMessage2"), "#FFE2E0", null, null, null, null)
        changeBorderAndOutline(emailInput, "1px solid #FF3B30", true)
    }
})
generateCardButton.addEventListener("touchstart", function() {
    if (this.disabled === true && (fullnameInput.value.length === 0 || emailInput.value.length === 0 || dropdownInputOrganization.value.length === 0 || positionInput.value.length === 0 || mobilePhoneInput.value.length === 0 || dropdownInputOffice.value.length === 0)) {
        showInfoMessage(warningMessage, "#FFF8D9", true, document.querySelector(".warningText"), "Заповніть всі необхідні поля, щоб створити візитку", "Fill in all necessary fields to create a card")
        document.querySelector(".errorMessage2").style = null;
        setTimeout(function() {
            warningMessage.style = null;
            if (!emailInCard.textContent.includes("@") && emailInput.value.length > 0){
                showInfoMessage(document.querySelector(".errorMessage2"), "#FFE2E0", null, null, null, null)
                changeBorderAndOutline(emailInput, "1px solid #FF3B30", true)
            }
        }, 5000);
    }   
})
getQrButton.addEventListener("mouseenter", function() {
    if (this.disabled === true && (fullnameInput.value.length + emailInput.value.length + dropdownInputOrganization.value.length + mobilePhoneInput.value.length + workPhoneInput.value.length === 0)) {
        showInfoMessage(warningMessage, "#FFF8D9", true, document.querySelector(".warningText"), "Заповніть всі необхідні поля, щоб створити QR-код", "Fill in all necessary fields to create a QR code")
        document.querySelector(".errorMessage2").style = null;
    }
})
getQrButton.addEventListener("mouseleave", function() {
    if (!emailInCard.textContent.includes("@") && emailInput.value.length > 0){
        showInfoMessage(document.querySelector(".errorMessage2"), "#FFE2E0", null, null, null, null)
        changeBorderAndOutline(emailInput, "1px solid #FF3B30", true)
    }
})
getQrButton.addEventListener("touchstart", function() {
    if (this.disabled === true && (fullnameInput.value.length + emailInput.value.length + dropdownInputOrganization.value.length + mobilePhoneInput.value.length + workPhoneInput.value.length === 0)) {
        showInfoMessage(warningMessage, "#FFF8D9", true, document.querySelector(".warningText"), "Заповніть всі необхідні поля, щоб створити QR-код", "Fill in all necessary fields to create a QR code")
        document.querySelector(".errorMessage2").style = null;
        setTimeout(function() {
            warningMessage.style = null;
            if (!emailInCard.textContent.includes("@") && emailInput.value.length > 0){
                showInfoMessage(document.querySelector(".errorMessage2"), "#FFE2E0", null, null, null, null)
                changeBorderAndOutline(emailInput, "1px solid #FF3B30", true)
            }
        }, 5000);
    }
})
generateCardButton.addEventListener("mouseleave", function() {
    if (this.disabled === true) {
        warningMessage.style = null;
    }
})
getQrButton.addEventListener("mouseleave", function() {
    if (this.disabled === true) {
        warningMessage.style = null;
    }
})
generateCardButton.addEventListener("click", () => {
    createQrCode()
    createBusinessCard ()
    showInfoMessage(successMessageCard, "#E4F9E8", false, null, null, null)
    setTimeout(function() {
        successMessageCard.style = null;
    }, 5000);
})
getQrButton.addEventListener("click", () => {
    createQrCode()
    showInfoMessage(successMessageQR, "#E4F9E8", false, null, null, null)
    qrDiv.querySelector("img").onload = function () {
        const canvas = document.getElementById("qrCanvas");
        canvas.width = 256;
        canvas.height = 256;
        const canvasContext = canvas.getContext("2d");
        canvasContext.clearRect(0, 0, canvas.width, canvas.height);
        canvasContext.fillStyle = "white";
        canvasContext.fillRect(0, 0, canvas.width, canvas.height);
        canvasContext.drawImage(this, 3, 3, 250, 250);
        const downloadLink = document.createElement("a");
        downloadLink.href = canvas.toDataURL("image/png");
        downloadLink.download = "QR_Code";
        downloadLink.click()
    }
    setTimeout(function() {
        successMessageQR.style = null;
    }, 5000);
})

//--------------------------------functions used in the code above
function dropdownInFormOpenClose(triggerInput, triggerArrow, triggerDivWithOptions, triggerDivWithOptionsID, triggerSearchBoxID, triggerInputID) {
    window.addEventListener("click", function(event) {
        if (triggerArrow.style.transform === "rotate(180deg)") {
            if (!event.target.matches(triggerDivWithOptionsID)) {
                if (!event.target.matches(triggerSearchBoxID)) {
                    triggerInput.style.outline = "none";
                    triggerInput.style.border = "1px rgba(154, 154, 154, 0.752) solid";
                    triggerArrow.style.transform = "rotate(0deg)";
                    triggerDivWithOptions.style.transform = "scaleY(0)";
                }
            } 
        }
        else {
            if (event.target.matches(triggerInputID)) {
                triggerInput.style.outline = "1px solid black";
                triggerInput.style.border = "1px solid black";
                triggerArrow.style.transform = "rotate(180deg)";
                triggerDivWithOptions.style.transform = "scaleY(1)";
            }
        }
    })
}
function dropdownInFormSearch(varSearch, triggerButtonsList) {
if (varSearch.length != 0) {
    for (let i = 0; i < triggerButtonsList.length; i++) {
        if (!triggerButtonsList[i].textContent.toLowerCase().includes(varSearch)) {
            triggerButtonsList[i].style.display = "none";
        }
        else{
            triggerButtonsList[i].style.display = "block";
        }
    }
}
else{
    for (let i = 0; i < triggerButtonsList.length; i++) {
        triggerButtonsList[i].style.display = "block";
    }
}
}
function dropdownInFormSelectChoice(triggerButtonsArray, triggerInput, relatedWithCard, cardParagraph, defaultValueUKR, defaultValueENG) {
    for (let i = 0; i < triggerButtonsArray.length; i++) {
        triggerButtonsArray[i].addEventListener("click", () => {
            triggerInput.value = triggerButtonsArray[i].textContent;
            if (relatedWithCard === true) {
                cardParagraph.textContent = triggerButtonsArray[i].textContent;
                changeCardContent(triggerInput, cardParagraph, defaultValueUKR, defaultValueENG)
            }
        })
    }
}
function changeCardContent(triggerInput, cardParagraph, defaultValueUKR, defaultValueENG) {
    let defaultValue = varLanguage === "UKR" ? defaultValueUKR : defaultValueENG;
    if (triggerInput.value === "") {
        cardParagraph.textContent = defaultValue;
        cardParagraph.style.color = "#D3D3D3";
    }
    else{
        cardParagraph.textContent = triggerInput.value;
        cardParagraph.style.color = "black";
    }
}
function inputAutoSuggestion(triggerInput, varAutoSuggestion) {
    if (triggerInput.value.length === 0) {
        triggerInput.value = varAutoSuggestion;
        let inputData = new InputEvent("input", {bubbles: true});
        triggerInput.dispatchEvent(inputData)
    }
}
function loadConnections(assetsList, webPagesOfAssetsList) {
    changeCardContent(dropdownInputOrganization, companyInCard, "Підприємство", "Company")
    changeCardContent(dropdownInputOffice, officeInCard, "Адреса підприємства", "Company address")
    changeCardContent(dropdownInputOffice, webPageInCard, "Сайт", "Webpage")
    changeCardContent(fullnameInput, fullnameInCard, "Повне ім'я", "Full name")
    changeCardContent(emailInput, emailInCard, "Електронна пошта", "Email")
    changeCardContent(positionInput, positionInCard, "Посада", "Position")
    changeCardContent(additionalInfoInput, additionalInfoInCard, "", "")
    changeCardContent(workPhoneInput, workPhoneInCard, "", "")
    changeCardContent(mobilePhoneInput, mobilePhoneInCard, "Мобільний телефон", "Mobile number")
    let assetsInDropdown = "";
    Object.keys(assetsList).forEach(key => {
        assetsInDropdown += `<li><button class='buttonsInDropdownsOrganization'>${key}</button></li>`
    })
    dropdownListOrganization.innerHTML = "";
    dropdownListOrganization.innerHTML = assetsInDropdown;
    const buttonsInDropdownsOrganization = document.getElementsByClassName("buttonsInDropdownsOrganization");
    dropdownInFormSelectChoice(buttonsInDropdownsOrganization, dropdownInputOrganization, true, companyInCard, "Підприємство", "Enterprize")
    const dropdownListOffice = document.getElementById("dropdownListOffice");
    for (let i = 0; i < buttonsInDropdownsOrganization.length; i++) {
        buttonsInDropdownsOrganization[i].addEventListener("click", () => {
            const dropdownInputOffice = document.getElementById("dropdownInputOffice");
            if (!assetsList[dropdownInputOrganization.value].includes(dropdownInputOffice.value)) {
                dropdownInputOffice.value = "";
                changeCardContent(dropdownInputOffice, officeInCard, "Адреса підприємства", "Company address")
            }
            let officeLocations = assetsList[buttonsInDropdownsOrganization[i].textContent];
            dropdownListOffice.innerHTML = "";
            for (let j = 0; j < officeLocations.length; j++) {
                dropdownListOffice.innerHTML += `<li><button class="buttonsInDropdownsOffice">${officeLocations[j]}</button></li>`
            }
            let buttonsInDropdownsOffice = document.getElementsByClassName("buttonsInDropdownsOffice");
            dropdownInFormSelectChoice(buttonsInDropdownsOffice, dropdownInputOffice, null, null, null, null)
            createQrCode()
            changeMainButtonsState()
            const paragraphHeight = companyInCard.getBoundingClientRect().height;
            companyInCard.style.marginTop = paragraphHeight > 14 ? "129px" : "142.5px";
            for (let j = 0; j < buttonsInDropdownsOffice.length; j++) {
                buttonsInDropdownsOffice[j].addEventListener("click", () => {
                    let officeArray = buttonsInDropdownsOffice[j].textContent.split(/\u200B\s?(.*)/s);
                    officeInCard.innerHTML = officeArray[0] + "\u200B" + "<br>" + officeArray[1];
                    officeInCard.style.color = "black";
                    changeMainButtonsState()
                })
            }
        })
    }
    for (let i = 0; i < buttonsInDropdownsOrganization.length; i++) {
        buttonsInDropdownsOrganization[i].addEventListener("click", () => {
            webPageInCard.textContent = webPagesOfAssetsList[buttonsInDropdownsOrganization[i].textContent];
            webPageInCard.style.color = "black";
        })
    }
}
function createQrCode() {
    if (fullnameInput.value.length + emailInput.value.length + dropdownInputOrganization.value.length + mobilePhoneInput.value.length + workPhoneInput.value.length === 0) {
        const imgLang = varLanguage === "UKR" ? "qrCodeExample" : "qrCodeExampleENG";
        document.querySelector(".cardBack").innerHTML = "<img class='qrCodeExample' src='img/" + imgLang + ".png' alt='Приклад QR-коду'>";
    }
    else{
        qrDiv.innerHTML = "";
        let qrString =
            "BEGIN:VCARD\n" +
            "VERSION:3.0\n" +
            "N:" + fullnameInput.value + "\n" +
            "TEL;TYPE=cell:" + mobilePhoneInput.value + "\n" +
            "TEL;TYPE=work:" + workPhoneInput.value + "\n" +
            "EMAIL:" + emailInput.value + "\n" +
            "NOTE:" + dropdownInputOrganization.value + "\n" +
            "END:VCARD";
        new QRCode(document.getElementById("qrDiv"), qrString);
        qrDiv.querySelector("img").onload = function () {
            document.querySelector(".cardBack").innerHTML = "<img src='" + this.src + "' alt='QR-код' width='112' height='112' style='position: relative;'>";
            qr = this.src;
        }
    }
}
function changeMainButtonsState() {
    if (fullnameInput.value.length === 0 || emailInput.value.length === 0 || dropdownInputOrganization.value.length === 0 || positionInput.value.length === 0 || mobilePhoneInput.value.length === 0 || dropdownInputOffice.value.length === 0 || emailInCard.getBoundingClientRect().height > 14 || (!emailInCard.textContent.includes("@") && emailInput.value.length > 0)) {
        generateCardButton.disabled = true;
    }
    else{
        generateCardButton.disabled = false;
    }
    if (fullnameInput.value.length + emailInput.value.length + dropdownInputOrganization.value.length + mobilePhoneInput.value.length + workPhoneInput.value.length === 0 || emailInCard.getBoundingClientRect().height > 14 || (!emailInCard.textContent.includes("@") && emailInput.value.length > 0)) {
        getQrButton.disabled = true;
    }
    else{
        getQrButton.disabled = false;
    }
}
function showInfoMessage (messageDiv, varBackgroundColor, textNeeded, textParagraph, varTextUKR, varTextEng) {
    messageDiv.style.position = "relative";
    messageDiv.style.marginBottom = "2px";
    messageDiv.style.transform = "translateY(0px)";
    messageDiv.style.backgroundColor = varBackgroundColor;
    messageDiv.style.opacity = "1";
    if (textNeeded === true) {
        textParagraph.textContent = document.querySelector(".pageLanguage").textContent === "UKR" ? varTextUKR : varTextEng;
    }
}
function changeBorderAndOutline (targetInput, varBorderAndOutline, outlineNeeded) {
    targetInput.style.border = varBorderAndOutline;
    if (outlineNeeded === true) {
        targetInput.style.outline = varBorderAndOutline;
    } 
}
function stringLengthControl (triggerLineInCard, triggerInput) {
    if (triggerLineInCard.getBoundingClientRect().height > 14) {
        changeBorderAndOutline(triggerInput, "1px solid #FF3B30", true)
        showInfoMessage(errorMessage, "#FFE2E0", null, null, null, null)
        successMessageQR.style = null;
    }
    else{
        if (triggerLineInCard.getBoundingClientRect().height < 14) {
            errorMessage.style = null;
        }
        if ((triggerLineInCard.getBoundingClientRect().height < 14 && triggerLineInCard.textContent.includes("@")) || emailInput.value.length === 0){
            triggerInput.style = null;
        }
    }
}
function createBusinessCard () {
    const companyMargin = companyInCard.getBoundingClientRect().height > 14 ? 87.06 : 96.17;
    const officeArray = officeInCard.textContent.split(/\u200B\s?(.*)/s);
    const cardFront = document.querySelector(".cardFront");
    let positionMargin = 43.87;
    let tempDifference = 0;
    if (fullnameInCard.getBoundingClientRect().height > 27) {
        if (window.innerWidth < 415) {
            tempDifference = 17;
        }
        if (window.innerWidth < 350) {
            tempDifference = 23;
        }
        positionMargin = (fullnameInCard.getBoundingClientRect().top - cardFront.getBoundingClientRect().top + fullnameInCard.getBoundingClientRect().height + 5 + tempDifference) * 141.73 / 210;
    }

	pdfMake.vfs = {
        'Trebuchet-MS-Normal.ttf': trebuchNormal,
        'Trebuchen-MS-Bold.ttf': trebuchBold,
        'Trebuchet-MS-Italic.ttf': trebuchItalic,
        'Trebuchet-MS-Bold-Italic.ttf': trebuchBoldItalic
    };
    pdfMake.fonts    = {
	    Roboto: {
            normal: 'Roboto-Regular.ttf',
            bold: 'Roboto-Medium.ttf',
            italics: 'Roboto-Italic.ttf',
            bolditalics: 'Roboto-Italic.ttf'
    	},
        Trebuchet: {
            normal: 'Trebuchet-MS-Normal.ttf',
	        bold: 'Trebuchen-MS-Bold.ttf',
	        italics: 'Trebuchet-MS-Italic.ttf',
	        bolditalics: 'Trebuchet-MS-Bold-Italic.ttf'
        }
    };
    var content = [
	    {
           svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1169.67 585.05">
                <g>
                    <g fill="#000000">
                    <path d="M734.08,509.51c7.12,0,12.73,1.83,16.83,5.5,4.1,3.67,6.14,8.67,6.14,15,0,6.91-2.4,12.16-7.18,15.75v.75c2.96,1.8,5.25,4.19,6.85,7.18,1.61,2.99,2.41,6.38,2.41,10.2,0,4.17-.95,7.86-2.84,11.06-1.89,3.2-4.57,5.68-8.04,7.45-3.47,1.76-7.47,2.64-12,2.64h-33.27v-75.54h31.1ZM739.8,537.84c1.54-1.47,2.32-3.43,2.32-5.88s-.77-4.41-2.32-5.88c-1.54-1.47-3.64-2.21-6.29-2.21h-15.88v16.19h15.88c2.65,0,4.74-.74,6.29-2.21ZM741.64,568.43c1.57-1.51,2.36-3.52,2.36-6.04s-.8-4.53-2.41-6.04c-1.61-1.51-3.73-2.27-6.38-2.27h-17.58v16.62h17.58c2.71,0,4.85-.75,6.43-2.27Z"/>
                    <polygon points="411.24 509.45 411.24 584.98 425.6 584.98 425.6 562.9 435.98 550.75 454.53 584.98 472.2 584.98 445.03 540.15 470.21 509.45 452.32 509.45 426.92 542.13 425.37 541.69 425.37 509.45 411.24 509.45"/>
                    <polygon points="519.24 509.45 519.24 584.98 532.05 584.98 561.64 536.83 561.64 584.98 576 584.98 576 509.45 563.19 509.45 534.48 557.15 533.74 557.26 533.74 509.45 519.24 509.45"/>
                    <rect x="632.6" y="509.45" width="14.8" height="75.53"/>
                    <rect x="622.44" y="489.13" width="11.37" height="13.14"/>
                    <rect x="645.9" y="489.13" width="11.37" height="13.14"/>
                    <rect y="423.09" width="1169.67" height="10.6"/>
                    <polygon points="0 0 0 347.48 411.98 347.48 411.98 271.8 345.13 271.8 345.13 0 253.84 0 253.84 272.69 90.11 272.69 90.11 0 0 0"/>
                    <polygon points="411.98 0 411.98 203.78 666.7 203.78 666.7 271.51 478.53 271.51 478.53 347.48 757.69 347.48 757.69 0 666.7 0 666.7 128.39 502.97 128.39 502.97 0 411.98 0"/>
                    <polygon points="824.54 0 824.54 347.48 915.53 347.48 915.53 163.44 966.48 253.84 1026.85 253.84 1079.26 160.2 1079.26 347.48 1169.67 347.48 1169.67 0 1082.5 0 997.1 154.9 912.59 0 824.54 0"/>
                    </g>
                </g>
                </svg>`,
            width: 52.19,
            absolutePosition: { x: 14.17, y: 17 }
        },
	    {
            text: companyInCard.textContent,
            fontSize: 6,
            color: [0, 0, 0],
	        absolutePosition: { x: 153.7, y: companyMargin }
        },
	    {
            text: webPageInCard.textContent,
            fontSize: 6,
            color: [0, 0, 0],
	        absolutePosition: { x: 14.17, y: 113.39 },
            bold: true
        },
	    {
            text: emailInCard.textContent,
            fontSize: 6,
            color: [0, 0, 0],
	        absolutePosition: { x: 14.17, y: 104.61 } //example without absolutePosition: text: companyInCard.innerHTML, fontSize: 8, bold: true, margin: [0, companyInCardMargin, 110.55, 0]
        },
	    {
            text: fullnameInCard.textContent,
            fontSize: 8,
            color: [0, 0, 0],
            absolutePosition: { x: 153.7 , y: 21.26 }, 
	        bold: true
        },
	    {
            text: positionInCard.textContent,
            fontSize: 6,
            color: [0, 0, 0],
            margin: [139, positionMargin - 14.7, 0, 0],
            // right margin: 153.7 - 14.7 in case of relative positioning, because it does not ignore page margins
            // top margin goes with the same principle: positionMergin - 14.7
	        // absolutePosition: { x: 153.7, y: positionMargin }
        },
	    {
            text: additionalInfoInCard.textContent,
            fontSize: 6,
            color: [0, 0, 0],
            margin: [139, 0, 0, 0],
	        // absolutePosition: { x: 153.7, y: additionalInfoMargin }
            // in case of absolute position, additionalInfoMargin was calculated with the formula: additionalInfoMargin = (positionInCard.getBoundingClientRect().top - cardFront.getBoundingClientRect().top + positionInCard.getBoundingClientRect().height + tempDifference + ... and here we adjust the value according to screen width ...) * 141.73 / 210;
        },
	    {
            text: mobilePhoneInCard.textContent,
            fontSize: 6,
            color: [0, 0, 0],
	        absolutePosition: { x: 14.17, y: 87.06 } 
        },
	    {
            text: workPhoneInCard.textContent,
            fontSize: 6,
            color: [0, 0, 0],
	        absolutePosition: { x: 14.17, y: 95.9 } 
        },
	    {
            text: officeArray[1],
            fontSize: 6,
            color: [0, 0, 0],
	        absolutePosition: { x: 153.7, y: 113.39 }
        },
	    {
            text: officeArray[0],
            fontSize: 6,
            color: [0, 0, 0],
	        absolutePosition: { x: 153.7, y: 104.61 }
        }
    ];
    var content2 = [
        {
            image: qr,
            absolutePosition: { x: 90.7, y: 36.85 },
            pageBreak: 'before',
            width: 73.7
        }
    ];
    var docDefinition = {
        content: [content, content2],
        pageSize: { width: 255.12, height: 141.73 },
	    pageMargins: [14.17, 14.17, 14.17, 14.17],
	    defaultStyle: {
    	    font: 'Trebuchet'
  	    }
    };
    
    pdfMake.createPdf(docDefinition).download('business_card.pdf');
    // pdfMake.createPdf(docDefinition).open({ filename: 'business_card.pdf' });
}
