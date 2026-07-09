import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { InputArea } from "@/components/InputArea";
import { ButtonAdd } from "@/components/ButtonAdd";
import { FilterStatus } from "@/components/FilterStatus";
import { StatusFilter } from "@/types/StatusFilter";
import { Item } from "@/components/Item";

export function HomePage() {

  const STATUS_FILTER: StatusFilter[] = [StatusFilter.DONE, StatusFilter.PENDING]

  const LISTA_EXEMPLO = [
    {id: 1, status: StatusFilter.DONE, description: 'café'},
    {id: 2, status: StatusFilter.PENDING, description: '3 Pacotes de macarrão'},
    {id: 3, status: StatusFilter.PENDING, description: 'Pão francês'}
  ]

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
        <View style={styles.statusArea}>
          {
          STATUS_FILTER.map((status) => (
            <FilterStatus 
              key={status}
              status={ status }
              isActive
            />
          ))
        }
        <TouchableOpacity style={styles.btnLimpar} activeOpacity={0.7}>
          <Text style={styles.textLimpar}>
            Limpar
          </Text>
        </TouchableOpacity>
        </View>

        {
          LISTA_EXEMPLO.map((item) => (
            <Item 
              data={{ status: item.status, description: item.description }}
              onStatus={() => console.log('Mudar o status.')}
              onRemove={() => console.log('Removido.')}
              key={item.id}
            />
          ))
        }
      </View>

    </View>
  )
}

