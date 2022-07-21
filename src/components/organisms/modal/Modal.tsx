import {Modal, View} from 'react-native';
import React from 'react';
import IconBtn from '../../molecules/icon-btn';
import Typography from '../../atoms/typography';
import {ModalProps} from './Modal.types';
import styles from './Modal.styles';

const AppModal: ReactFC<PropsWithChildren<ModalProps>> = ({
  children,
  title,
  isVisible,
  setIsVisible,
}) => {
  function closeModal() {
    setIsVisible(false);
  }

  return (
    <Modal
      visible={isVisible}
      animationType="slide"
      onRequestClose={closeModal}>
      <View style={styles.closeBtn}>
        <IconBtn name="close" onPress={closeModal} />
      </View>
      <Typography weight="semibold" align="center" size={22}>
        {title}
      </Typography>
      {children}
    </Modal>
  );
};

export default AppModal;
