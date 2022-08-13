//MODAL: create a workspace modal

import { Form, Input, Modal } from 'antd';
import { FC, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { WorkspaceContext } from './Store/store';

const { TextArea } = Input;

type ModalProps = {
  visiable: boolean;
  onHide: any;
  action_mode: 'add' | 'edit';
  workspace_id?: string; //optional id of work space for edit
};
type WorkSpaceFormFields = {
  workspacename: string;
  workspacedescription?: string;
};

const CreateWorkSpaceModal: FC<ModalProps> = ({ onHide, visiable, action_mode }: ModalProps) => {
  const {t} =useTranslation()
  const [form] = Form.useForm();
  const { dispatch } = useContext(WorkspaceContext);
  const handleWorkSpaceFormSubmit = (v: WorkSpaceFormFields) => {
    //when action mode is in "add" more create a new work space
    dispatch({
      type: 'add',
      workspace_data: [
        {
          title: v.workspacename,
          description: v?.workspacedescription ?? '',
          id: '1',
          is_shared: false,
        },
      ],
    });
    onHide();
  };
  return (
    <Modal okText={t("button.save")} cancelText={t("button.cancel")} onOk={form.submit} width={600} maskClosable={false} title={t('placeholder.create_a_workspace')} visible={visiable} centered onCancel={onHide}>
      <Form form={form} layout="vertical" onFinish={handleWorkSpaceFormSubmit}>
        <div>
          <Form.Item label={t('label.workspace')} name={'workspacename'}>
            <Input placeholder={t("placeholder.workspace_name")} />
          </Form.Item>
          <Form.Item label={t('label.description')} name={'workspacedescription'}>
            <TextArea rows={6} />
          </Form.Item>
        </div>
      </Form>
    </Modal>
  );
};
export default CreateWorkSpaceModal;
