import React from "react";
import { Modal, View, Text, TouchableOpacity } from "react-native";
import { styles } from "../styles/styles";

const CustomAlert = ({ visible, title, message, onCancel, onConfirm }) => {
  if (!visible) return null;

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onCancel}
    >
      <View style={styles.containerAlert}>
        <View style={styles.contentAlert}>
          <Text style={styles.titleAlert}>{title}</Text>
          <Text style={styles.messageAlert}>{message}</Text>
          <View style={styles.buttonsContainerAlert}>
            <TouchableOpacity
              onPress={onCancel}
              style={[styles.buttonAlert, styles.cancelButtonAlert]}
            >
              <Text style={styles.buttonTextAlert}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={onConfirm}
              style={[styles.buttonAlert, styles.okButtonAlert]}
            >
              <Text style={styles.buttonTextAlert}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default CustomAlert;
