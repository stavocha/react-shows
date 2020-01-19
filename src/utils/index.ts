import { Item } from '../types';

export function formatRawShowInList(item: any): Item {
 const { score, show, _embedded } = item;
 return formatRawSingleShow({ score, _embedded , ...show });
}
export function formatRawSingleShow(item: any): Item {
 const { id, score, name, image, summary, _embedded } = item;
 return {
     id:id,
     pic: image ? image.medium : '', // unsafe...
     title: name,
     score,
     description: summary,
     relatedItems: _embedded && _embedded.cast ? _embedded.cast.map(formatRawCast): [],
 };
}
function formatRawCast(item: any): Item {
 const { person, _embedded } = item;
 return {
     id: person.id,
     pic: person.image ? person.image.medium : '', // unsafe...
     title: person.name,
     description: person.summary,
     relatedItems: _embedded && _embedded.shows ? _embedded.shows.map(formatRawSingleShow): [],
 };
}
