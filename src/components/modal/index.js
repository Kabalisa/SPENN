import React from "react";
import { View, TouchableOpacity } from "react-native";
import { Modal, Portal } from "react-native-paper";
import { Avatar, Text } from "react-native-elements";
import CustomButton from "../customBotton/CustomButton";
import { styles } from "./styles";

const ImageModal = ({ toggleModal, handleToggleModal }) => {
  return (
    <Portal>
      <Modal
        visible={toggleModal}
        onDismiss={handleToggleModal}
        contentContainerStyle={styles.modalContainner}
      >
        <Avatar
          size={40}
          rounded
          icon={{
            name: "closecircle",
            type: "antdesign",
            size: 40,
            color: "red",
          }}
          onPress={handleToggleModal}
          containerStyle={styles.closeIcon}
        />
        <View style={styles.contentContainer}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalHeaderText}>Forgot Security Code</Text>
          </View>
          <View style={styles.modalBody}>
            <View style={styles.textContainer}>
              <Text style={styles.modalBodyText}>
                No worries! our local service staff will be able to help you get
                a temporary Security Code in no-time
              </Text>
            </View>
            <CustomButton
              title="customer service"
              backgroundColor="#6dbd95"
              color="#ffffff"
              modal
            />
          </View>
        </View>
      </Modal>
    </Portal>
  );
};

export default ImageModal;
