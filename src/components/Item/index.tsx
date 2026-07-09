import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { Trash2 } from 'lucide-react-native'
import { StatusFilter } from "@/types/StatusFilter";
import { IconeStatus } from "../IconStatus";

type ItemData = {
  status: StatusFilter
  description: string
}

type Props = {
  data: ItemData
  onStatus: () => void
  onRemove: () => void
}

export function Item({ data, onStatus, onRemove }: Props) {
  return (
    <View style={styles.container}>

    <TouchableOpacity onPress={onStatus}>
      <IconeStatus status={data.status} />
    </TouchableOpacity>

    <Text style={styles.description}>
      {data.description}
    </Text>

    <TouchableOpacity activeOpacity={0.7} onPress={onRemove}>
      <Trash2 size={18} color='#828282' />
    </TouchableOpacity>

  </View>
  )
}