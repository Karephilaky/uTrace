import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 40,
  },
  inner: {
    flex: 1,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  subTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 20,
  },
  headerButtons: {
    flexDirection: 'row',
  },
  addButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#6200EE',
    borderRadius: 50,
    width: 50,
    height: 50,
    marginRight: 10,
  },
  deleteButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FF0000',
    borderRadius: 50,
    width: 50,
    height: 50,
  },
  goalContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginVertical: 5,
    backgroundColor: '#F9F4E2', // Fondo suave similar a la card
    borderRadius: 15, // Bordes redondeados
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2, // Sombra en Android
  },
  goalText: {
    fontSize: 18,
    color: '#000',
    fontWeight: 'bold',
  },
  goalDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },
  goalDate: {
    fontSize: 12,
    color: '#888',
    marginBottom: 10,
  },
  markButton: {
    backgroundColor: '#64da58',
    padding: 10,
    borderRadius: 5,
    marginBottom: 5,
    marginRight: 10,
  },
  markButtonFail: {
    backgroundColor: '#db615c',
  },
  markButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  resetButton: {
    backgroundColor: '#FFEB3B',  // Amarillo suave para reiniciar la racha
    padding: 10,
    borderRadius: 5,
    marginLeft: 10,  // Para separar los botones
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  toggleCompletedButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#6200EE',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  toggleCompletedButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  cardContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 15,
    width: '80%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  cardContent: {
    alignItems: 'center',
    paddingVertical: 10,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
  },
  // Contenedor para centrar y dimensionar todos los elementos del modal
  modalContent: {
    backgroundColor: '#F9F4E2',
    padding: 20,
    borderRadius: 15,
    width: '90%', // Anchura fija para un diseño más uniforme
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
  },
  goalTypeButton: {
    backgroundColor: '#C4D6FE',  // Botón azul pastel suave
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    width: '100%',
    alignItems: 'center',
  },
  goalTypeButtonText: {
    color: '#000',
    fontSize: 16,
  },
  inputContainer: {
    width: '100%',
    alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#C4D6FE',  // Bordes azul pastel
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    width: '100%',
    backgroundColor: '#fff',  // Fondo blanco
  },
  datePickerButton: {
    borderWidth: 1,
    borderColor: '#C4D6FE',  // Bordes azul pastel
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#fff',  // Fondo blanco
  },
  datePickerButtonText: {
    fontSize: 16,
    color: '#000',
  },
  noEndDateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  noEndDateText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#000',
  },
  modalButton: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 5,
  },
  modalAddButton: {
    backgroundColor: '#68de7c',  // Botón amarillo pastel
    marginTop: 10,
    height: 40,
  },
  backButton: {
    backgroundColor: '#F9AC8C',  // Botón rojo pastel
    marginTop: 10,
    height: 40,
  },
  modalButtonText: {
    color: '#000',  // Texto negro para contraste
    fontSize: 16,
  },
  closeButtonText: {
    color: '#6200EE',  // Morado oscuro para el botón de cerrar
    fontSize: 16,
  },
});
