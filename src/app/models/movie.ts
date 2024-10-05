import { IActor } from "./actor";

export class IMovie{
    id:number=0;
    href: string='';
    title: string='';
    year: number=0;
    cast: IActor[]=[];
    genres: string[]=[];
    extract: string='';
    thumbnail: string='';
    thumbnailWidth: number=0;
    thumbnailHeight: number=0;
}