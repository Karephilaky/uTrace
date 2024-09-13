import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, ScrollView } from 'react-native';
import { styles } from '@/styles/goalsStyles';
import { Goal } from '@/components/goals/Goal';
import Ionicons from '@expo/vector-icons/Ionicons';
import AwesomeAlert from 'react-native-awesome-alerts';

interface GoalItemProps {
  goal: Goal;
  handleGoalCompletion: (id: number, isCompleted: boolean) => void;
  handleDeleteGoal: (id: number) => void;
  handleResetStreak: (id: number) => void;
  isDeleteMode: boolean;
}

const GoalItem: React.FC<GoalItemProps> = ({
  goal,
  handleGoalCompletion,
  handleDeleteGoal,
  handleResetStreak,
  isDeleteMode,
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [alertVisible, setAlertVisible] = useState(false);

  const confirmDelete = async () => {
    try {
      await handleDeleteGoal(goal.id);
      setAlertVisible(false);
    } catch (error) {
      console.error('Error eliminando objetivo: ', error);
    }
  };

  return (
    <>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <View style={styles.goalContainer}>
          <Text style={styles.goalText}>{goal.name}</Text>
          <Text style={styles.goalDescription}>{goal.description}</Text>
          <Text style={styles.goalDate}>
            {goal.startDate} - {goal.streak} días en racha
          </Text>
          <View style={styles.buttonContainer}>
            {!goal.completed && !goal.streakLost && (
              <>
                <TouchableOpacity
                  onPress={() => handleGoalCompletion(goal.id, true)}
                  style={styles.markButton}
                >
                  <Ionicons name="checkmark-outline" size={24} color="#fff" />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => handleGoalCompletion(goal.id, false)}
                  style={[styles.markButton, styles.markButtonFail]}
                >
                  <Ionicons name="close-outline" size={24} color="#fff" />
                </TouchableOpacity>
              </>
            )}
            {goal.streakLost && (
              <TouchableOpacity
                onPress={() => handleResetStreak(goal.id)}
                style={[styles.markButton, { backgroundColor: '#FFC107' }]} // Amarillo para reiniciar
              >
                <Ionicons name="refresh-outline" size={24} color="#fff" />
              </TouchableOpacity>
            )}
            {isDeleteMode && (
              <TouchableOpacity
                onPress={() => setAlertVisible(true)}
                style={styles.deleteButton}
              >
                <Ionicons name="trash-outline" size={24} color="#fff" />
              </TouchableOpacity>
            )}
          </View>
        </View>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.cardContainer}>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setModalVisible(false)}
            >
              <Ionicons name="close-outline" size={28} color="#6200EE" />
            </TouchableOpacity>
            <ScrollView contentContainerStyle={styles.cardContent}>
              <Text style={styles.modalTitle}>{goal.name}</Text>
              <Text style={styles.goalDate}>Fecha de inicio: {goal.startDate}</Text>
              {goal.endDate && <Text style={styles.goalDate}>Fecha de finalización: {goal.endDate}</Text>}
              <Text style={styles.goalDescription}>{goal.description}</Text>
            </ScrollView>
          </View>
        </View>
      </Modal>

      <AwesomeAlert
        show={alertVisible}
        showProgress={false}
        title="Confirmación"
        message="¿Estás seguro que deseas eliminar este objetivo?"
        closeOnTouchOutside={true}
        closeOnHardwareBackPress={false}
        showCancelButton={true}
        showConfirmButton={true}
        cancelText="Cancelar"
        confirmText="Eliminar"
        confirmButtonColor="#DD6B55"
        onCancelPressed={() => setAlertVisible(false)}
        onConfirmPressed={confirmDelete}
      />
    </>
  );
};

export default GoalItem;
