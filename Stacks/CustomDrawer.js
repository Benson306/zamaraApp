import React from 'react';
import { SafeAreaView, StyleSheet, Image, Text } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { TouchableOpacity } from 'react-native-gesture-handler';

const CustomSidebarMenu = (props) => {

  return (
    <SafeAreaView style={{flex: 1}}>
      {/*Top Large Image */}
      <Image
        source={require('../assets/logo.png')}
        style={styles.sideMenuProfileIcon}
      />

      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>

      <TouchableOpacity style={styles.signOut}>
        <Text style={styles.signOutText}>Sign Out</Text>
      </TouchableOpacity>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sideMenuProfileIcon: {
    resizeMode: 'center',
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    alignSelf: 'center',
    marginTop:40
  },
  customItem: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  signOut:{
    alignSelf: 'center',
    padding:20,
    backgroundColor: '#009999',
    width:280,
    alignItems:'center'
  },
  signOutText:{
    color:'white'
  }
});

export default CustomSidebarMenu;