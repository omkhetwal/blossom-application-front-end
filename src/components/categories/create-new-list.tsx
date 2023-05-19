import { CategoriesNavigationType } from "@/navigation/types"
import { Box, Text, Theme } from "@/utils/theme"
import { Feather } from "@expo/vector-icons"
import { useNavigation } from "@react-navigation/native"
import { useTheme } from "@shopify/restyle"
import React from "react"
import { Pressable } from "react-native"

const CreateNewList = () => {
  const navigation = useNavigation<CategoriesNavigationType>()
  const theme = useTheme<Theme>()

  const navigateToCreateCategory = () => {
    navigation.navigate("CreateCategory", {})
  }

  return (
    <Pressable onPress={navigateToCreateCategory}>
      <Box
        p="4"
        bg="lightGray"
        borderRadius="rounded-5xl"
        flexDirection="row"
        alignItems="center"
      >
        <Feather name="plus" size={24} color={theme.colors.gray500} />
        <Text variant="textXl" fontWeight="600" color="gray650" ml="3">
          Create new list
        </Text>
      </Box>
    </Pressable>
  )
}

export default CreateNewList
