import { Item } from '../types';

export function formatRawShows(item: any): Item {
 const { score, show } = item;
 return {
     id: show.id,
     pic: show.image ? show.image.medium : '', // unsafe...
     title: show.name,
     score,
     description: show.summary,
 };
}
