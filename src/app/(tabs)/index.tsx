import { View,Text,Image } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import './index.css';
import { logo } from '@/constants/logo';

function Home(){

    return(
        <SafeAreaView className='bodyview'>

            <View className="header">
                <View className='logoview'>
                    <Image
                        source={logo.logox}
                        className='home_logo'
                    />
                </View>
                <Text className='version_label'>
                    v0.0.1a
                </Text>
            </View>
            
        </SafeAreaView>
    )
}

export default Home