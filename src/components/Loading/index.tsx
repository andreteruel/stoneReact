import { ActivityIndicator, View } from "react-native";

const Loading: React.FC = () => {
    return (
        <View testID="loading" style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ActivityIndicator testID="activity-indicator" size="large" color="#0000ff" />
        </View>
    );
  };

export default Loading;


