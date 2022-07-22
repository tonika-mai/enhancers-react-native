import {Modal, View} from 'react-native';

import IconBtn from '../../molecules/icon-btn';
import {ModalProps} from './Modal.types';
import React from 'react';
import Typography from '../../atoms/typography';
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
      <View style={styles.contentContainer}>{children}</View>
    </Modal>
  );
};

export default AppModal;
