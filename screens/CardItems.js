import React, { useState } from 'react'
import { SafeAreaView, StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { StepCount } from './StepCount'

import { Card } from 'react-native-elements'

export const CardItems = () => {
    const [screen, setScreen] = useState();

      // const onPressButton = (event) => {
      //   setScreen(event.target)
      // }

  return (

    <SafeAreaView style={styles.container}>
        
        <TouchableOpacity title="Step on" onPress={() => setScreen(<StepCount />)}>
          <Card borderRadius='8'>
              <View style={styles.headingContainer}>
                  <Ionicons style={styles.icon}
                      name="planet"
                  />
                  <Text style={styles.paragraph}>
                    Set your steps goal for today!
                  </Text>
                  <Ionicons style={styles.chevronicon}
                      name="chevron-forward"
                  />
              </View>
              <Text style={styles.body}>
                Did you know that for the sake of your health, you need about 15 000 steps per day? 
              </Text>
          </Card>
        </TouchableOpacity>

        <TouchableOpacity 
          activeOpacity= '0.1'
        >
          <Card title="Random videos"
            borderRadius='8'>
              <View style={styles.headingContainer}>
                  <Ionicons style={styles.icon}
                      name="videocam"
                  />
                  <Text style={styles.paragraph}>
                    Watch some random videos!
                  </Text>
                  <Ionicons style={styles.chevronicon}
                      name="chevron-forward"
                  />
              </View>
              <Text style={styles.body}>
                Films are often seen primarily as a form of entertainment, but it's worth remembering cinema is also an art form.
              </Text>
          </Card>
        </TouchableOpacity>


       <TouchableOpacity>
          <Card title="Quotes"
          borderRadius='8'>
              <View style={styles.headingContainer}>
                      <Ionicons style={styles.icon}
                          name="heart-half"
                      />
                      <Text style={styles.paragraph}>
                          Who doesn't LOVE quotes?
                      </Text>
                      <Ionicons style={styles.chevronicon}
                          name="chevron-forward"
                      />
              </View>
              <Text style={styles.body}>
                  Get som quotes, and maybe pass it on to someone who needs it?
              </Text>
          </Card>
        </TouchableOpacity>

        <TouchableOpacity>
          <Card title="Quotes"
            borderRadius='8'>
              <View style={styles.headingContainer}>
                      <Ionicons style={styles.icon}
                          name="book"
                      />
                      <Text style={styles.paragraph}>
                          More Quotes, just by shaking!
                      </Text>
                      <Ionicons style={styles.chevronicon}
                          name="chevron-forward"
                      />
              </View>
              <Text style={styles.body}>
                  Get som quotes, and maybe pass it on to someone who needs it?
              </Text>
          </Card>
        </TouchableOpacity>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    minWidth: 100,
  },
  paragraph: {
    fontSize: 18,
    fontWeight: '300',
    color: '#333',
    textAlign: 'left',
    minWidth: 280,
  },
  body: {
    fontSize: 16,
    fontWeight: 'normal',
    color: '#333',
    textAlign: 'left',
    marginTop: 16,
    maxWidth: 320,
  },
  icon: {
    fontSize: 32,
    color: '#333',
    marginRight: 16,
  },
  chevronicon: {
    fontSize: 24,
    color: '#333',
    marginTop: 4,
    textAlign: 'right',
  },
  headingContainer: {
      flexDirection: 'row',
      alignItems: 'center',
  }
});