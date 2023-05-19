import { HomeScreenNavigationType } from "@/navigation/types"
import axiosInstance from "@/services/config"
import { ITask } from "@/types"
import { AnimatedBox, Box, Text } from "@/utils/theme"
import { Ionicons } from "@expo/vector-icons"
import { useNavigation } from "@react-navigation/native"
import React from "react"
import { Pressable } from "react-native"
import {
  FadeInLeft,
  FadeInRight,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated"
import useSWRMutation from "swr/mutation"

type TaskProps = {
  task: ITask
  mutateTasks: () => Promise<ITask[] | undefined>
}

interface ITaskStatusRequest {
  id: string
  isCompleted: boolean
}

const toggleTaskStatusRequest = async (
  url: string,
  { arg }: { arg: ITaskStatusRequest }
) => {
  try {
    await axiosInstance.put(url + "/" + arg.id, {
      ...arg,
    })
  } catch (error) {
    console.log("error in toggleTaskStatusRequest", error)
    throw error
  }
}

const Task = ({ task, mutateTasks }: TaskProps) => {
  const { trigger } = useSWRMutation("tasks/update", toggleTaskStatusRequest)

  const offset = useSharedValue(1)
  const checkmarkIconSize = useSharedValue(0.8)

  const navigation = useNavigation<HomeScreenNavigationType>()

  const toggleTaskStatus = async () => {
    try {
      const _updatedTask = {
        id: task._id,
        isCompleted: !task.isCompleted,
      }
      await trigger(_updatedTask)
      await mutateTasks()
      if (!_updatedTask.isCompleted) {
        offset.value = 1
        checkmarkIconSize.value = 0
      } else {
        offset.value = 1.1
        checkmarkIconSize.value = 1
      }
    } catch (error) {
      console.log("error in toggleTaskStatus", error)
      throw error
    }
  }

  const navigateToEditTask = () => {
    navigation.navigate("EditTask", {
      task,
    })
  }

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ scale: withSpring(offset.value) }],
    }
  })

  const checkMarkIconStyles = useAnimatedStyle(() => {
    return {
      transform: [{ scale: withSpring(checkmarkIconSize.value) }],
      opacity: task.isCompleted ? offset.value : 0,
    }
  })

  return (
    <AnimatedBox entering={FadeInRight} exiting={FadeInLeft}>
      <Pressable onPress={toggleTaskStatus} onLongPress={navigateToEditTask}>
        <Box
          p="4"
          bg="lightGray"
          borderRadius="rounded-5xl"
          flexDirection="row"
        >
          <Box flexDirection="row" alignItems="center">
            <AnimatedBox
              style={[animatedStyles]}
              flexDirection="row"
              alignItems="center"
            >
              <Box
                height={26}
                width={26}
                bg={task.isCompleted ? "gray9" : "gray300"}
                borderRadius="rounded-xl"
                alignItems="center"
                justifyContent="center"
              >
                {task.isCompleted && (
                  <AnimatedBox style={[checkMarkIconStyles]}>
                    <Ionicons name="ios-checkmark" size={20} color="white" />
                  </AnimatedBox>
                )}
              </Box>
            </AnimatedBox>
            <Text ml="3" variant="textXl">
              {task.name}
            </Text>
          </Box>
          <Box></Box>
        </Box>
      </Pressable>
    </AnimatedBox>
  )
}

export default Task
