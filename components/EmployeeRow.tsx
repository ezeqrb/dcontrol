import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';

export const EmployeeRow = ({ name, phone, image }: any) => {
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <View style={styles.details}>
          <Image source={image} style={styles.image} />
          <View style={styles.texts}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.name}>{phone}</Text>
          </View>
        </View>
        <View>
          <Ionicons name="call" size={20} color="#000" />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '80%',
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    border: '1px solid black',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  details: {
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  texts: {
    marginLeft: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    fontWeight: 'bold',
  },
});
