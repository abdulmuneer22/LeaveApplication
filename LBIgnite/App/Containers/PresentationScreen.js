import React, {PropTypes} from 'react'
import { ScrollView, Text, Image, View } from 'react-native'
import { Images } from '../Themes'
import { connect } from 'react-redux'
import Routes from '../Navigation/Routes'
import RoundedButton from '../Components/RoundedButton'

// Styles
import styles from './Styles/PresentationScreenStyle'

class PresentationScreen extends React.Component {

  static propTypes = {
    navigator: PropTypes.object.isRequired
  }

  componentWillMount () {
    this.props.navigator.state.tapHamburger = () => {
      this.props.navigator.drawer.toggle()
    }
  }

  render () {
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        <ScrollView style={styles.container}>
          <View style={styles.centered}>
            <Image source={Images.clearLogo} style={styles.logo} />
          </View>

          <View style={styles.section} >
            <Text style={styles.sectionText} >
              Welcome to Leave Buddy , Your One stop for tracking all your Leave Requests and Leave Balance
            </Text>
          </View>

          <RoundedButton onPress={() => this.props.navigator.push(Routes.LoginScreen)}>
            Login
          </RoundedButton>

          <RoundedButton onPress={() => this.props.navigator.push(Routes.RegisterScreen)}>
            Register
          </RoundedButton>

          
          <RoundedButton onPress={() => this.props.navigator.push(Routes.LandingPage)}>
            Landing Page
          </RoundedButton>

          <RoundedButton onPress={() => this.props.navigator.push(Routes.APITestingScreen)}>
            API Testing Screen
          </RoundedButton>

          <RoundedButton onPress={() => this.props.navigator.push(Routes.ThemeScreen)}>
            Theme Screen
          </RoundedButton>

          <RoundedButton onPress={() => this.props.navigator.push(Routes.DeviceInfoScreen)}>
            Device Info Screen
          </RoundedButton>

          <View style={styles.centered}>
            <Text style={styles.subtitle}>Made with ❤️ In India</Text>
          </View>

        </ScrollView>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

export default connect(mapStateToProps)(PresentationScreen)
