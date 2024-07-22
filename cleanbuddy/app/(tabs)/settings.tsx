import Ionicons from '@expo/vector-icons/Ionicons';
import {StyleSheet, Image, Platform, View, Text, TextInput} from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import {Colors} from "@/constants/Colors";
import {DateTimePickerAndroid} from "@react-native-community/datetimepicker";
import {useState} from "react";

export default function TabTwoScreen() {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  return (
      <View style ={{ //PRIMARY VIEW
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch',
        backgroundColor: Colors.background,
        width: '100%'
      }}>
        <ThemedView style={styles.titleContainer}>
          <ThemedText type="title">Clean Buddy - Settings</ThemedText>
        </ThemedView>

        <View style = {{
          flex: 1,
          justifyContent: 'center',
          paddingLeft: '7%',
          paddingRight: '7%',
          paddingBottom: '120%'
        }}>
          <Text style = {{
            fontSize: 18,
          }
          }>Name</Text>
          <TextInput
              style={styles.input}
              placeholder="Enter your name"
          />


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
  input: {
    height: 60,
    width: '100%',
    marginLeft: 0,
    marginRight: 0,
    backgroundColor: '#f4f5fe',
    borderRadius: 10,
    padding: 10,
    alignItems: "stretch",
  },
});
