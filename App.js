import React, {Component} from 'react';
import {Platform, Button, StyleSheet, Text, View, Image, TextInput, ScrollView, TouchableOpacity} from 'react-native';

// functional Component- less state component
// const GopayFeature = (props) => {
//   return (
//     <View style={{flex: 1, alignItems: 'center'}}>
//       <Image source={props.img} />
//       <Text style={{fontSize: 13, fontWeight: 'bold', color: 'white', marginTop: 15}}>{props.title}</Text>
//     </View>
//   )
// }

// class Component - full state component
class GopayFeature extends Component{
  render(){
    return(
      <View style={{flex: 1, alignItems: 'center'}}>
        <Image source={this.props.img} />
        <Text style={{fontSize: 13, fontWeight: 'bold', color: 'yellow', marginTop: 15}}>{this.props.title}</Text>
      </View>
    )
  }
}

export default class App extends Component {
  render() {
    return (
      <View style={{flex: 1 }} >
          {/* start search bar */}
          <View style={{marginHorizontal: 0, paddingHorizontal: 17, flexDirection: 'row', paddingTop: 15, backgroundColor: 'white'}}>
            <View style={{position: 'relative', flex: 1}}>
              <TextInput placeholder="What do you want to eat?" style={{borderWidth: 1, borderColor: '#E8E8E8', borderRadius: 25, height: 40, fontSize: 13, paddingLeft: 45, paddingRight: 20, backgroundColor: 'white', marginRight: 17}} />
              <Image source={require('./src/assets/icon/search.png')} style={{position: 'absolute', top : 5, left: 12}} />
            </View>
            <View style={{width: 35, alignItems: 'center', justifyContent: 'center'}}>
                <Image source={require('./src/assets/icon/promo.png')} />
            </View>
          </View>
          {/* end search bar */}
        <ScrollView style={{flex:1, backgroundColor: 'white',}}>
          {/* start gopay */}
          <View style={{marginHorizontal: 17, marginTop: 8}}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#2C5FB8', borderTopLeftRadius: 4, borderTopRightRadius: 4, padding: 14}}>
              <Image source={require('./src/assets/icon/gopay.png')} />
              <Text style={{fontSize: 17, fontWeight: 'bold', color: 'white'}}>Rp50.000</Text>
            </View>
            <View style={{flexDirection:'row', paddingTop: 20, paddingBottom: 14, backgroundColor: '#2F65BD', borderBottomLeftRadius: 4, borderBottomRightRadius: 4}}>
              <GopayFeature title="Pay" img={require('./src/assets/icon/pay.png')} />
              <GopayFeature title="Nearby" img={require('./src/assets/icon/nearby.png')} />
              <GopayFeature title="Top Up" img={require('./src/assets/icon/topup.png')} />
              <GopayFeature title="More" img={require('./src/assets/icon/more.png')} />
            </View>
          </View>
          {/* end gopay */}
          {/* start main feature */}
          <View style={{flexDirection: 'row', flexWrap: 'wrap', marginTop: 18}}>
            <View style={{justifyContent: 'space-between', flexDirection: 'row', width: '100%', marginBottom: 18 }}>
              <View style={{width: `${100/4}%`, alignItems: 'center'}}>
                <View style={{width: 58, height: 50, borderWidth: 1, borderColor: '#EFEFEF', borderRadius: 18, borderRadius: 18, justifyContent: 'center', alignItems: 'center' }}>
                  <Image source={require('./src/assets/icon/go-ride.png')} />
                </View>
                  <Text style={{fontSize: 11, fontWeight: 'bold', textAlign: 'center', marginTop: 6}}>GO-RIDE</Text>
              </View>
              <View style={{width: `${100/4}%`, alignItems: 'center'}}>
                <View style={{width: 58, height: 50, borderWidth: 1, borderColor: '#EFEFEF', borderRadius: 18, borderRadius: 18, justifyContent: 'center', alignItems: 'center' }}>
                  <Image source={require('./src/assets/icon/go-car.png')} />
                </View>
                  <Text style={{fontSize: 11, fontWeight: 'bold', textAlign: 'center', marginTop: 6}}>GO-CAR</Text>
              </View>
              <View style={{width: `${100/4}%`, alignItems: 'center'}}>
                <View style={{width: 58, height: 50, borderWidth: 1, borderColor: '#EFEFEF', borderRadius: 18, borderRadius: 18, justifyContent: 'center', alignItems: 'center' }}>
                  <Image source={require('./src/assets/icon/go-bluebird.png')} />
                </View>
                  <Text style={{fontSize: 11, fontWeight: 'bold', textAlign: 'center', marginTop: 6}}>GO-BLUEBIRD</Text>
              </View>
              <View style={{width: `${100/4}%`, alignItems: 'center'}}>
                <View style={{width: 58, height: 50, borderWidth: 1, borderColor: '#EFEFEF', borderRadius: 18, borderRadius: 18, justifyContent: 'center', alignItems: 'center' }}>
                  <Image source={require('./src/assets/icon/go-send.png')} />
                </View>
                  <Text style={{fontSize: 11, fontWeight: 'bold', textAlign: 'center', marginTop: 6}}>GO-SEND</Text>
              </View>
            </View>
            <View style={{justifyContent: 'space-between', flexDirection: 'row', width: '100%', marginBottom: 18}} >
              <View style={{width: `${100/4}%`, alignItems: 'center'}}>
                <View style={{width: 58, height: 50, borderWidth: 1, borderColor: '#EFEFEF', borderRadius: 18, borderRadius: 18, justifyContent: 'center', alignItems: 'center' }}>
                  <Image source={require('./src/assets/icon/go-deals.png')} />
                </View>
                  <Text style={{fontSize: 11, fontWeight: 'bold', textAlign: 'center', marginTop: 6}}>GO-DEALS</Text>
              </View>
              <View style={{width: `${100/4}%`, alignItems: 'center'}}>
                <View style={{width: 58, height: 50, borderWidth: 1, borderColor: '#EFEFEF', borderRadius: 18, borderRadius: 18, justifyContent: 'center', alignItems: 'center' }}>
                  <Image source={require('./src/assets/icon/go-pulsa.png')} />
                </View>
                  <Text style={{fontSize: 11, fontWeight: 'bold', textAlign: 'center', marginTop: 6}}>GO-PULSA</Text>
              </View>
              <View style={{width: `${100/4}%`, alignItems: 'center'}}>
                <View style={{width: 58, height: 50, borderWidth: 1, borderColor: '#EFEFEF', borderRadius: 18, borderRadius: 18, justifyContent: 'center', alignItems: 'center' }}>
                  <Image source={require('./src/assets/icon/go-food.png')} />
                </View>
                  <Text style={{fontSize: 11, fontWeight: 'bold', textAlign: 'center', marginTop: 6}}>GO-FOOD</Text>
              </View>
              <View style={{width: `${100/4}%`, alignItems: 'center'}}>
                <View style={{width: 58, height: 50, borderWidth: 1, borderColor: '#EFEFEF', borderRadius: 18, borderRadius: 18, justifyContent: 'center', alignItems: 'center' }}>
                  <Image source={require('./src/assets/icon/go-more.png')} />
                </View>
                  <Text style={{fontSize: 11, fontWeight: 'bold', textAlign: 'center', marginTop: 6}}>MORE</Text>
              </View>
            </View>
          </View>
          {/* end main feature */}
          <View style={{height: 17, backgroundColor: '#F2F2F4'}} ></View>
          {/* start news section */}
          <View style={{paddingTop: 16, paddingHorizontal: 16}}>
            <View style={{position: 'relative'}}>
              <Image source={require('./src/assets/dummy/sepak-bola.jpg')} style={{height: 170, width: '100%', borderRadius:6}} />
              <View style={{width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, backgroundColor: 'black', opacity: 0.2, borderRadius: 6}}></View>
              <View style={{height: 15, width: 60, position: 'absolute', top: 16, left: 16}} >
                <Image source={require('./src/assets/logo/white.png')} style={{width: undefined, height: undefined, resizeMode: 'contain', flex: 1}} />
              </View>
            </View>
            <View style={{paddingTop: 16, paddingBottom: 20, borderBottomColor: '#E8E9ED', borderBottomWidth: 1}}>
              <Text style={{fontSize: 16, fontWeight: 'bold', color: '#1C1C1C'}}>GO-NEWS</Text>
              <Text style={{fontSize: 14, fontWeight: 'normal', color: '#7A7A7A', marginBottom: 11}}>Dimas Drajat selamatkan penalti, Tim U-21 mengalahkan filipina</Text>
              <TouchableOpacity style={{backgroundColor: '#61A756', paddingHorizontal: 12, paddingVertical: 11, alignSelf: 'flex-end', borderRadius: 4}}>
                <Text style={{fontSize: 13, fontWeight: 'bold', color: 'white', textAlign: 'center'}}>READ</Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* end news section */}
          {/* start internal information section */}
          <View style={{padding: 16, paddingBottom: 0}}>
            <View style={{height: 15, width: 60, marginLeft: -4}} >
              <Image source={require('./src/assets/logo/gojek.png')} style={{width: undefined, height: undefined, resizeMode: 'contain', flex: 1}} />
            </View>
            <Text style={{fontSize: 17, fontWeight: 'bold', color: '#1C1C1C', marginTop: 15, marginBottom: 20}}>Complete your profile</Text>
            <View style={{flexDirection: 'row', marginBottom: 16}}>
              <View>
                <Image source={require('./src/assets/dummy/facebook-connect.png')} /> 
              </View>
              <View style={{marginLeft: 16, flex: 1}}>
                  <Text style={{fontSize: 15, fontWeight: 'bold', color: '#4A4A4A'}} >Connect with Facebook</Text>
                  <Text style={{fontSize: 15, fontWeight: 'normal', color: '#4A4A4A', width: '50%'}} >Login faster without verification code</Text>
              </View>
            </View>
              <TouchableOpacity style={{backgroundColor: '#61A756', paddingHorizontal: 12, paddingVertical: 11, alignSelf: 'flex-end', borderRadius: 4}}>
                <Text style={{fontSize: 13, fontWeight: 'bold', color: 'white', textAlign: 'center'}}>CONNECT</Text>
              </TouchableOpacity>
              <View style={{borderBottomColor: '#E8E9ED', borderBottomWidth: 1, marginTop: 16}}></View>
          </View>
          {/* end internal information section */}
          {/* start go-food section */}
          <View style={{padding: 16, paddingBottom: 0}}>
            <View style={{position: 'relative'}}>
              <Image source={require('./src/assets/dummy/food-banner.jpg')} style={{height: 170, width: '100%', borderRadius:6}} />
              <View style={{width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, backgroundColor: 'black', opacity: 0.15, borderRadius: 6}}></View> 
              <View style={{height: 15, width: 60, position: 'absolute', top: 16, left: 16}} >
                <Image source={require('./src/assets/logo/white.png')} style={{width: undefined, height: undefined, resizeMode: 'contain', flex: 1}} />
              </View>
              <View style={{position: 'absolute', bottom: 0, left: 0, width: '100%',  flexDirection: 'row', alignItems: 'center', paddingHorizontal: 16, paddingBottom: 16}}>
                <View>
                  <Text style={{fontSize: 18, fontWeight: 'bold', color: 'white', marginBottom: 8}}>FREE GO-FOOD vouchers</Text>
                  <Text style={{fontSize: 12, fontWeight: '400', color: 'white'}}>Quick, before they run out!</Text>
                </View>
                <View style={{flex: 1, paddingLeft: 12}}>
                  <TouchableOpacity style={{backgroundColor: '#61A756', paddingHorizontal: 12, paddingVertical: 11, alignSelf: 'stretch', borderRadius: 4}}>
                    <Text style={{fontSize: 13, fontWeight: 'bold', color: 'white', textAlign: 'center'}}>GET VOUCHER</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={{borderBottomColor: '#E8E9ED', borderBottomWidth: 1, marginBottom: 16, marginTop: 16}}></View>
          </View>
          {/* end go-food section */}
          {/* start nearby go-food */}
          <View>
            <View style={{height: 15, width: 60, marginLeft: 16}} >
              <Image source={require('./src/assets/logo/go-food.png')} style={{width: undefined, height: undefined, resizeMode: 'contain', flex: 1}} />
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 16, paddingHorizontal: 16}}>
              <Text style={{fontSize: 17, fontWeight: 'bold', color: '#1C1C1C'}}>Nearby Restaurants</Text>
              <Text style={{fontSize: 17, fontWeight: 'bold', color: '#61A756'}} >See All</Text>
            </View>
            <ScrollView horizontal style={{flexDirection: 'row', paddingLeft: 16}}>
              <View style={{marginRight: 16}}>
                <View style={{width: 150, height: 150, borderRadius: 8 }}>
                  <Image source={require('./src/assets/dummy/go-food-kfc.jpg')} style={{width: undefined, height: undefined, resizeMode: 'cover', flex: 1, borderRadius: 8}} />
                </View>
                <Text style={{fontSize: 16, fontWeight: 'bold', color: '#1C1C1C', marginTop: 12}}>KFC AEON Mall</Text>
              </View>
              <View style={{marginRight: 16}}>
                <View style={{width: 150, height: 150, borderRadius: 8 }}>
                  <Image source={require('./src/assets/dummy/go-food-gm.jpg')} style={{width: undefined, height: undefined, resizeMode: 'cover', flex: 1, borderRadius: 8}} />
                </View>
                <Text style={{fontSize: 16, fontWeight: 'bold', color: '#1C1C1C', marginTop: 12}}>Bakmi AEON Mall</Text>
              </View>
              <View style={{marginRight: 16}}>
                <View style={{width: 150, height: 150, borderRadius: 8 }}>
                  <Image source={require('./src/assets/dummy/go-food-banka.jpg')} style={{width: undefined, height: undefined, resizeMode: 'cover', flex: 1, borderRadius: 8}} />
                </View>
                <Text style={{fontSize: 16, fontWeight: 'bold', color: '#1C1C1C', marginTop: 12}}>Martabak Bangka</Text>
              </View>
              <View style={{marginRight: 16}}>
                <View style={{width: 150, height: 150, borderRadius: 8 }}>
                  <Image source={require('./src/assets/dummy/go-food-orins.jpg')} style={{width: undefined, height: undefined, resizeMode: 'cover', flex: 1, borderRadius: 8}} />
                </View>
                <Text style={{fontSize: 16, fontWeight: 'bold', color: '#1C1C1C', marginTop: 12}}>Martabak Orins</Text>
              </View>
              <View style={{marginRight: 16}}>
                <View style={{width: 150, height: 150, borderRadius: 8 }}>
                  <Image source={require('./src/assets/dummy/go-food-kfc.jpg')} style={{width: undefined, height: undefined, resizeMode: 'cover', flex: 1, borderRadius: 8}} />
                </View>
                <Text style={{fontSize: 16, fontWeight: 'bold', color: '#1C1C1C', marginTop: 12}}>Sederhana Minang</Text>
              </View>
            </ScrollView>
            <View style={{borderBottomColor: '#E8E9ED', borderBottomWidth: 1, marginBottom: 16, marginTop: 16, marginHorizontal: 16}}></View>
          </View>
          {/* end nearby go-food */}
        </ScrollView>
        <View style={{height: 54, flexDirection: 'row', backgroundColor: 'white', borderTopColor: '#E8E9ED', borderTopWidth: 1}}>
          <View style={{ flex:1, alignItems: 'center', justifyContent: 'center'}}>
            <Image style={{width: 26, height: 26 }} source={require('./src/assets/icon/home-active.png')} />
            <Text style={{fontSize: 10, color: '#545454', marginTop: 4, color: '#43Ab4A'}} >Home</Text>
          </View>
          <View style={{ flex:1, alignItems: 'center', justifyContent: 'center'}}>
            <Image style={{width: 26, height: 26 }} source={require('./src/assets/icon/order.png')} />
            <Text style={{fontSize: 10, color: '#545454', marginTop: 4}} >Orders</Text>
          </View>
          <View style={{ flex:1, alignItems: 'center', justifyContent: 'center'}}>
            <Image style={{width: 26, height: 26 }} source={require('./src/assets/icon/help.png')} />
            <Text style={{fontSize: 10, color: '#545454', marginTop: 4}} >Help</Text>
          </View>
          <View style={{ flex:1, alignItems: 'center', justifyContent: 'center'}}>
            <Image style={{width: 26, height: 26 }} source={require('./src/assets/icon/inbox.png')} />
            <Text style={{fontSize: 10, color: '#545454', marginTop: 4}}> Inbox</Text>
          </View>
          <View style={{ flex:1, alignItems: 'center', justifyContent: 'center'}}>
            <Image style={{width: 26, height: 26 }} source={require('./src/assets/icon/account.png')} />
            <Text style={{fontSize: 10, color: '#545454', marginTop: 4}} >Account</Text>
          </View>
        </View>
      </View>
    ); 
    }
}

const styles = StyleSheet.create({
  
});
