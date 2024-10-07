
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';


const ChooseColor = props => {
    const {navigation, route} = props;
    const {navigate, goBack} = navigation;
   
    

    const[mau,setMau] = useState('');
    const[txt,setTxt] = useState('');
    const [gia,setGia] = useState('');
    const selectColor =(color,t,price) =>{
        setMau(color)
        setTxt(t)
        setGia(price)

    }

    // const NhapTxt = (t) =>{
    //     setTxt(t)
    // }

    // const NhapGia = (t) =>{
    //     setGia(t)
    // }
return (

    <View style>
        <View style ={styles.header}>
              <Image source={require('../assets/vs_blue.png')} style = {{width :'112px',height:'132px'}}   />
               <Text style={styles.textheader}>Điện thoại chính hãng Joy 3  </Text>
               <Text  style={styles.textheader}>Hàng chính hãng</Text>      
                <Text style={styles.textheader} > {mau}  </Text>
                <Text style={styles.textheader}>{txt} </Text>
                <Text style={styles.textheader}> {gia} </Text>


                      </View>

      <View style={styles.center}>
        <Text style={styles.textcolor}> Chọn một màu bên dưới: </Text>
        {/* màu 1 */}
        <TouchableOpacity onPress={() => selectColor('Màu Bạc','Cung cấp bởi thị trường tiki Tradding',1790000)} 
                                    style={{ height :'70px',
                                    width :'80px',
                                    backgroundColor :'#C5F1FB',
                                    marginBottom:'15px',}}>
            
            <View>


            </View>


        </TouchableOpacity>
          {/* màu 2 */}
        <TouchableOpacity       onPress={() => selectColor('Màu Đỏ','Cung cấp bởi thị trường tiki Tradding',1790000)} 
                                style={{ height :'70px',
                                width :'80px',
                                backgroundColor :'red',
                                marginBottom:'15px',}}>
            
            <View>


            </View>


        </TouchableOpacity>
          {/* màu 3*/}
        <TouchableOpacity   onPress={() => selectColor('Màu Đen','Cung cấp bởi thị trường tiki Tradding',1790000)} 
                            style={{ height :'70px',
                                    width :'80px',
                                    backgroundColor :'black',
                                    marginBottom:'15px',}}>
            
            <View>


            </View>


        </TouchableOpacity>

          {/* màu 4 */}
        <TouchableOpacity onPress={() => selectColor('Màu Xanh','Cung cấp bởi thị trường tiki Tradding',1790000)} 
                                style={{ height :'70px',
                                    width :'80px',
                                    backgroundColor :'#234896',
                                    marginBottom:'15px',}}>
            
            <View>


            </View>


        </TouchableOpacity>

        <TouchableOpacity onPress={()=>(navigate('home'))} 
                                style={{width:'90%',height:'40px',
                                backgroundColor:'#1952E2',
                                borderRadius : 10,
                                borderColor:'#CA1536',
                                justifyContent:'center',
                                alignItems:'center',
                               

                                
                                }}>
                <View>
                        <Text style={{ color :'white',
                                        fontSize:'20px'}}>
                            Xong    
                        </Text>

                </View>

        </TouchableOpacity>



      </View>



    </View>
)

}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'yellow',
      alignItems: 'center',
      justifyContent: 'center',
    },
    header:{
        flex:1,
        height:'160px',
       
    },
    textheader:{
        left:'130px',
        fontSize : '16px',
        // fontWeight :'bold',
        top:'-125px',
    },
    center:{
        // marginTop :'20px',
        backgroundColor :'gray',
        flex :4,
        alignItems :'center',
        justifyContent:'center',
    },
    textcolor:{
        fontSize:'16px',
        top:'-5px',
        left:'-100px',
    },
   


})
export default ChooseColor;
