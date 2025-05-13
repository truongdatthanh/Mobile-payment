// import { Link } from "expo-router";
// import { Text, View } from "react-native";
// import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
// import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

// export default function ContactWithUs ()
// {
//     return (
//         <View className="flex-1 bg-white p-6">
//             <View className="items-center justify-center mt-10 mb-6">
//                 <Text className="text-5xl font-bold text-center">⛛ AutoPAY</Text>
//             </View>

//             <View className="mb-6">
//                 <Text className="text-2xl font-semibold text-gray-800 mb-2">
//                     Thanh toán an toàn, tiện lợi và bảo mật
//                 </Text>
//                 <Text className="text-base text-gray-600">
//                     Dễ dàng quản lý mọi thanh toán, hóa đơn, lịch sử giao dịch với dịch vụ tích hợp open banking của chúng tôi.
//                 </Text>
//             </View>

//             <View className="mb-6">
//                 <Text className="text-base text-gray-800 mb-1">✔ Tốc độ xử lý nhanh</Text>
//                 <Text className="text-base text-gray-800 mb-1">✔ Hỗ trợ nhiều ngân hàng</Text>
//                 <Text className="text-base text-gray-800 mb-1">✔ Bảo mật tuyệt đối</Text>
//                 <Text className="text-base text-gray-800">✔ Dễ dàng tích hợp</Text>
//             </View>

//             <View className="border-t border-gray-300 pt-4">
//                 <Text className="text-lg font-semibold text-gray-800 mb-2">Thông tin liên hệ</Text>
//                 <Text className="text-base text-gray-700">📞 Hotline: 1900 1234</Text>
//                 <Text className="text-base text-gray-700">✉ Email: support@autopay.vn</Text>
//             </View>


//             <View className="border-t border-gray-300 pt-4">
//                 <Text className="text-lg font-semibold text-gray-800 mb-2">Trang web của chúng tôi</Text>
//                 <Link href="https://autopay.vn/" className="text-blue-500 border boder-gray-500 p-4 rounded-lg" >
//                     autopay.vn
//                 </Link>
//             </View>

//             <View className="border-t border-gray-300 pt-4">
//                 <Text className="text-lg font-semibold text-gray-800 mb-2">Mạng xã hội</Text>
//                 <View className="flex-row gap-4" >
//                     <FontAwesome5 name="facebook" size={ 24 } color="blue" />
//                     <FontAwesome6 name="x-twitter" size={ 24 } color="black" />
//                     <FontAwesome5 name="youtube" size={ 24 } color="red" />
//                     <FontAwesome5 name="github" size={24} color="black" />
//                 </View>
//             </View>
//         </View>
//     );
// }

import { Text, View, TouchableOpacity, ScrollView, Linking, SafeAreaView, Platform, StatusBar } from "react-native";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import { router } from "expo-router";

export default function ContactWithUs ()
{
    const openLink = ( url: string ) =>
    {
        Linking.openURL( url );
    };

    return (
        <>
            <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
            <SafeAreaView className="flex-1 bg-[#1c40f2]" style={ { paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0 } }>
                <ScrollView className="flex-1 bg-[#1c40f2]" showsVerticalScrollIndicator={ false }>
                    {/* Header Section */ }
                    <View className="bg-white">
                        <View className="bg-[#1c40f2] pt-6 pb-10 px-6 rounded-b-3xl">
                            <View className="items-center justify-center mb-4">
                                <Text className="text-4xl font-bold text-white">⛛ AutoPAY</Text>
                                <Text className="text-white text-base mt-2">Thanh toán thông minh</Text>
                            </View>

                            <TouchableOpacity onPress={ () => router.back() } className="p-2 bg-white/20 rounded-full absolute top-4 left-4">
                                <Ionicons name="arrow-back-outline" size={ 22 } color="white" />
                            </TouchableOpacity>

                        </View>

                        {/* Main Content */ }
                        <View className="px-6 -mt-6">
                            {/* About Card */ }
                            <View className="bg-white rounded-2xl shadow-md p-5 mb-5">
                                <Text className="text-xl font-bold text-gray-800 mb-3">
                                    Về chúng tôi
                                </Text>
                                <Text className="text-base text-gray-600 mb-4">
                                    Dễ dàng quản lý mọi thanh toán, hóa đơn, lịch sử giao dịch với dịch vụ tích hợp open banking của chúng tôi.
                                </Text>

                                <View className="flex-row flex-wrap">
                                    <View className="flex-row items-center bg-blue-50 rounded-full px-3 py-1 mr-2 mb-2">
                                        <Ionicons name="checkmark-circle" size={ 16 } color="#1c40f2" />
                                        <Text className="text-sm text-gray-800 ml-1">Xử lý nhanh</Text>
                                    </View>
                                    <View className="flex-row items-center bg-blue-50 rounded-full px-3 py-1 mr-2 mb-2">
                                        <Ionicons name="checkmark-circle" size={ 16 } color="#1c40f2" />
                                        <Text className="text-sm text-gray-800 ml-1">Đa ngân hàng</Text>
                                    </View>
                                    <View className="flex-row items-center bg-blue-50 rounded-full px-3 py-1 mr-2 mb-2">
                                        <Ionicons name="checkmark-circle" size={ 16 } color="#1c40f2" />
                                        <Text className="text-sm text-gray-800 ml-1">Bảo mật cao</Text>
                                    </View>
                                    <View className="flex-row items-center bg-blue-50 rounded-full px-3 py-1 mr-2 mb-2">
                                        <Ionicons name="checkmark-circle" size={ 16 } color="#1c40f2" />
                                        <Text className="text-sm text-gray-800 ml-1">Dễ tích hợp</Text>
                                    </View>
                                </View>
                            </View>

                            {/* Contact Info Card */ }
                            <View className="bg-white rounded-2xl shadow-md p-5 mb-5">
                                <Text className="text-xl font-bold text-gray-800 mb-3">
                                    Thông tin liên hệ
                                </Text>

                                <TouchableOpacity
                                    className="flex-row items-center mb-4"
                                    onPress={ () => Linking.openURL( 'tel:19001234' ) }
                                >
                                    <View className="w-10 h-10 rounded-full bg-blue-100 items-center justify-center mr-3">
                                        <Ionicons name="call" size={ 18 } color="#1c40f2" />
                                    </View>
                                    <View>
                                        <Text className="text-base font-medium text-gray-800">Hotline</Text>
                                        <Text className="text-sm text-gray-500">1900 1234</Text>
                                    </View>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    className="flex-row items-center"
                                    onPress={ () => Linking.openURL( 'mailto:support@autopay.vn' ) }
                                >
                                    <View className="w-10 h-10 rounded-full bg-blue-100 items-center justify-center mr-3">
                                        <Ionicons name="mail" size={ 18 } color="#1c40f2" />
                                    </View>
                                    <View>
                                        <Text className="text-base font-medium text-gray-800">Email</Text>
                                        <Text className="text-sm text-gray-500">support@autopay.vn</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>

                            {/* Website Card */ }
                            <View className="bg-white rounded-2xl shadow-md p-5 mb-5">
                                <Text className="text-xl font-bold text-gray-800 mb-3">
                                    Trang web chính thức
                                </Text>
                                <TouchableOpacity
                                    className="flex-row items-center justify-between bg-blue-50 p-4 rounded-xl"
                                    onPress={ () => openLink( 'https://autopay.vn' ) }
                                >
                                    <View className="flex-row items-center">
                                        <Ionicons name="globe-outline" size={ 20 } color="#1c40f2" />
                                        <Text className="text-base font-medium text-gray-800 ml-3">autopay.vn</Text>
                                    </View>
                                    <MaterialIcons name="arrow-forward-ios" size={ 16 } color="#1c40f2" />
                                </TouchableOpacity>
                            </View>

                            {/* Social Media Card */ }
                            <View className="bg-white rounded-2xl shadow-md p-5 mb-8">
                                <Text className="text-xl font-bold text-gray-800 mb-3">
                                    Mạng xã hội
                                </Text>
                                <View className="flex-row justify-between">
                                    <TouchableOpacity
                                        className="items-center"
                                        onPress={ () => openLink( 'https://facebook.com' ) }
                                    >
                                        <View className="w-12 h-12 rounded-full bg-blue-100 items-center justify-center mb-1">
                                            <FontAwesome5 name="facebook-f" size={ 20 } color="#1877F2" />
                                        </View>
                                        <Text className="text-xs text-gray-600">Facebook</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity
                                        className="items-center"
                                        onPress={ () => openLink( 'https://twitter.com' ) }
                                    >
                                        <View className="w-12 h-12 rounded-full bg-gray-100 items-center justify-center mb-1">
                                            <FontAwesome6 name="x-twitter" size={ 20 } color="black" />
                                        </View>
                                        <Text className="text-xs text-gray-600">Twitter</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity
                                        className="items-center"
                                        onPress={ () => openLink( 'https://youtube.com' ) }
                                    >
                                        <View className="w-12 h-12 rounded-full bg-red-100 items-center justify-center mb-1">
                                            <FontAwesome5 name="youtube" size={ 20 } color="#FF0000" />
                                        </View>
                                        <Text className="text-xs text-gray-600">YouTube</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity
                                        className="items-center"
                                        onPress={ () => openLink( 'https://github.com' ) }
                                    >
                                        <View className="w-12 h-12 rounded-full bg-gray-100 items-center justify-center mb-1">
                                            <FontAwesome5 name="github" size={ 20 } color="black" />
                                        </View>
                                        <Text className="text-xs text-gray-600">GitHub</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>

                        {/* Footer */ }
                        <View className="items-center pb-8">
                            <Text className="text-sm text-gray-500">© 2024 AutoPAY. All rights reserved.</Text>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </>
    );
}