import { StoreContext } from 'context/store.context';
import { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FloatingButton from 'components/FloatingButton';

const Employees = () => {
  const { user } = useContext(StoreContext);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Employees</Text>
      <View style={styles.separator} />
      <FloatingButton />
    </View>
  );
};

export default Employees;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
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
