import {Image, StyleSheet, Platform, View, Text} from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import {Colors} from "@/constants/Colors";

export default function HomeScreen() {
  return (
    <View style ={{ //PRIMARY VIEW
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
        backgroundColor: Colors.background,
    }}>
        <ThemedView style={styles.titleContainer}>
            <ThemedText type="title">Clean Buddy</ThemedText>
        </ThemedView>

        <View style = {{
            flex: 1,
            justifyContent: 'center',
            paddingLeft: '7%',
            paddingRight: '7%'
        }}>
            <Text style = {{
                fontSize: 28,
            }
            }>Hello, I'm <Text style={{fontWeight: 'bold'}}>&name&</Text> and I am an addict.</Text>

            <Text style = {{
                fontSize: 22,
            }
            }>I have  <Text style={{fontWeight: 'bold'}}>&datecount&</Text> clean.</Text>

        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 0,
    position: "absolute",
      top: '5%',
      left: '7%',
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
