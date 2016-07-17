import { StyleSheet } from 'react-native'
import { ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  userGreetingsBlock :{
  width : window.width,
  height : 180,
  backgroundColor : '#004D40',
  alignItems : 'center',
  justifyContent : 'center',
  marginLeft : 0,
  marginRight : 0
  
},
profilePicture:{
  width : 180-40,
  height : 180-40,
  borderRadius : 140/2,
  backgroundColor : '#263238'
},
marginTop:{
  marginTop : 60
},
userOptionsBlock:{
  width : window.width,
  backgroundColor : '#455A64',
  height : 250,
  marginTop : 40,
  marginRight : 40,
  marginLeft : 40,
  marginBottom : 20
}

})
