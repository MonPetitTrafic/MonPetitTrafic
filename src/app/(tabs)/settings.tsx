import { View,Text,Image,FlatList } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import styles from '@/styles';
import { lines_data } from '@/app/lines_data';
import CheckBox from '../components/CheckBox';

function Preferences(){

    return(
        <SafeAreaView style={styles.bodyview}>

            <FlatList
                ListHeaderComponent={() => (
                    <View>
                        <Text style={styles.title}>
                            Préférences
                        </Text>
                        <Text>toggle!</Text>
                    </View>
                )}
                data={lines_data}
                renderItem={({ item }) => (
                    <View style={styles.checkbox_line}>
                        <CheckBox/>
                        <Image
                            source={item.icon}
                            style={styles.line_icon}
                        />
                    </View>
                )}
                keyExtractor={(item)=>item.name}
                ItemSeparatorComponent={() => <View style={{marginTop:2.5,marginBottom:2.5}}/>}
            />

        </SafeAreaView>
    )
}

export default Preferences