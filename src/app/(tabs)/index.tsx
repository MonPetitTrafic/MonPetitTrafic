import { View,Text,Image } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import styles from '@/styles';
import { logo } from '@/constants/logo';
import CustomButton from '../components/CustomButton';

function Home(){

    return(
        <SafeAreaView style={styles.bodyview}>

            <View style={styles.header}>
                <View style={styles.logoview}>
                    <Image
                        source={logo.logox}
                        style={styles.home_logo}
                    />
                </View>
                <Text style={styles.version_label}>
                    v0.0.1a
                </Text>
            </View>

            <View style={styles.body}>
                <View style={styles.home_prbs}>
                    <View>
                        <Text style={styles.last_modif_title}>
                            Dernière actualisation :
                        </Text>
                        <Text style={styles.last_modif_date}>
                            xx xxxxxxxx 20xx, xxxx
                        </Text>
                    </View>
                    <View style={styles.home_alert_icons}>
                        <Text style={styles.DEV_to_complete}>
                            ICI Retrouvez toutes les perturbations des lignes suivies en récap
                            (icone de la ligne avec icone de perturbation + clic sur l'icone → ouvre popup
                            avec la perturbation)
                        </Text>
                    </View>
                </View>

                <View style={styles.button_container}>
                    <CustomButton
                        txt='Mettre à jour les préférences'
                        target='/(tabs)/settings'
                        onPress={() => {}}
                    />
                </View>
            </View>
            
        </SafeAreaView>
    )
}

export default Home