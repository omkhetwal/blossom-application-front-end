import theme, { Box, Text } from "@/utils/theme"
import { FieldError } from "react-hook-form"
import { StyleSheet, TextInput, TextInputProps } from "react-native"

type InputProps = {
  label: string
  error?: FieldError | undefined
} & TextInputProps

const Input = ({ label, error, ...props }: InputProps) => {
  return (
    <Box flexDirection="column">
      <Text variant="textXs" textTransform="uppercase" mb="3.5">
        {label}
      </Text>
      <TextInput
        style={{
          padding: 16,
          borderWidth: 1,
          borderColor: error ? theme.colors.rose500 : theme.colors.grey,
          borderRadius: theme.borderRadii["rounded-7xl"],
        }}
        {...props}
      />
      {error && (
        <Text mt="3.5" color="rose500">
          {label} is required
        </Text>
      )}
    </Box>
  )
}

export default Input

const styles = StyleSheet.create({})
