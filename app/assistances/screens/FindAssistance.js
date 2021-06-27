import React, {useState, useEffect} from 'react';
import {View, Text, StatusBar, Button} from 'react-native';
import { StyleSheet} from 'react-native';
import MapView, { Callout, Marker, PROVIDER_GOOGLE } from "react-native-maps";
import firebase from './../../../firebase';
import database from '@react-native-firebase/database';
const db = firebase.firestore();

export default function FindBreakfast() {

  const [mapData, setMapData] = useState([])

  async function getData() {

            

    const assistances = firebase.firestore().collection('assistance')
    const querySnapshot = await assistances.get()
    const tempDoc = querySnapshot.docs.map((doc) => {
      return { id: doc.id, ...doc.data() }
    })
    // console.log('====================================');
    // console.log(tempDoc);
    // console.log('====================================');
    const allAssistances = tempDoc;
    setMapData(allAssistances)
    console.log('********************************');
    console.log(allAssistances);
    console.log('********************************');
    return allAssistances;
}

  const mapss =[{latitude:32.28306784769214,longitude:-9.238074630406645 },{latitude:32.285144469410014,longitude:-9.243672819824713 }]
function setMap(){
  return mapData.map(item => <Marker key={item.id}   coordinate={{latitude: item.latitude , longitude: item.longtitude }}>
    <Callout
    tooltip
    onPress={() => {
      reservation(item.id, item.place);
    }}
  >
    <View style={styles.modal}>
      <Text style={styles.title}>Description</Text>
      <Text style={styles.text}>{item.description}</Text>
      <Text style={styles.title}>numéro de place</Text>
      {item.place ? (
        <Text style={styles.text}>{item.place}</Text>
      ) : (
        <Text style={styles.full}>Full</Text>
      )}
      <Text style={styles.press}>Ajouté votre demande</Text>
    </View>
  </Callout>
    </Marker>)
}
    

console.log("hhkddbhsqhdqs");

  const reservation = (id, place) => {
    if (place > 0) {
      db.collection('assistance')
        .doc(id)
        .update({
          place: place - 1,
        });
      console.log(id);
    }
  };



  return (
        <View >

        <StatusBar translucent={false} />

        <View style={{paddingTop: 100}}>
        <Button
         onPress={() => getData()}
         title="Get Data"/>
        </View>

        <View style={styles.caderMap}>
       <MapView 
       provider={PROVIDER_GOOGLE}
       style={styles.map}
       initialRegion={{
         latitude: 32.29512789087331,
         longitude: -9.233774559186537,
         latitudeDelta: 0.0222,
         longitudeDelta: 0.0121,
        }}
        >
        
        {setMap()}
     </MapView>
       </View>

        </View>
    )
}


const styles = StyleSheet.create({
 map: {
   flex: 1,
   width: 400,
   height: 'auto',
 },

 someStyles: {
  backgroundColor: '#7018db',
  paddingHorizontal: 10, 
  paddingVertical: 12,
  marginHorizontal: 5,
  alignItems: 'center', 
  borderRadius: 4
},
reservation: {
  flexDirection: 'row', 
  justifyContent: 'space-around',
  paddingVertical: 20
},
value: {
  borderColor: '#a039d4',
  borderWidth: 3,
  flexDirection: 'row',
  alignItems: 'center',
  paddingHorizontal: 20,
  paddingHorizontal: 20,
  borderRadius: 5
},
text: {
  textAlign: "center",
  fontSize: 15,
  fontFamily: "monospace",
},
full: {
  textAlign: "center",
  fontSize: 15,
  fontFamily: "monospace",
  color: "red",
},
title: {
  textAlign: "center",
  fontSize: 20,
  fontFamily: "monospace",
  fontWeight: "bold",
},
press: {
  textAlign: "center",
  fontSize: 15,
  fontFamily: "monospace",
  color: "blue",
  textDecorationLine: "underline",
},
modal: {
  backgroundColor: "white",
  width: 200,
  padding: 10,
  borderRadius: 10,
  textAlign: "center",
}
});
