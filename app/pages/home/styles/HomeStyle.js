import { StyleSheet } from 'react-native';
import { Colors } from '../../../resource';

const optionsStyles = {
    optionsContainer: {
      backgroundColor: '#606367',//背景色
      borderRadius: 5,//边的弧度
    
    },
  
  };
 const Styles=StyleSheet.create({

    view_container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: Colors.background,
    },
    Carousel: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: 150,

    },
    SearchButton_left: {
        borderRadius: 15,
        height: 30,
        backgroundColor: Colors.background,
    },
    SearchButtonContain_left: {
        height: 50,
        backgroundColor:'white',
        flex:1
    }

});

export  {Styles,optionsStyles}