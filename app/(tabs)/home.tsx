import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, RefreshControl } from 'react-native';
import { styles } from '@/styles/Home/homeStyles';
import StateCards from '@/components/StateCard/StateCard';
import { Images } from '@/constants/Images';
import { emotions } from '@/components/Emotions/Emotions';
import { useAuth } from '@/hooks/useAuth';
import { useUserSelections } from '@/hooks/useUserSelections';

export default function Home() {
  const { logout, user } = useAuth();
  const [userSelections, loading, fetchUserSelections] = useUserSelections();
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(async () => {
    setRefreshing(true);
    await fetchUserSelections();
    setRefreshing(false);
  }, [fetchUserSelections]);

  const handleLogout = async () => {
    await logout();
  };

  const isSameDay = (date1: string, date2: string) => {
    return new Date(date1).toDateString() === new Date(date2).toDateString();
  };

  const todaySelections = userSelections.filter(selection =>
    isSameDay(selection.date, new Date().toISOString())
  );

  // Función para extraer fecha y hora de la cadena ISO
  const extractDateAndTime = (isoString: string) => {
    const [datePart, timePart] = isoString.split('T');
    const time = timePart.split('Z')[0]; // Eliminar 'Z' al final de la hora
    return { date: datePart, time };
  };

  if (loading) {
    return (
      <View style={styles.containerHome}>
        <Text>Cargando...</Text>
      </View>
    );
  }

  return (
    <View style={styles.containerHome}>
      <View style={styles.header}>
        <View style={styles.iconTextContainer}>
          <Image source={Images.happy} style={styles.icon} />
          <Text style={styles.text}>Hola, {user?.username}!</Text>
        </View>
        <View>
          <TouchableOpacity onPress={handleLogout}>
            <Image source={Images.settings} style={styles.settingsIcon} />
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.textHome}>Registros de hoy</Text>
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <View style={styles.cardContent}>
          {todaySelections.length === 0 ? (
            <View style={styles.notRegisterView}>
              <Image source={Images.nosense} style={styles.notRegisterViewIcon} />
              <Text style={styles.notRegisterText}>Nada por aquí...</Text>
            </View>
          ) : (
            todaySelections.map((selection, index) => {
              const { date, time } = extractDateAndTime(selection.date);
              const emotionData = emotions[selection.selectedEmotion];
              return (
                <StateCards
                  key={index}
                  color={selection.backgroundColor}
                  colorFlag={selection.flagColor}
                  textColor={selection.textColor}
                  date={date}
                  hour={time}
                  emotion={selection.selectedEmotionButtons.join(', ')}
                  flags={selection.selectedEmotionButtons}
                  activities={selection.selectedActivityButtons.map((activity: string) => ({ activity, cost: 5 }))}
                  EmotionComponent={emotionData.image}
                  emotionProps={{ width: 100, height: 140 }}
                  backgroundColor={selection.backgroundColor}
                  imageUrl={''}
                  customWidth={315}
                  customHeight={150}
                />
              );
            })
          )}
        </View>
      </ScrollView>
    </View>
  );
}
