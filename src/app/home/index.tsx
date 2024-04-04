import { router } from "expo-router";
import { StyleSheet, Text, View, Button } from "react-native";

export default function HomeScreen() {
    
    return (<View>
        <Text>Bem vindo, FULANO!</Text>

        <Button title="Abrir Configurações" onPress={() => router.push('/config')} />
        <Button title="SAIR" color="tomato" onPress={() => router.replace('/')} />
    </View>)
}
const styles = StyleSheet.create({
    
});