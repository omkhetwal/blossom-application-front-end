import React from "react"
import Svg, { Circle, Path } from "react-native-svg"

type IconProps = {
  width?: number
  height?: number
  color?: string
}

type IconName = "home" | "completed" | "categories" | "calendar"

const Home = ({ color = "black", height = 20, width = 20 }: IconProps) => (
  <Svg width={width} height={height} viewBox="0 0 19 20" fill="none">
    <Path
      d="M8.92527 1.40363L0.925273 7.02207C0.658682 7.20929 0.5 7.51464 0.5 7.84041V18C0.5 18.5523 0.947715 19 1.5 19H9.5H17.5C18.0523 19 18.5 18.5523 18.5 18V7.84041C18.5 7.51464 18.3413 7.20929 18.0747 7.02207L10.0747 1.40363C9.72985 1.16143 9.27015 1.16143 8.92527 1.40363Z"
      stroke={color}
    />
  </Svg>
)
const Completed = ({ color = "black", height = 20, width = 20 }: IconProps) => (
  <Svg width={width} height={height} viewBox="0 0 19 18" fill="none">
    <Circle cx={9.5} cy={9} r={8.5} stroke={color} />
    <Path
      d="M4 8.5C4 10 4.36418 11.1735 5 12C6.28097 13.6652 8.06982 13.9999 9.5 14C11.0334 14.0001 12.2064 13.5523 13.5 12C14.138 11.1018 14.5 9.5 14.5 8.5"
      stroke={color}
      strokeLinecap="round"
    />
  </Svg>
)

const Calendar = ({ color = "black", height = 20, width = 20 }: IconProps) => (
  <Svg width={width} height={height} viewBox="0 0 20 20" fill="none">
    <Path
      d="M18.5 9.06708V4.19513C18.5 3.64284 18.0523 3.19513 17.5 3.19513H9.5H1.5C0.947715 3.19513 0.5 3.64284 0.5 4.19513V9.06708M18.5 9.06708V18C18.5 18.5523 18.0523 19 17.5 19H9.5H1.5C0.947715 19 0.5 18.5523 0.5 18V9.06708M18.5 9.06708H0.5"
      stroke={color}
    />
    <Path d="M4.5 3.19512V1" stroke={color} strokeLinecap="round" />
    <Path d="M14 3.19512V1" stroke={color} strokeLinecap="round" />
  </Svg>
)

const Categories = ({
  color = "black",
  height = 20,
  width = 20,
}: IconProps) => (
  <Svg width={width} height={height} viewBox="0 0 20 20" fill="none">
    <Path
      d="M6.71428 1H3C1.89543 1 1 1.89543 1 3V6.2C1 7.30457 1.89543 8.2 3 8.2H6.71429C7.81886 8.2 8.71429 7.30457 8.71429 6.2V3C8.71429 1.89543 7.81885 1 6.71428 1Z"
      stroke={color}
      strokeLinecap="round"
    />
    <Path
      d="M16.9999 1H13.2856C12.1811 1 11.2856 1.89543 11.2856 3V6.2C11.2856 7.30457 12.1811 8.2 13.2856 8.2H16.9999C18.1045 8.2 18.9999 7.30457 18.9999 6.2V3C18.9999 1.89543 18.1045 1 16.9999 1Z"
      stroke={color}
      strokeLinecap="round"
    />
    <Path
      d="M6.71428 11.8H3C1.89543 11.8 1 12.6954 1 13.8V17C1 18.1046 1.89543 19 3 19H6.71429C7.81886 19 8.71429 18.1046 8.71429 17V13.8C8.71429 12.6954 7.81885 11.8 6.71428 11.8Z"
      stroke={color}
      strokeLinecap="round"
    />
    <Path
      d="M16.9999 11.8H13.2856C12.1811 11.8 11.2856 12.6954 11.2856 13.8V17C11.2856 18.1046 12.1811 19 13.2856 19H16.9999C18.1045 19 18.9999 18.1046 18.9999 17V13.8C18.9999 12.6954 18.1045 11.8 16.9999 11.8Z"
      stroke={color}
      strokeLinecap="round"
    />
  </Svg>
)

const Icons = ({
  name,
  color,
  height,
  width,
}: IconProps & { name: IconName }) => {
  switch (name) {
    case "home":
      return <Home color={color} height={height} width={width} />
    case "completed":
      return <Completed color={color} height={height} width={width} />
    case "categories":
      return <Categories color={color} height={height} width={width} />
    case "calendar":
      return <Calendar color={color} height={height} width={width} />
  }
}

export default Icons
