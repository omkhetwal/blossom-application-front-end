import theme from "@/utils/theme"
import React, { ReactNode } from "react"
import { SafeAreaView } from "react-native-safe-area-context"

type SafeAreaWrapperProps = {
  children: ReactNode
}

const SafeAreaWrapper = ({ children }: SafeAreaWrapperProps) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: theme.colors.white,
      }}
    >
      {children}
    </SafeAreaView>
  )
}

export default SafeAreaWrapper
