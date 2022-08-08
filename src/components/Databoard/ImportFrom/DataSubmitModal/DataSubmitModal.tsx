import { Modal } from 'antd';
import { FC } from 'react';

type ModalProps = {
  visiable: boolean;
  onHide: any;
};

const DataSubmitModal: FC<ModalProps> = ({ onHide, visiable }: ModalProps) => {
  return (
    <Modal maskClosable={false} title={'Step : 1'} visible={visiable} centered onCancel={onHide}>
      A modal
    </Modal>
  );
};

export default DataSubmitModal;
