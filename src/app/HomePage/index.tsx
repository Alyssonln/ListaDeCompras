import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { InputArea } from "@/components/InputArea";
import { ButtonAdd } from "@/components/ButtonAdd";
import { FilterStatus } from "@/components/FilterStatus";
import { StatusFilter } from "@/types/StatusFilter";
import { Item } from "@/components/Item";
import { useState } from "react";

  const STATUS_FILTER: StatusFilter[] = [StatusFilter.PENDING, StatusFilter.DONE]

  const LISTA_EXEMPLO = [
    {id: 1, status: StatusFilter.DONE, description: 'café'},
    {id: 2, status: StatusFilter.PENDING, description: '3 Pacotes de macarrão'},
    {id: 3, status: StatusFilter.PENDING, description: 'Pão francês'},
  ]

export function HomePage() {

  const [filter, setFilter] = useState<StatusFilter>(StatusFilter.PENDING)

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
              isActive={status === filter}
              onPress={() => setFilter(status)}
            />
          ))
        }
        <TouchableOpacity style={styles.btnLimpar} activeOpacity={0.7}>
          <Text style={styles.textLimpar}>
            Limpar
          </Text>
        </TouchableOpacity>
        </View>

        <FlatList 
          data={LISTA_EXEMPLO}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => 
            <Item 
              data={item}
              onStatus={() => console.log('O status mudou.')}
              onRemove={() => console.log('Removido.')}
            />
          }
          ListEmptyComponent={() => <Text style={styles.empty}>Nenhum item aqui.</Text>}
          showsVerticalScrollIndicator={false}
        />
      </View>

    </View>
  )
}
