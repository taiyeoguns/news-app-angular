import { NewsItem } from './NewsItem'

export interface Headline {
	
	status: string;
	totalResults: string;
	articles: NewsItem[];

}