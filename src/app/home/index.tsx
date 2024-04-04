import { router } from "expo-router";
import { StyleSheet, Text, View, Button } from "react-native";
import { useAutenticacaoContext } from "../providers/autenticacao";

export default function HomeScreen() {

    const { usuario, setUsuario } = useAutenticacaoContext();
    // ====================
    return (<View>
        <Text>Bem vindo, {usuario}!</Text>

        <Button title="Abrir Configurações" onPress={() => router.push('/config/')} />
        <Button title="SAIR" color="tomato" onPress={() => {
            setUsuario(null);
            router.replace('/')
        }} />
    </View>)
}
const styles = StyleSheet.create({
    
});