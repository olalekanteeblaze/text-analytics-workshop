"use strict";

const { TextAnalyticsClient, AzureKeyCredential } = require("@azure/ai-text-analytics");
const keyPhraseExtraction = require("./keyPhaseExtraction");
const linkedEntityRecognition = require("./entityLinking");
const entityRecognition = require("./entityRecognition");
const languageDetection = require("./languageDetection");
const sentimentAnalysis = require("./sentimentAnalysis");
const key = '7b5e3e518b3c41e7805f41b46c48a99a'
const endpoint = 'https://new-analytics-service.cognitiveservices.azure.com/'

const textAnalyticsClient = new TextAnalyticsClient(endpoint,  new AzureKeyCredential(key));

// KeyPhraseExtraction 
keyPhraseExtraction(textAnalyticsClient)
//Entity Linking
linkedEntityRecognition(textAnalyticsClient)
//Entity Recognition
entityRecognition(textAnalyticsClient)
//Language detection
languageDetection(textAnalyticsClient)
// sentiment Analysis
sentimentAnalysis(textAnalyticsClient)
