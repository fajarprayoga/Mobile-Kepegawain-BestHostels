import { StyleSheet, ImageBackground, View, TouchableWithoutFeedback } from 'react-native';
import React, {useState} from 'react';
import { Layout, Input, Button, Icon, Text, Autocomplete, AutocompleteItem } from '@ui-kitten/components';
import { useForm } from '../../utils';
import { Gap } from '../../component';

const Signup = () => {

     // logic
     const [form, setForm] = useForm({
        username : '',
        password : ''
    })

    const actionLogin = () => {
        console.log(form);
    }

    const actionSignup = () => {
        navigation.navigate('Signup')
    }


    // AutoComplate
    const filter = (item, query) => item.title.toLowerCase().includes(query.toLowerCase());

    const StarIcon = (props) => (
    <Icon {...props} name='star'/>
    );
    const movies = [
        { title: 'Star Wars' },
        { title: 'Back to the Future' },
        { title: 'The Matrix' },
        { title: 'Inception' },
        { title: 'Interstellar' },
    ];
    const [value, setValue] = React.useState(null);
    const [data, setData] = React.useState(movies);
  
    const onSelect = (index) => {
      setValue(data[index].title);
    };
  
    const onChangeText = (query) => {
      setValue(query);
      setData(movies.filter(item => filter(item, query)));
    };
  
    const clearInput = () => {
      setValue('');
      setData(movies);
    };
  
    const renderOption = (item, index) => (
      <AutocompleteItem
        key={index}
        title={item.title}
        accessoryLeft={StarIcon}
      />
    );
  
    const renderCloseIcon = (props) => (
      <TouchableWithoutFeedback onPress={clearInput}>
        <Icon {...props} name='close'/>
      </TouchableWithoutFeedback>
    );

    // VIew 
    return (
        <ImageBackground  style={styles.photo} source={image} resizeMode='cover'>
            <View style={{flexDirection:'row', justifyContent:'center'}}>
                <Text style={styles.text} category='h1'>Signup Pegawai</Text>
            </View>
            <Gap height={20} />
            <Input
                placeholder='Masukan Username Anda'
                value={form.username}
                onChangeText={value => setForm('username',value)}
            />
            <Gap height={20} />
        
            <Input
                placeholder='Masukan Nama Anda'
                value={form.name}
                onChangeText={value => setForm('name',value)}
            />
            <Gap height={20} />

            <Input
                placeholder='Masukan Password'
                value={form.username}
                onChangeText={value => setForm('password',value)}
            />
            <Gap height={20} />

            <Input
                placeholder='Masukan No Handphone'
                value={form.username}
                onChangeText={value => setForm('username',value)}
            />
            <Gap height={20} />

            <Autocomplete
                placeholder='Jabatan'
                value={value}
                accessoryRight={renderCloseIcon}
                onChangeText={onChangeText}
                onSelect={onSelect}>
                {data.map(renderOption)}
            </Autocomplete>
            <Gap height={20} />
            
            <Button style={styles.button} status='primary' onPress={actionSignup}>
                Signup
            </Button>
            <Gap height={20} />
            <Button style={styles.button} status='basic' >
                Login
            </Button>
        </ImageBackground>
    );
};

export default Signup;

const image =require('../../assets/Background/background-img.png');

const styles = StyleSheet.create({
    photo: {
        justifyContent: "center",
        flex: 1,
        backgroundColor: "#91001fa9",
        padding:20
    },
  });
