import { Stack } from "expo-router";
import { AutenticacaoProvider } from "./providers/autenticacao";

export default function Layout() {
    return (
        <AutenticacaoProvider>
            <Stack>
                <Stack.Screen name="(login)/index" options={{headerShown: false}} />
                <Stack.Screen name="config/index"  options={{title: 'Configurações'}}/>
                <Stack.Screen name="home/index"  options={{title: 'Home'}}/>
            </Stack>
        </AutenticacaoProvider>
    )
}