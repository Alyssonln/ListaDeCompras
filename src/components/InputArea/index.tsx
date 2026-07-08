import { TextInput, TextInputProps } from "react-native";
import { styles } from "./styles";

export function InputArea({...rest}: TextInputProps) {
  return (
    <TextInput {...rest} style={styles.container} />
  )
}