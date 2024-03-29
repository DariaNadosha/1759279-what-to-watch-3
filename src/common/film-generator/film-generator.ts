import dayjs from 'dayjs';
import { MockData } from '../../types/mock-data.type.js';
import { generateRandomValue, getRandomItem, getRandomItems } from '../../utils/random.js';
import { FilmGeneratorInterface } from './film-generator.interface.js';


const MIN_YEAR = 1990;
const MAX_YEAR = 2008;

const MIN_RATING = 1;
const MAX_RATING = 10;

const MIN_LENGTH = 115;
const MAX_LENGTH = 130;

const MIN_COMMENT_COUNT = 0;
const MAX_COMMENT_COUNT = 10;

const FIRST_WEEK_DAY = 1;
const LAST_WEEK_DAY = 7;

export default class FilmGenerator implements FilmGeneratorInterface {
  constructor(private readonly mockData: MockData) {}

  public generate(): string {
    const title = getRandomItem<string>(this.mockData.titles);
    const description = getRandomItem<string>(this.mockData.descriptions);
    const filmDate = dayjs().subtract(generateRandomValue(FIRST_WEEK_DAY, LAST_WEEK_DAY), 'day').toISOString();
    const genre = getRandomItems<string>(this.mockData.genres).join(';');
    const filmYear = generateRandomValue(MIN_YEAR, MAX_YEAR).toString();
    const rating = generateRandomValue(MIN_RATING, MAX_RATING).toString();
    const preview = getRandomItem<string>(this.mockData.previews);
    const video = getRandomItem<string>(this.mockData.videos);
    const actors = getRandomItems<string>(this.mockData.actors).join(';');
    const director = getRandomItem<string>(this.mockData.directors);
    const filmLength = generateRandomValue(MIN_LENGTH, MAX_LENGTH).toString();
    const commentsCount = generateRandomValue(MIN_COMMENT_COUNT, MAX_COMMENT_COUNT).toString();
    const author = getRandomItem<string>(this.mockData.names);
    const email = getRandomItem<string>(this.mockData.emails);
    const avatar = getRandomItem<string>(this.mockData.avatars);
    const poster = getRandomItem<string>(this.mockData.posters);
    const backgroundImage = getRandomItem<string>(this.mockData.backgroundImages);
    const colorBackgroundImage = getRandomItem<string>(this.mockData.colorBackgroundImages);

    const [firstname, lastname] = author.split(' ');

    return [
      title, description, filmDate, genre, filmYear, rating, preview, video, actors, director, filmLength, commentsCount , firstname, lastname,
      email, avatar, poster, backgroundImage, colorBackgroundImage,
    ].join('\t');
  }
}


