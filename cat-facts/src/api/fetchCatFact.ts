import axios from 'axios';

interface CatFact {
    fact: string;
}

export const fetchCatFact = async (): Promise<CatFact> => {
        const response = await axios.get<CatFact>('https://catfact.ninja/fact');
        console.log(response.data);
        return response.data;
};

