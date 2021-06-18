async function languageDetection(client) {

    const languageInputArray = [
        "Ce document est rédigé en Français.",
        "This document is written in English"
    ];
    const languageResult = await client.detectLanguage(languageInputArray);

    languageResult.forEach(document => {
        console.log(`ID: ${document.id}`);
        console.log(`\tPrimary Language ${document.primaryLanguage.name}`)
    });
}
module.exports = languageDetection