import { View, Text, StyleSheet} from 'react-native'

const Index = (): JSX.Element => {
  return (
        <View style = {styles.container}>
            <View>
                <View>
                    <Text>MemoApp</Text>
                    <Text>Log out</Text>
                </View>
            </View>
            <View>

                <View>
                    <View>
                        <Text>What to do</Text>
                        <Text>2024/3/17 18:32</Text>
                    </View>
                    <View>
                        <Text>X</Text>
                    </View>
                </View>

                <View>
                    <View>
                        <Text>What to do</Text>
                        <Text>2024/3/17 18:32</Text>
                    </View>
                    <View>
                        <Text>X</Text>
                    </View>
                </View>

                <View>
                    <View>
                        <Text>What to do</Text>
                        <Text>2024/3/17 18:32</Text>
                    </View>
                    <View>
                        <Text>X</Text>
                    </View>
                </View>
            </View>
            <View>
                <Text>+</Text>
            </View>


        </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default Index
