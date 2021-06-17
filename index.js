"use strict";

const { TextAnalyticsClient, AzureKeyCredential } = require("@azure/ai-text-analytics");
const sentimentAnalysis = require("./sentimentAnalysis");
const key = '7b5e3e518b3c41e7805f41b46c48a99a'
const endpoint = 'https://new-analytics-service.cognitiveservices.azure.com/'

const textAnalyticsClient = new TextAnalyticsClient(endpoint,  new AzureKeyCredential(key));
// sentiment Analysis
sentimentAnalysis(textAnalyticsClient)
