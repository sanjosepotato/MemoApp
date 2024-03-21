import { View, Text, StyleSheet } from 'react-native'
import Header from '../../components/Header'
import CircleButton from '../../components/CircleButton'

const Detail = (): JSX.Element => {
  return (
    <View>
      <Header />
        <View>
          <Text>買い物リスト</Text>
          <Text>2024/3/20 10:00</Text>
        </View>
        <View>
            <Text>
                わたいは我をすえう
            </Text>
        </View>
      <CircleButton>+</CircleButton>
    </View>
  )
}

export default Detail
