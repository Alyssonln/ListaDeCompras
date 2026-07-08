import { Image, Text, View } from "react-native";
import { styles } from "./styles";
import { InputArea } from "@/components/InputArea";
import { ButtonAdd } from "@/components/ButtonAdd";

export function HomePage() {
  return (
    <View style={styles.container}>
      
      <Image source={require('@/assets/logo.png')} style={styles.imgLogo} />

      <View style={styles.inputArea}>
        <InputArea 
          placeholder="O que você precisa comprar?"
          placeholderTextColor="#828282"
        />
        <ButtonAdd 
          titulo="Adicionar" 
          activeOpacity={0.7}
        />
      </View>

      <View style={styles.listArea}>

      </View>

    </View>
  )
}
