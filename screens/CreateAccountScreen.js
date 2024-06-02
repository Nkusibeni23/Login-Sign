import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import * as Animatable from "react-native-animatable";
import React, { useState } from "react";
import {
  EnvelopeIcon,
  EyeSlashIcon,
  LockClosedIcon,
  PhoneArrowUpRightIcon,
  TrashIcon,
  UserCircleIcon,
} from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";

export default function CreateAccount() {
  const navigation = useNavigation();
  const [focusInput, seTFocusInput] = useState(null);
  return (
    <SafeAreaView className=" bg-green-700 h-screen ">
      <Animatable.Image
        source={require("../assets/Logo/light.png")}
        className=" w-14 h-40 absolute right-4 -top-1"
        animation="zoomInUp"
        iterationCount={2}
        easing="ease-out"
      />
      <Animatable.Image
        source={require("../assets/Logo/light.png")}
        className="w-12 h-28 absolute left-12 -top-8"
        animation="zoomInUp"
        iterationCount={2}
        easing="ease-out"
      />
      <View className=" mt-6">
        <Text className=" font-extrabold text-white text-3xl text-center">
          Create Account
        </Text>
      </View>
      <View className=" top-12 mx-4">
        <Text className=" text-white font-extrabold text-base">Username</Text>
        <View
          className={`p-3 border-b-2 ${
            focusInput === "username" ? "border-yellow-500" : "border-white"
          }`}
        >
          <View className=" absolute top-3 border-r border-gray-300 px-2">
            <UserCircleIcon size={18} color="white" />
          </View>

          <TextInput
            placeholder="Benny Chrispin"
            placeholderTextColor="white"
            keyboardType="default"
            className=" placeholder:px-9"
            onFocus={() => seTFocusInput("username")}
            onBlur={() => seTFocusInput(null)}
          />
        </View>
        <Text className=" text-white font-extrabold text-base mt-4">Email</Text>
        <View
          className={`p-3 border-b-2 border-white ${
            focusInput === "email" ? "border-yellow-500" : "border-white"
          }`}
        >
          <View className=" absolute top-3 border-r border-gray-300 px-2">
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
        <Text className=" text-white font-extrabold text-base mt-4">
          Phone No
        </Text>
        <View
          className={`p-3 border-b-2 border-white ${
            focusInput === "phone" ? "border-yellow-500" : "border-white"
          }`}
        >
          <View className=" absolute top-3 border-r border-gray-300 px-2">
            <PhoneArrowUpRightIcon size={18} color="white" />
          </View>

          <TextInput
            placeholder="+25 000-00-000"
            placeholderTextColor="white"
            keyboardType="default"
            className=" placeholder:px-9"
            onFocus={() => seTFocusInput("phone")}
            onBlur={() => seTFocusInput(null)}
          />
        </View>
        <Text className=" text-white font-extrabold text-base mt-4">
          Password
        </Text>
        <View
          className={`p-3 border-b-2 border-white ${
            focusInput === "password" ? "border-yellow-500" : "border-white"
          }`}
        >
          <View className=" absolute top-3 border-r border-gray-300 px-2">
            <LockClosedIcon size={18} color="white" />
          </View>

          <TextInput
            placeholder="****************"
            placeholderTextColor="white"
            keyboardType="default"
            className=" placeholder:px-9"
            onFocus={() => seTFocusInput("password")}
            onBlur={() => seTFocusInput(null)}
          />
          <View className=" absolute top-3 right-4">
            <EyeSlashIcon size={18} color="white" />
          </View>
        </View>
        <Text className=" text-white font-extrabold text-base mt-4">
          Confirm Password
        </Text>
        <View
          className={`p-3 border-b-2 border-white ${
            focusInput === "confirm" ? "border-yellow-500" : "border-white"
          }`}
        >
          <View className=" absolute top-3 border-r border-gray-300 px-2">
            <LockClosedIcon size={18} color="white" />
          </View>

          <TextInput
            placeholder="****************"
            placeholderTextColor="white"
            keyboardType="default"
            className=" placeholder:px-9"
            onFocus={() => seTFocusInput("confirm")}
            onBlur={() => seTFocusInput(null)}
          />
          <View className=" absolute top-3 right-4">
            <EyeSlashIcon size={18} color="white" />
          </View>
        </View>
        <TouchableOpacity className=" p-3 bg-yellow-500 rounded-lg mt-6">
          <Text className=" text-green-800 text-center font-bold text-base">
            Create Account
          </Text>
        </TouchableOpacity>
        <View className=" mt-4 mx-3 flex-row items-center space-x-2">
          <Text className=" text-white font-medium text-sm">
            Already have an account?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text className=" text-yellow-400 font-bold text-sm">Login</Text>
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
