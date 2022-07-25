import {useState,useEffect}  from 'react';
import { Keyboard,SafeAreaView, View, VirtualizedList, StyleSheet, Text, StatusBar,TextInput,Button ,BlurView } from 'react-native';
import { Searchbar } from 'react-native-paper';
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

export const Search = () => {
//============================input searc=============
    const [searchQuery, setSearchQuery] = useState('');
    const onChangeSearch = query => setSearchQuery(query);

    const Search =()=>{
        setSearchQuery(searchQuery);
    }

    useEffect(() => {
        // const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
        // });
        const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
          Search();
        });
        return () => {
        //  showSubscription.remove();
          hideSubscription.remove();
        };
      },);
//=====================================================
    return (
        <>
         <View style={styles.search} >
         
       <Searchbar
       onIconPress={Search}
       placeholder="Search"
       onChangeText={onChangeSearch}
       value={searchQuery}
       inputStyle={{color:"#fff"}}
       placeholderTextColor={"#fff"}
       iconColor={"#fff"}
       selectionColor={"#32CC2F"}
       style={styles.inputSearch}
         />
          
    </View>
        <View style={styles.container}>
            <VirtualizedList
                data={DATA}
                initialNumToRender={4}
                renderItem={({ item }) => <Item title={searchQuery} />}
                keyExtractor={(item, index) => index.toString()}
                getItemCount={getItemCount}
                getItem={getItem}
            />
        </View>
       
        </>
    )
}

const styles = StyleSheet.create({
    //=====Search========
    search:{
    justifyContent:"center",
    // position:"absolute",
    
    // zIndex:-9,

    width:"100%",
    },
    inputSearch:{
        backgroundColor:"#535353",
        borderBottomLeftRadius:15,
        borderBottomRightRadius:15,
    },
    //=====================
    container: {
        flex: 1,
    },
    item: {
      backgroundColor: '#D2CFD6',
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