import { Text, View } from "react-native";
import "../../global.css"
import { Link } from "expo-router";



export default function Index() {
  return (
    <View className="flex-1 justify-center items-center"
    >
      <Text className="text-green-500">Edit app/index.tsx to edit this screen.</Text>
      <Link className="underline" href="/about"> Go To About Screen</Link>

    </View>
  );
}

