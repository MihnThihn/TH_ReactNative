
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react'
import images from '../assets/vs_blue.png';
import grayImg from '../assets/vs_silver.png';
import redImg from '../assets/vs_red.png';
import blackImg from '../assets/vs_black.png';
import star from '../assets/star.png';
const FirstScreen = props => {
    const {navigation, route} = props;
    const {navigate, goBack} = navigation; 
    
    return ( 

        <View style={styles.container}> 

           <View style={styles.header}>
                  <Image source={images} style = {{ width :'100%', height: '300px'} } />
                 <Text style ={{fontSize:'16px',top:'10px'}}> Điện thoại Vmart Joy 3 - Hàng chính hãng </Text>                                                  
                 <View style ={{flexDirection: 'row'}}>
                        <Image source={star} style = {styles.star}  />  
                        <Image source={star} style = {styles.star}  />     
                        <Image source={star} style = {styles.star}  />     
                        <Image source={star} style = {styles.star}  />     
                        <Image source={star} style = {styles.star}  />    

                  </View>   
                  
                  <Text style={{right : '-70px',top:'-8px', fontSize :'16px'}}> (Xem 828 đánh giá) </Text>
                  <Text style={{fontSize:'20px',fontWeight:'bold', left:'-100px',top:'10px'}} > 1.790.000</Text>
                  <Text style={{color:'red',left:'-68px',top:'20px',fontSize:'18px',fontWeight:'bold'}}> Ở đâu rẻ hoàn tiền</Text>
           </View>

           <TouchableOpacity    onPress={()=> {navigate('Choose')}}
                                style={{ borderColor:'black',borderWidth:1,borderRadius: 10,
                                      width:'90%',height:'40px',bottom:'70px'
                                      ,justifyContent:'center',alignItems:'center',
                                      
                                      }}>  
                <View >
                     <Text style={{fontWeight:"bold"}}> 4 MÀU - CHỌN MÀU    </Text>
                </View>

           </TouchableOpacity>

           {/* chon mua */}

           <TouchableOpacity    
                                style={{ borderColor:'black',borderWidth:1,borderRadius: 10,
                                      width:'90%',height:'40px',bottom:'10px'
                                      ,justifyContent:'center',alignItems:'center',
                                      backgroundColor : 'red',
                                      
                                      }}>  
                <View >
                     <Text style={{fontWeight:"bold",color:'white'}}> CHỌN MUA  </Text>
                </View>

           </TouchableOpacity>

        </View>
    );

}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    header:{
      flex : 1,
      width :'100%',
      // backgroundColor :'red',
      alignItems :'center',
      // justifyContent :' center',
    },
    // set up star
    star:{
      width :'23px',
      height: '25px',
      top :'15px',
      left : '-90px',
      

    }
   
    
  });

export default FirstScreen;

