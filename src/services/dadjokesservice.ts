import axios, {AxiosPromise} from 'axios';
import IJoke from '@/interfaces/IJoke';

const DadJokesURL = 'https://icanhazdadjoke.com/';


export default class DadJokesService {
  static getRandomDadJoke(): AxiosPromise<IJoke> {
    const config = {
      headers: {
        Accept: 'application/json',
      },
    };
    return axios.get<IJoke>(DadJokesURL, config);
  }
};
