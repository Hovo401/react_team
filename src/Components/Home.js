import React from 'react';
import { SafeAreaView, View, VirtualizedList, StyleSheet, Text, StatusBar } from 'react-native';

//========================
const DATA = [];

const getItem = (data, index) => ({
 id: Math.random().toString(12).substring(0),
 title: `Item ${index + 1}`
});

const getItemCount = (data) => 10;

const Item = ({ title }) => (
 <View style={styles.item}>
   <Text style={styles.title}>{title}</Text>
 </View>
);
//========================

export const Home = () => {

    return (
        <View style={{ flex: 1}}>
            <VirtualizedList
                data={DATA}
                initialNumToRender={1}
                renderItem={({ item }) => <Item title={item.title} />}
                keyExtractor={(item, index) => index.toString()}
                getItemCount={getItemCount}
                getItem={getItem}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight,
    },
    item: {
      backgroundColor: 'rgba(.2,.2,.2,.6)',
      height: 150,
      justifyContent: 'center',
      marginVertical: 8,
      marginHorizontal: 16,
      padding: 20,
    },
    title: {
      fontSize: 32,
    },
  });