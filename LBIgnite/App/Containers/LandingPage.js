import React, { PropTypes } from 'react'
import { View, ScrollView, Text, LayoutAnimation, Keyboard ,Dimensions } from 'react-native'
import { connect } from 'react-redux'
import Actions from '../Actions/Creators'
import Routes from '../Navigation/Routes'
import { Metrics } from '../Themes'
// external libs
import Icon from 'react-native-vector-icons/FontAwesome'
import Animatable from 'react-native-animatable'

const window = Dimensions.get('window');
// Styles
import styles from './Styles/LandingPageStyle'

// I18n
import I18n from '../I18n/I18n.js'
/*
Landing page which will give user option to 
Apply for create a new request
Check status of Leave requests
Check Leave Balance
Check todays Leave Applications by Team Mates


*/
class LandingPage extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      visibleHeight: Metrics.screenHeight
    }
  }

  static propTypes = {
    navigator: PropTypes.object.isRequired
  }

  componentWillMount () {
    // Using keyboardWillShow/Hide looks 1,000 times better, but doesn't work on Android
    // TODO: Revisit this if Android begins to support - https://github.com/facebook/react-native/issues/3468
    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this.keyboardDidShow.bind(this))
    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this.keyboardDidHide.bind(this))

    // Configure nav button
    this.props.navigator.state.tapHamburger = () => {
      this.props.navigator.drawer.toggle()
    }
  }

  componentWillUnmount () {
    this.keyboardDidShowListener.remove()
    this.keyboardDidHideListener.remove()
  }

  keyboardDidShow (e) {
    // Animation types easeInEaseOut/linear/spring
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
    let newSize = Metrics.screenHeight - e.endCoordinates.height
    this.setState({
      visibleHeight: newSize
    })
  }

  keyboardDidHide (e) {
    // Animation types easeInEaseOut/linear/spring
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
    this.setState({
      visibleHeight: Metrics.screenHeight
    })
  }

  render () {
    return (
      <ScrollView style={styles.container}>
          <View style={styles.marginTop}></View>
              <View style={styles.userGreetingsBlock}>
                <Text style={styles.sectionText}>Hi Mr. User !!</Text>
                <View style = {styles.profilePicture}></View>
              </View>


              <View style={styles.userOptionsBlock}>
                <View style={{flexDirection:'row',justifyContent:'center'}}>
                <View><Text>Option 1</Text></View>
                <View><Text>Option 2</Text></View>
                </View>

                <View style={{flexDirection:'row',justifyContent:'center'}}>
                <View style={{marginRight : 60}}><Text>Option 3</Text></View>
                <View><Text>Option 4</Text></View>
                </View>
                
              </View>
      </ScrollView>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}



export default connect(mapStateToProps)(LandingPage)
