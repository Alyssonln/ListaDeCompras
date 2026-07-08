import { CircleCheck, CircleDashed } from 'lucide-react-native'
import { StatusFilter } from '@/types/StatusFilter'

type Props = {
  status: StatusFilter
}

export function IconeStatus({ status }: Props) {
  return status === StatusFilter.DONE ? (
    <CircleCheck size={18} color='#2C46B1' />
  ) : (
    <CircleDashed size={18} color='#000000' />
  )
}