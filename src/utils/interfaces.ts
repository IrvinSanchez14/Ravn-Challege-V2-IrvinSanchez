import { RouteProp } from "@react-navigation/native";

export interface IListProps {
  data: Array<IDataStarWarsProps>;
  refreshData: () => void;
}

export interface ICardListProps {
  property: IDataStarWarsProps;
}

export interface IDataStarWarsProps {
  name: string;
  species?: ISpeciesProps;
  homeworld: IHomeWorldProps;
  id: string;
}

export interface IBodyAPI {
  allPeople: IPeopleProps;
}

export interface ITableDetailProps {
  label: string;
  value: string;
}

export interface IGroupTableProps {
  label: string;
  value: string;
}

export interface IVehicleProps {
  name: string;
}

type RootStackParamList = {
  Home: undefined;
  Details: { title: string, id: string };
};

type DetailScreenRouteProp = RouteProp<RootStackParamList, 'Details'>;

export interface IDetailScreenProps {
  route: DetailScreenRouteProp;
}

interface ISpeciesProps {
  name: string;
}

interface IHomeWorldProps {
  name: string;
}

interface IPeopleProps {
  totalCount: number;
  people: Array<IDataStarWarsProps>;
  pageInfo: IPageInfoProps;
}

interface IPageInfoProps {
  endCursor: string;
}