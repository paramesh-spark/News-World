import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator,Image } from 'react-native';

const App = () => {
  const [headlines, setHeadlines] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://saurav.tech/NewsAPI/top-headlines/category/health/in.json')
      .then((response) => response.json())
      .then((data) => {
        setHeadlines(data.articles);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    
    <View style={styles.container}>
    <View style={styles.header}>
    <Text style={styles.tnews}> NEWS WORLD</Text>
    </View>
    
      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <FlatList
          data={headlines}
          keyExtractor={(item) => item.title}
          renderItem={({ item }) => (
            <View style={styles.itemContainer}>
              <Image style={styles.img} source={{uri:item.urlToImage,}} />
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.description}>{item.description}</Text>
              
            </View>
          )}
        />
      )}
    </View>
  );
  


  
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemContainer: {
    marginVertical: 10,
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 10,
},
img: {
  width:350,
  height: 200,
},
header: {
  backgroundColor: 'red',
  marginTop: 20,
  paddingTop: 10,
  paddingBottom:10,
  paddingLeft: 100,
  paddingRight: 99,
  

  
},
tnews:{
  color:'white',
  fontSize: 18,
  fontWeight: 'bold',
  
}

});

export default App;