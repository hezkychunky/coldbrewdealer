export interface IProductDetail {
   productname: string;
   image: string;
   notes: string;
   price: string;
}

interface IName {
   first: string;
   last: string;
}

interface IPicture {
   large: string;
}

interface ILocation {
   country: string
}

export interface ITeams {
   name: IName;
   location: ILocation;
   picture: IPicture;
}