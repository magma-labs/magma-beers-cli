import { generateAuthActions } from 'redux-token-auth'
import { authUrl } from './constants'

const config = {
  authUrl,
  userAttributes: {
    uid: 'uid',
    accessToken: 'access-token',
    client: 'client',
    imageUrl: 'image',
  },
  userRegistrationAttributes: {
    firstName: 'first_name',
  },
}

const {
    registerUser,
    signInUser,
    signOutUser,
    verifyCredentials,
} = generateAuthActions(config)

export {
    registerUser,
    signInUser,
    signOutUser,
    verifyCredentials,
  }
