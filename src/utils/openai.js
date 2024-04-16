import OpenAI from 'openai';
import { OPENAI_APIKEY } from './constants';

const openai = new OpenAI({
  apiKey: OPENAI_APIKEY, // defaults to process.env["OPENAI_API_KEY"]
  dangerouslyAllowBrowser: true
});

export default openai;