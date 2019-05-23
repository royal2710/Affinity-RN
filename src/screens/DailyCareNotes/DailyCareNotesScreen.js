import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput } from 'react-native';

import DCNTimeTable from './Components/DCNTimeTable';
import DCNWorkTable from './Components/DCNWorkTable'
import DCNTypeRadioForm from './Components/DCNTypeRadioForm';

class DailyCareNotesScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            DCNflag: 0,
            week: ['2019-05-19', '2019-05-20', '2019-05-21', '2019-05-22', '2019-05-23', '2019-05-24', '2019-05-25'],
            totalHour: '0'
        }
    }

    render() {
        return (
            <ScrollView contentContainerStyle={styles.contentContainer} horizontal={true}>
                <ScrollView horizontal={false}>
                    <View style={{flexDirection: 'row'}}>
                        <View style={{}}>
                            <Text style={{color: '#000', fontSize: 19, padding: 10, fontWeight: '700'}}>Daily Care Notes</Text>
                        </View>
                        <View style={{right: 10, top:18, position: 'absolute'}}>
                            {/* <RadioForm
                                radio_props={radio_props}
                                initial={0}
                                buttonColor={'#000'}
                                buttonInnerColor={'#000'}
                                buttonOuterColor={'#000'}
                                formHorizontal={true}
                                buttonSize={10}
                                buttonOuterSize={18}
                                labelStyle={{fontSize: 15, paddingLeft: 5, paddingRight: 5}}
                                onPress={(value) => {this.setState({DCNflag: value})}}
                            /> */}
                            <DCNTypeRadioForm></DCNTypeRadioForm>
                        </View>
                    </View>
                    <View style={styles.container}>
                        <DCNTimeTable week={this.state.week}></DCNTimeTable>
                    </View>
                    <View style={{flex: 1, flexDirection: 'row', height: 40}}>
                        <View style={{flexDirection: 'row', marginLeft: 'auto'}}>
                            <Text style={{fontSize: 20, color: '#000', fontWeight: '700', height: 35, paddingTop: 5}}>Week Total (hours):</Text>
                            <View style={{width: 70, height: 35, marginLeft: 5, marginRight: 25, borderBottomWidth: 1, borderBottomColor: '#000'}}>
                                <TextInput 
                                    value={this.state.totalHour} 
                                    style={{fontSize: 20, color: '#000', fontWeight: '500', paddingBottom: 2, textAlign: 'center'}} 
                                    onChangeText={(hour) => this.setState({totalHour: hour})}
                                    keyboardType='numeric' 
                                    maxLength={2} 
                                ></TextInput>
                            </View>
                        </View>
                    </View>
                    <View style={styles.container}>
                        <DCNWorkTable week={this.state.week}></DCNWorkTable>
                    </View>
                    <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', padding: 15}}>
                        <View style={{}}>
                            <TouchableOpacity 
                                style={[styles.btn, styles.btnGray]} 
                                onPress={() => this.props.navigation.goBack()}
                            >
                                <Text style={styles.btnText}>Exit</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{}}>
                            <TouchableOpacity 
                                style={[styles.btn, styles.btnBlue]} 
                                onPress={() => this.saveAndExitDCN()}
                            >
                                <Text style={styles.btnText}>SAVE & EXIT</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{}}>
                            <TouchableOpacity 
                                style={[styles.btn, styles.btnYellow]}
                                onPress={() => this.saveAndNextDCN()}
                            >
                                <Text style={styles.btnText}>SAVE & NEXT</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </ScrollView>
        );
    };

    saveAndExitDCN() {
        console.log('clicked Save & Exit button!')
        this.props.navigation.goBack()
    }

    saveAndNextDCN() {
        console.log('clicked Save & Next button!')
        this.props.navigation.navigate('SignAndSend')
    }

}

const styles = StyleSheet.create({
    contentContainer: {paddingVertical: 20, backgroundColor: '#fff'},
    container: { width: '100%', padding: 16, paddingTop: 30, backgroundColor: '#fff' },
    head: { height: 40, backgroundColor: '#f1f8ff' },
    text: { margin: 6 },
    btn: { alignContent: 'center', justifyContent: 'center', textAlign: 'center', width: 120, height: 35, borderRadius: 12 },
    btnGray: { backgroundColor: '#b4b4b4' },
    btnBlue: { backgroundColor: '#b8d5ff' },
    btnYellow: { backgroundColor: '#ffed75' },
    btnText: { fontSize: 17, color: '#000', textAlign: 'center', fontWeight: '700' }
});

export default DailyCareNotesScreen;