import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#D2D8DB',
    flex: 1,
    alignItems: 'center',
    paddingTop: 64,
    gap: 24
  },
  imgLogo: {
    height: 34,
    width: 134,
  },
  inputArea: {
    width: '100%',
    paddingHorizontal: 24,
    gap: 8
  },
  listArea:{
    backgroundColor: '#ffffff',
    width: '100%',
    flex: 1,
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
  },
  statusArea: {
    flexDirection: 'row',
    gap: 16,
    marginHorizontal: 24,
    marginTop: 24,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E4E6EC',
    alignItems: 'center'
  },
  btnLimpar: {
    marginLeft: 'auto',
  },
  textLimpar: {
    fontSize: 12,
    fontWeight: 600,
    color: '#828282'
  }
})