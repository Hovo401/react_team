import {useState,useEffect}  from 'react';
import { Keyboard,Image, View, VirtualizedList, StyleSheet, Text,Button } from 'react-native';
import { Searchbar } from 'react-native-paper';
import axios from "axios";
//========================list otver=====================
const DATA = [];

const getItem = (data, index) => ({
 id: Math.random().toString(12).substring(0),
 title: `Item ${index + 1}`
});
const getItemCount = (data) =>{return JSON.parse(otvet).length};

const RenderList=({otvet,playControl})=>{
    return(
        <VirtualizedList
        data={DATA}
        initialNumToRender={4}
        renderItem={({ item ,index}) => <Item  playControl={playControl} title={JSON.parse(otvet)[index].title+""} url={"https://vrit.me"+JSON.parse(otvet)[index].urlDow+""} />}
        keyExtractor={(item, index) => index.toString()}
        getItemCount={()=>JSON.parse(otvet).length}
        getItem={getItem}
    />
    )
}


const Item = ({ title,playControl,url}) => (
 <View style={styles.item}>
   <Text style={styles.title}>{title}</Text>
   <Button 
   title={"play"}
    onPress={()=>{playControl({uri:url});}}
   ></Button>
   <Button 
   title={"download"}
    onPress={()=>{fetch(url)}}
   ></Button>
 </View>
);
//=========================================================

//====================== loading Effect =========================
const gif = require("../file/vzlom.gif");
const Render_loading_effect=({return_on})=>{
    
    if(return_on) {return(
        <>
        <View style={{width:"100%",alignItems:"center"}}>
            <Text style={{color:"#0a0",}}></Text>
        <Image 
           source={gif}  
           style={{width: 480,maxWidth:"95%",alignItems:"center" ,marginTop:10,}} 
        />
        </View>
    </>
    )}else{
    return <View></View>}
}
const MaqurEj=({maqurEj})=>{
    
    if(maqurEj!='') {return(
        <>
        
            <Text style={{color:"#0a0",textAlign:"center",marginTop:10,fontSize:20,}}>{maqurEj}</Text>
       
    </>
    )}else{
    return <View></View>}
}
//===============================================================



export const Search = ({recording, setRecording,stopRecording,startRecordin,playControl}) => { //================================================================== >> Main<<<<<<<<<<<<<<<<<<



//============================input searc=============
const [search, setSearch] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const onChangeSearch = query => setSearchQuery(query);

    const Search =()=>{
        setSearch(searchQuery);
        sendGetRequest(searchQuery);
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
//=======================================================
//================get zapros axsios========================
const [return_on,setReturn_on]=useState(false);
const [maqurEj,setMaqurEj]=useState('Hack Vkontakte');
const [otvet, setOtvet] = useState('[]');

const sendGetRequest = async (searchR) => {
    setReturn_on(true);
    await setMaqurEj("");
    try {
        const resp = await axios.get("http://hovo.55.k.yan.eternalhost.info/api/vk.php?json=on&q="+searchR);
        await setOtvet( resp.data);
        await setMaqurEj("");
        if(JSON.parse(resp.data).length==0){
            setMaqurEj("Hack Vkontakte -> information not found");
        }
    } catch (err) {
         setMaqurEj("Hack Vkontakte -> information not found");
    }
    await setReturn_on(false);
};
//=======================================================
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
            <MaqurEj maqurEj={maqurEj}></MaqurEj>
        <Render_loading_effect return_on={return_on}></Render_loading_effect>
           <RenderList otvet={otvet} playControl={playControl} recording={recording} stopRecording={stopRecording} startRecordin={startRecordin}></RenderList>
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
      backgroundColor: '#4F4D50',
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