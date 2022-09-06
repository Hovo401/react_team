import { useState, useEffect } from 'react';
import { Keyboard, Image, View, VirtualizedList, StyleSheet, Text, Button } from 'react-native';
import { Searchbar } from 'react-native-paper';
import axios from "axios";
import * as FileSystem from 'expo-file-system'
import * as Permissions from 'expo-permissions'
import * as MediaLibrary from 'expo-media-library'

//==================== download================

//=================================================

const downloadFile = async ({ uri, fileName }) => {
    const targetUri = FileSystem.documentDirectory + fileName;
    alert("download start " + fileName)
    alert(FileSystem.documentDirectory)
    const downloadedFile = await FileSystem.downloadAsync(uri, targetUri)
    if (downloadedFile.status === 200) {

        if (Platform.OS === 'android') {
            const permission = await Permissions.askAsync(Permissions.MEDIA_LIBRARY)

            if (permission.status !== 'granted') {
                return
            }

            const asset = await MediaLibrary.createAssetAsync(downloadedFile.uri)
            const album = await MediaLibrary.getAlbumAsync('Download')
            await MediaLibrary.addAssetsToAlbumAsync([asset], album, false)

        }
    }
}
//========================list otver=====================
const DATA = [];

const getItem = (data, index) => ({
    id: Math.random().toString(12).substring(0),
    title: `Item ${index + 1}`
});
const getItemCount = (data) => { return JSON.parse(otvet).length };

const RenderList = ({ otvet, playControl }) => {
    return (
        <VirtualizedList
            style={{ marginBottom: 60, }}
            data={DATA}
            initialNumToRender={4}
            renderItem={({ item, index }) => <Item playControl={playControl} img={JSON.parse(otvet)[index].img + ""} artist={JSON.parse(otvet)[index].artist + ""} title={JSON.parse(otvet)[index].title + ""} url={"https://vrit.me" + JSON.parse(otvet)[index].urlDow + ""} />}
            keyExtractor={(item, index) => index.toString()}
            getItemCount={() => JSON.parse(otvet).length}
            getItem={getItem}
        />
    )
}


const Item = ({ title, playControl, url, artist, img }) => {
    console.log(img)
    return (
        <View style={styles.item}>
            {/* <Text style={styles.title}>{title}</Text>
   <Button 
   title={"play"}
    onPress={()=>{playControl({uri:url});}}
   ></Button>
   <Button 
   title={"download"}
    onPress={()=>{
        downloadFile({uri:url,fileName:title+".mp3"});
          
    }}
   ></Button> */}
            <View style={styles.img}>

                <Image source={{ uri: img }}
                    style={styles.img}
                ></Image>
            </View>
            <View style={styles.text}>
                <Text style={styles.text_}>{title}</Text>
                <Text style={styles.text_}>{artist}</Text>
            </View>
            <View style={styles.play_d}>
                <Button
                    title={"play"}
                    onPress={() => { playControl({ uri: url }); }}
                ></Button>
                <Button
                    title={"add"}
                    onPress={() => {
                        downloadFile({ uri: url, fileName: title + ".mp3" });

                    }}
                ></Button>
            </View>
        </View>
    );
}
//=========================================================



//====================== loading Effect =========================
const gif = require("../file/vzlom.gif");
const Render_loading_effect = ({ return_on }) => {

    if (return_on) {
        return (
            <>
                <View style={{ width: "100%", alignItems: "center" }}>
                    <Text style={{ color: "#0a0", }}>Loading...</Text>
                    {/* <Image 
           source={gif}  
           style={{width: 480,maxWidth:"95%",alignItems:"center" ,marginTop:10,}} 
        /> */}
                </View>
            </>
        )
    } else {
        return <View></View>
    }
}
const MaqurEj = ({ maqurEj }) => {

    if (maqurEj != '') {
        return (
            <>

                <Text style={{ color: "#0a0", textAlign: "center", marginTop: 10, fontSize: 20, }}>{maqurEj}</Text>

            </>
        )
    } else {
        return <View></View>
    }
}
//===============================================================



export const Search = ({ recording, stopRecording, startRecordin, playControl }) => { //================================================================== >> Main<<<<<<<<<<<<<<<<<<


    //============================input searc=============
    const [search, setSearch] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const onChangeSearch = query => setSearchQuery(query);

    const Search_ = () => {
        if (search != searchQuery) {
            setSearch(searchQuery);
            sendGetRequest(searchQuery);
        }
    }

    useEffect(() => {
        // const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
        // });
        const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
            Search_();
        });
        return () => {
            //  showSubscription.remove();
            hideSubscription.remove();
        };
    });
    //=======================================================
    //================get zapros axsios========================
    const [return_on, setReturn_on] = useState(false);
    const [maqurEj, setMaqurEj] = useState('Hack Vkontakte');
    const [otvet, setOtvet] = useState('[]');

    const sendGetRequest = async (searchR) => {
        setReturn_on(true);
        await setMaqurEj("");
        try {
            const resp = await axios.get("http://hovo.55.k.yan.eternalhost.info/api/vk.php?json=on&q=" + searchR);
            await setOtvet(resp.data);
            await setMaqurEj("");
            if (JSON.parse(resp.data).length == 0) {
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
                    onIconPress={Search_}
                    placeholder="Search"
                    onChangeText={onChangeSearch}
                    value={searchQuery}
                    inputStyle={{ color: "#fff" }}
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
    search: {
        justifyContent: "center",
        // position:"absolute",



        width: "100%",
    },
    text:{
        flex:1,
        height:"100%",
    },
    text_:{
        color:"#fff",
        marginTop:2,
    },
    play_d:{
        width:80,
        height:"100%"
    },
    img: {
        height: "100%",
        width: 80,
        backgroundColor: "gray",
        borderRadius: 100,

    },
    inputSearch: {
        backgroundColor: 'rgba(100, 100, 180, 0.5)', 
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
    },
    //=====================
    container: {
        flex: 1,
    },
    item: {
        backgroundColor: 'rgba(170,172,172,.3)',
        borderRadius: 10,
        borderTopRightRadius: 100,
        borderBottomLeftRadius: 100,
        borderTopLeftRadius: 100,
        height: 80,
        justifyContent: 'center',
        marginVertical: 8,
        marginHorizontal: 16,
        borderBottomWidth: 3,
        borderBottomColor: "white",
        flexDirection: "row",
    },
    title: {
        fontSize: 32,
    },
});