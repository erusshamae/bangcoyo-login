import React from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';

const HomePage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Home Page</Text>
      <Image
        source={{
          uri: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/db2a5bcf-dfc1-4963-a8c1-f2dbc027c0a1/d6ly460-11f15afa-afed-4a5b-b171-da92e742ca73.png/v1/fill/w_1024,h_1024/plants_vs_zombies___sunflower_vector_by_2bitmarksman_d6ly460-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAyNCIsInBhdGgiOiJcL2ZcL2RiMmE1YmNmLWRmYzEtNDk2My1hOGMxLWYyZGJjMDI3YzBhMVwvZDZseTQ2MC0xMWYxNWFmYS1hZmVkLTRhNWItYjE3MS1kYTkyZTc0MmNhNzMucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.1HB9dfVIxNsQLWK_1jFgNFuXEGdXrXcmnWqimoG_GLY',
        }}
        style={styles.image}
      />
      <Button
        title="Logout"
        onPress={() => navigation.navigate('Landing')}
        color="#e021ba"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'pink',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#e021ba',
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
});

export default HomePage;
