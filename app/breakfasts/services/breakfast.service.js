import firebase from './../../../firebase'
const db = firebase.firestore()


export class BreackFestService {
    constructor(){}


    async getAllBreakFest (){
        const data = firebase.firestore().collection("breackFest")
        const querySnapshat= await data.get()
        const tempDoc = querySnapshat.docs.map((doc) => {
            return {id: doc.id, ...doc.data()}
        })

        const allBreackFest = tempDoc

        return allBreackFest;
    }
}