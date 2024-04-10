import Configuration from "openai";
import OpenAIApi from "openai"

const configuration  = new Configuration({
    apiKey: process.env.OPEN_API_KEY,
});

//const openai = new OpenAIApi(configuration);

const openai = new OpenAIApi({apiKey: process.env.OPEN_API_KEY});

export default openai;

