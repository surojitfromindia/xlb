//MODAL: create a workspace modal

import { Form, Input, Modal } from 'antd';
import axios from 'axios';
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
  const { t } = useTranslation();
  const [form] = Form.useForm();
  const { state,dispatch } = useContext(WorkspaceContext);
  const handleWorkSpaceFormSubmit = async (v: WorkSpaceFormFields) => {
    let workspace_data = {
      title: v.workspacename,
      description: v?.workspacedescription,
      id: (state.workSpaceList.length+1).toString(),
      is_shared: false,
    };
    let {data : workspace_create} = await axios.post('http://localhost:3001/workspace', workspace_data);
    dispatch({
      type: 'add',
      workspace_data: [workspace_create],
    });
    form.resetFields();
    onHide();
  };
  return (
    <Modal
      okText={t('button.save')}
      cancelText={t('button.cancel')}
      onOk={form.submit}
      width={600}
      maskClosable={false}
      title={t('placeholder.create_a_workspace')}
      visible={visiable}
      centered
      onCancel={onHide}
    >
      <Form form={form} layout="vertical" onFinish={handleWorkSpaceFormSubmit}>
        <div>
          <Form.Item label={t('label.workspace')} name={'workspacename'}>
            <Input placeholder={t('placeholder.workspace_name')} />
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
