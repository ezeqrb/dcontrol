import { EmployeeRow } from 'components/EmployeeRow';
import FloatingButton from 'components/FloatingButton';
import { StoreContext } from 'context/store.context';
import { useContext } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';

const data = [
  {
    id: '1',
    name: 'Juan Perez',
    phone: '55443322',
    image: require('../../../assets/employeePic.png'),
    title: 'Third Item',
  },
  {
    id: '2',
    name: 'Maria Lopez',
    phone: '77889900',
    image: require('../../../assets/employeePic.png'),
    title: 'Third Item',
  },
];

export default function Page() {
  const { user } = useContext(StoreContext);

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => <EmployeeRow name={item.name} phone={item.phone} image={item.image} />}
        keyExtractor={(item) => item.id}
      />
      <FloatingButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    flex: 1,
    justifyContent: 'center',
  },
  separator: {
    height: 1,
    marginVertical: 30,
    width: '80%',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
