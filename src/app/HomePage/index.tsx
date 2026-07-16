import { Alert, FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { InputArea } from "@/components/InputArea";
import { ButtonAdd } from "@/components/ButtonAdd";
import { FilterStatus } from "@/components/FilterStatus";
import { StatusFilter } from "@/types/StatusFilter";
import { Item } from "@/components/Item";
import { useEffect, useState } from "react";
import { ItemsStorage, itemStorage } from "@/storage/itemsStorage"

  const STATUS_FILTER: StatusFilter[] = [StatusFilter.PENDING, StatusFilter.DONE]

export function HomePage() {

  const [filter, setFilter] = useState(StatusFilter.PENDING)
  const [description, setDescription] = useState("")
  const [item, setItem] = useState<ItemsStorage[]>([])

  async function handleAdd() {
    if(!description.trim()) {
      return Alert.alert("Adicionar", "Informe a descrição para adicionar.")
    }

    const newItem = {
      id: Date.now().toString(), 
      description, 
      status: StatusFilter.PENDING
    }

    await itemStorage.add(newItem)
    await itemsByStatus()

    Alert.alert("Adicionado", `Adicionado ${description}`)
    setFilter(StatusFilter.PENDING)
    setDescription("")
  }

  async function itemsByStatus() {
    try {
      const response = await itemStorage.getByStatus(filter)
      setItem(response)
    } catch (error) {
      console.log(error)
      Alert.alert("Erro", "Não foi possivel filtrar os itens.")
    }
  }

  async function handleRemove(id: string) {
    try {
      await itemStorage.remove(id)
      await itemsByStatus()
    } catch (error) {
      console.log(error)
      Alert.alert("Remover", "Não foi possivel remover.")
    }
  }

  function handleClear() {
    Alert.alert("Limpar", "Deseja remover todos?", [
      { text: "Não", style: "cancel" },
      { text: "Sim", onPress: () => onCLear() }
    ])
  }

  async function onCLear() {
    try {
      await itemStorage.clear()
      setItem([])
    } catch (error) {
      console.log(error)
      Alert.alert("Erro", "Não foi possível remover os items.")
    }
  }

  async function handleToggleItemStatus(id: string) {
    try {
      await itemStorage.toggleStatus(id)
      await itemsByStatus()
    } catch (error) {
      console.log(error)
      Alert.alert("Erro", "Não foi possível atualizar o status.")
    }
  }

  useEffect( () => {
    itemsByStatus()
  }, [filter])

  return (
    <View style={styles.container}>
      
      <Image source={require('@/assets/logo.png')} style={styles.imgLogo} />

      <View style={styles.inputArea}>
        <InputArea 
          placeholder="O que você precisa comprar?"
          placeholderTextColor="#828282"
          onChangeText={setDescription}
          value={description}
        />
        <ButtonAdd 
          titulo="Adicionar" 
          activeOpacity={0.7}
          onPress={() => handleAdd()}
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
        <TouchableOpacity style={styles.btnLimpar} activeOpacity={0.7} onPress={handleClear}>
          <Text style={styles.textLimpar}>
            Limpar
          </Text>
        </TouchableOpacity>
        </View>

        <FlatList 
          data={item}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => 
            <Item 
              data={item}
              onStatus={() => handleToggleItemStatus(item.id)}
              onRemove={() => handleRemove(item.id)}
            />
          }
          ListEmptyComponent={() => <Text style={styles.empty}>Nenhum item aqui.</Text>}
          showsVerticalScrollIndicator={false}
        />
      </View>

    </View>
  )
}
