import * as React from "react";
import { View } from "react-native";
import Svg, { SvgProps, Defs, LinearGradient, Stop, Path } from "react-native-svg";

export default function Star(props: SvgProps) {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={17}
            height={17}
            viewBox="0 0 32 32"
            {...props}
        >
            <Defs>
                <LinearGradient id="a">
                    <Stop offset={props.rating?.width} stopColor="#FFC300" />
                    <Stop offset={props.rating?.width} stopColor="gray" />
                </LinearGradient>
            </Defs>
            <Path
                fill="url(#a)"
                d="M20.388 10.918 32 12.118l-8.735 7.749L25.914 31.4l-9.893-6.088L6.127 31.4l2.695-11.533L0 12.118l11.547-1.2L16.026.6l4.362 10.318z"
            />
        </Svg>
    );
}
