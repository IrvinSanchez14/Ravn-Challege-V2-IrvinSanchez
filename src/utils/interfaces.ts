export interface IListProps {
  data: Array<IDataStarWarsProps>;
}

export interface ICardListProps {
  property: IDataStarWarsProps;
}

export interface IDataStarWarsProps {
  name: string;
  species?: ISpeciesProps;
  homeworld: IHomeWorldProps;
}

interface ISpeciesProps {
  name: string;
}

interface IHomeWorldProps {
  name: string;
}