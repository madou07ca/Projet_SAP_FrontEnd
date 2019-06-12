import React from 'react'
import { Alert, StyleSheet, Text, View, TouchableHighlight, Image} from 'react-native'
import {AsyncStorage} from 'react-native';
import Requests from './../Requests'

//import RNHTMLtoPDF from 'react-native-html-to-pdf';

let sampleData = [];
let tab2 = [];
class Accueil extends React.Component {
  static navigationOptions = {

    title: "Accueil",

    headerLeft: null,

    headerTintColor: '#ffffff',

    headerStyle: {

      backgroundColor: 'green',

    },

  }

    constructor(props) {

        super(props);
    
        this.state = {
          tabActivite : [],
    
        };
    
      }

    _onPressButton(){
        Alert.alert('touch'),
        console.log("touch")
    }

    _displaySeance(){
        this.props.navigation.navigate('Seance')
    }
    _displayConsulter(){
        this.props.navigation.navigate('Consulter')
    }

    _displayEstimer() {

        this.props.navigation.navigate('estimerDouleur');
    
      }
      _displayStat = async () => {
        let currentId = await AsyncStorage.getItem('id');
        await this._ChargementData(currentId)
        console.log("YOUPI::", this.state.tabActivite)
        console.log("id::", currentId)
        this.props.navigation.navigate("Stat", {itemTabActivite : this.state.tabActivite});
    
      }

     /* async createPDF() {
        let options = {
          html: '<h1>PDF TEST</h1>'
        }
        RNHTMLtoPDF.convert(options).then(filePath => {

          console.log('PDF generated', filePath);
        
        
        
          Share.open({
        
            title: "Share this!",
        
            message: "I just wanted to show you this:",
        
            url: filePath,
        
            subject: "I am only visible for emails :(",
        
          });
        
        });
        };*/
        

      componentDidMount = async () =>{
        //Requete activite
        /* let userId = await AsyncStorage.getItem('id');
        console.log("Voici Mon ID::", userId)
        const getInfoJSON = Requests.getRequest(userId);
         getInfoJSON.then(respJson => {
          //set state activite
          this.setState({activite: respJson.reverse()});
          this.setState({tab : this.traitement()});
        console.log("tab", this.state.tab);
        console.log("tab activité", this.state.activite)
        }).catch(err => console.log(err)); 
      tab2 = this.grapheDouleurApres(); */
      }
     /* grapheDouleurAvant(){
        let act = [];
        this.state.tabActivite.forEach((t) =>{
          act.push({x :t['date'], y : t['douleurAvant']*1})
        })
        console.log("douleur avant" +act);
        return act;
      }

      grapheDouleurApres(){
        let act = [];
        this.state.tabActivite.forEach((t) =>{
          act.push({x :t['date'], y : t['douleurApres']*1})
        })
        return act;
      }
      traitement(){
        let act= [];
        this.state.activite.forEach((t) =>{
          act.push({x :t['date']})
        })
        console.log ("act", act)
        return act;
      }*/

      _ChargementData = async (userId) =>{
        console.log("YOUPI",userId)
        //Requete sport
        const getInfoJSON = Requests.getRequest(userId);
        await getInfoJSON.then(respJson => {
          //set state
          this.setState({tabActivite: respJson.reverse()});
        }).catch(err => console.log(err));
    
      }
 
   //console.log("sampledata",sampleData);
    render() {

        return (
            <View style={styles.main_container}>

            <TouchableHighlight
    
              style={styles.button}
    
              onPress={() => this._displaySeance()}
    
              underlayColor="white"
    
            >
    
              <View style={styles.TouchView}>
    
                <Text style={styles.text}>Lancer ma Séance</Text>
    
                <Image
    
                  style={styles.image}
    
                  source={require("./../images/play.png")}
    
                />
    
              </View>
    
            </TouchableHighlight>
    
    
    
            <TouchableHighlight
    
              style={styles.button}
    
              onPress={() => this._displayConsulter()}
    
              underlayColor="white"
    
            >
    
              <View style={styles.TouchView}>
    
                <Text style={styles.text}>Consulter mon Activité</Text>
    
                <Image
    
                  style={styles.image}
    
                  Text={"cs"}
    
                  source={require("./../images/chrono.jpg")}
    
                />
    
              </View>
    
            </TouchableHighlight>

            <TouchableHighlight
    
              style={styles.button}
    
              onPress={() =>this._displayStat()}
    
              underlayColor="white">
    
              <View style={styles.TouchView}>
    
              <Text style={styles.text}>Voir mes Statistiques</Text>
    
                <Image
    
                  style={styles.image}
    
                  source={require("../images/Stat.jpg")}
    
                />
    
              </View>
    
            </TouchableHighlight>
    
            <TouchableHighlight
    
              style={styles.button}
    
              onPress={() =>this._displayEstimer()}
    
              underlayColor="white">
    
              <View style={styles.TouchView}>
    
              <Text style={styles.text}>Estimer ma Douleur</Text>
    
                <Image
    
                  style={styles.image}
    
                  source={require("../images/loupe.jpg")}
    
                />
    
              </View>
    
            </TouchableHighlight>
    
          </View>
    
        );
    
      }
    
    }
    
    
    
    const styles = StyleSheet.create({
    
      main_container: {
    
        flex: 1,
    
        
    
        //marginBottom: 10,
    
      },
    
      menuBar: {
    
        flex: 0.4,
    
        backgroundColor: "gray"
    
      },
    
      button: {
    
        flex: 1,
    
        backgroundColor: "white", //'#2196F3',
    
        justifyContent: "center",
    
        alignItems: "center",
    
        borderTopColor: "black",
    
        borderTopWidth: 2,
    
      },
    
      TouchView: {
    
        
    
        resizeMode: "cover",
    
        alignItems: "center",
    
        justifyContent: "center",
    
      },
    
      image: {
    
        width: 110, //220,
    
        height: 110, //220,
    
        resizeMode: "cover",
    
        alignItems: "center",
    
        justifyContent: "center",
    
      },
    
      text: {
    
        padding: 2,
    
        color: "black",
    
        fontSize: 20,
    
      },
    
      graph: {
    
        flex: 1,
    
        backgroundColor: "white",
    
       // padding: 5
    
      }
    
    });
export default Accueil