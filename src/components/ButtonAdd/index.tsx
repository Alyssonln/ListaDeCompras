import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native'
import { styles } from './styles'

type Props = TouchableOpacityProps & {
  titulo: string
}

export function ButtonAdd({ titulo, ...rest }: Props) {
  return (
    <TouchableOpacity style={styles.container} { ...rest }>
      <Text style={styles.titulo}>
        { titulo }
      </Text>
    </TouchableOpacity>
  )
}