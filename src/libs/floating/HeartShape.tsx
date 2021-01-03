import React from 'react'
import { Image } from 'react-native'

/**
 * @class HeartShape
 */

const HeartShape = ({ color }) => {
  return <Image source={require('./heart.png')} style={{ tintColor: color }} />
}

/**
 * Exports
 */

export default HeartShape