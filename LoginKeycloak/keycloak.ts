import { RNKeycloak } from '@react-keycloak/native';
import { Platform } from 'react-native'

// Setup Keycloak instance as needed
// Pass initialization options as required
const keycloak = new RNKeycloak({
  url: `http://${ Platform.OS === 'ios' ? 'localhost' : '10.0.2.2'}:8080/auth`,
  realm: 'quap',
  clientId: 'myclient'
});

export default keycloak;
