import { Stack } from "expo-router";

export default function Layout() {
    return (
        <Stack>
            <Stack.Screen name="(login)/index" options={{headerShown: false}} />
            <Stack.Screen name="config/index"  options={{title: 'Configurações'}}/>
            <Stack.Screen name="home/index"  options={{title: 'Home'}}/>
        </Stack>
    )
}