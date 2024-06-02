import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useState } from "react";
import * as Animatable from "react-native-animatable";
import {
  EnvelopeIcon,
  EyeSlashIcon,
  LockClosedIcon,
  TrashIcon,
} from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";

export default function LoginScreen() {
  const navigation = useNavigation();
  const [focusInput, seTFocusInput] = useState(null);
  return (
    <SafeAreaView className=" bg-green-700 h-screen">
      <Animatable.Image
        source={require("../assets/Logo/light.png")}
        className=" w-14 h-44 absolute right-12 -top-1"
        animation="zoomInUp"
        iterationCount={2}
        easing="ease-out"
      />
      <Animatable.Image
        source={require("../assets/Logo/light.png")}
        className="w-12 h-36 absolute left-12 -top-4"
        animation="zoomInUp"
        iterationCount={2}
        easing="ease-out"
      />
      <View className="mt-12">
        <Text className=" font-extrabold text-white text-4xl text-center">
          Welcome
        </Text>
      </View>
      <View className="top-32 mx-4">
        <Text className=" font-extrabold text-white text-base">Email</Text>
        <View
          className={`p-2 border-b-2 mt-2 ${
            focusInput === "email" ? "border-yellow-500" : "border-white"
          }`}
        >
          <View className=" absolute top-2 border-r border-gray-300 px-2">
            <EnvelopeIcon size={18} color="white" />
          </View>

          <TextInput
            placeholder="ndizibaidu23@gmail.com"
            placeholderTextColor="white"
            keyboardType="default"
            className=" placeholder:px-9"
            onFocus={() => seTFocusInput("email")}
            onBlur={() => seTFocusInput(null)}
          />
        </View>
        <Text className=" font-extrabold text-white text-base mt-4">
          Password
        </Text>
        <View
          className={`p-2 border-b-2  mt-2 ${
            focusInput === "password" ? "border-yellow-500" : "border-white"
          }`}
        >
          <View className="absolute top-2 border-r border-gray-300 px-2">
            <LockClosedIcon size={18} color="white" />
          </View>

          <TextInput
            placeholder="******************"
            placeholderTextColor="white"
            keyboardType="default"
            className=" placeholder:px-9"
            onFocus={() => seTFocusInput("password")}
            onBlur={() => seTFocusInput(null)}
          />
          <View className=" absolute top-2 right-4">
            <EyeSlashIcon size={18} color="white" />
          </View>
        </View>
        <View className=" mt-5 flex-row items-center justify-between mx-2">
          <View className=" flex-row items-center space-x-2">
            <View className=" w-4 h-4 border-2 border-white rounded-md"></View>
            <Text className=" font-bold text-white text-sm">Remember Me</Text>
          </View>
          <Text className=" font-bold text-yellow-300 text-sm">
            Forgot Password?
          </Text>
        </View>
        <View className="mt-6">
          <TouchableOpacity className=" p-3 bg-yellow-400 rounded-lg">
            <Text className="font-extrabold text-green-800 text-base text-center">
              Login
            </Text>
          </TouchableOpacity>
        </View>
        <View className=" mt-4 mx-2 flex-row items-center space-x-1">
          <Text className="font-bold text-white text-sm">
            Don't have an account?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Register")}>
            <Text className="font-extrabold text-yellow-400 text-sm">
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
        <View className=" mt-6">
          <Text className=" text-white font-extrabold text-base text-center">
            ---------Or Login With---------
          </Text>
          <View className=" flex items-center">
            <View className="flex-row items-center space-x-3 mt-4">
              <TouchableOpacity className=" p-2 bg-gray-200 rounded-full">
                <Image
                  source={require("../assets/Logo/google-9646e5e7.png")}
                  className="w-8 h-8"
                />
              </TouchableOpacity>
              <TouchableOpacity className=" p-2 bg-gray-200 rounded-full">
                <Image
                  source={require("../assets/Logo/apple-logo-transparent.png")}
                  className="w-8 h-8"
                />
              </TouchableOpacity>
              <TouchableOpacity className=" p-2 bg-gray-200 rounded-full">
                <Image
                  source={require("../assets/Logo/facebook-logo-2019.png")}
                  className="w-8 h-8"
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
