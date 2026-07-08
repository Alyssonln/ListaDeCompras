import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native'
import { styles } from './styles'
import { StatusFilter } from '@/types/StatusFilter'
import { IconeStatus } from '../IconStatus'

type Props = TouchableOpacityProps & {
  status: StatusFilter
  isActive: boolean
}

export function FilterStatus({ status, isActive, ...rest }: Props) {
  return (
    <TouchableOpacity 
      style={[styles.container, {opacity: isActive ? 1 : 0.5}]} 
      { ...rest }
    >
      <IconeStatus status={status} />
      <Text style={styles.titulo}>
        {
          status === StatusFilter.DONE ? 'Comprados' : 'Pendentes'
        }
      </Text>
    </TouchableOpacity>
  )
}