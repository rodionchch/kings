import 'react-native-reanimated';
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from 'components/App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
