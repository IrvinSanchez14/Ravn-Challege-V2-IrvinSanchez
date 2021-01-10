import {useQuery} from '@apollo/client';
import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {Text, View} from 'react-native';

import {GET_DESCRIPTION_CHARACTER} from '../../utils/graphql';
import styles from './style';
import TableDetail from '../../components/TableDetail';
import ErrorMessage from '../../components/ErrorMessage';
import Loader from '../../components/Loader';
import {IDetailScreenProps, IVehicleProps} from '../../utils/interfaces';

const Details = (props: IDetailScreenProps) => {
  const navigationScreen = useNavigation();
  const {title, id} = props.route.params;
  const {loading, error, data} = useQuery(GET_DESCRIPTION_CHARACTER, {
    variables: {
      id,
    },
  });

  useEffect(() => {
    navigationScreen.setOptions({
      title: title,
    });
  }, []);

  if (error) {
    return <ErrorMessage />;
  }

  return (
    <View style={styles.container}>
      {loading && <Loader />}
      {!loading && (
        <>
          <Text style={styles.titleTable}>General Information</Text>
          <View style={styles.containerDetail}>
            <TableDetail label="Eye Color" value={data?.person.eyeColor} />
          </View>
          <View style={styles.containerDetail}>
            <TableDetail label="Hair Color" value={data?.person.hairColor} />
          </View>
          <View style={styles.containerDetail}>
            <TableDetail label="Skin Color" value={data?.person.skinColor} />
          </View>
          <View style={styles.containerDetail}>
            <TableDetail label="Birth Year" value={data?.person.birthYear} />
          </View>

          <Text style={styles.titleTable}>Vehicle</Text>
          {data?.person.vehicleConnection.vehicles.map(
            (vehicle: IVehicleProps, index: number) => {
              return (
                <View key={index} style={styles.containerDetail}>
                  <TableDetail label={vehicle.name} value="" />
                </View>
              );
            },
          )}
        </>
      )}
    </View>
  );
};

export default Details;
