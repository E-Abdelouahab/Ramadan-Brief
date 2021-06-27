import React, {useState} from 'react'
import {View} from 'react-native'
import { StyleSheet, Text, TextInput, ImageBackground, Alert, TouchableOpacity} from 'react-native';
import firebase from './../../../firebase'
import {Link, useHistory} from 'react-router-native' 
const db = firebase.firestore();


export default function AddBreakfast(props) {
  
  const [place, setPlace] = useState("")
  const [description, setDescription] = useState("")
  const [latitude, setLatitude] = useState("")
  const [longtitude, setLongtitude] = useState("")


  const addBreackFest = () => {
    if (db) {
      db.collection('breackFest').add({
          place: Number(place),
          description: description,
          latitude: latitude,
          longtitude: longtitude,
      })
       props.history.push('/findBreakfest')
  }
  }



  return (
        <View style={{flexDirection: 'column', alignItems: 'center', justifyContent: 'center', flex: 1, height: '100%'}}>
       <Text style={styles.title}>Ajouté un aide place</Text>

       <View style={{marginRight: 5}}>
       <Text>Place :</Text>
       <TextInput
       placeholder="Place"
       style={styles.input}
       onChangeText={setPlace}
       value={place}/>

       <Text>Description :</Text>
       <TextInput
       multiline={true}
       numberOfLines={5}
       placeholder="Description"
       value={description}
       onChangeText={setDescription}
       style={styles.input}/>

       <Text>Latitude :</Text>
         <TextInput
         placeholder="Latitude"
         style={styles.input}
         value={latitude}
         onChangeText={setLatitude}
       />


       <Text>Longtitude :</Text>
       <TextInput
       placeholder="Longtitude"
       style={styles.input}
       value={longtitude}
       onChangeText={setLongtitude}
     />

     
    <TouchableOpacity
     style={styles.someStyles}
     onPress={() => { addBreackFest() }}>
     <Text style={{color: 'white'}} >Ajouté Fotor</Text>
   </TouchableOpacity>


       </View>
        </View>
    )
}


const styles = StyleSheet.create({
  input: {
      width : 400,
      padding: 10,
      borderRadius:2,
      marginBottom: 5,
      borderWidth : 2,
      borderRadius: 5,
  },
  someStyles: {
    backgroundColor: '#7d1ee3',
    paddingVertical: 12,
    alignItems: 'center', 
    borderRadius: 4
  },
 title: {
   fontSize: 30,
   paddingVertical: 20
   
 }
});
