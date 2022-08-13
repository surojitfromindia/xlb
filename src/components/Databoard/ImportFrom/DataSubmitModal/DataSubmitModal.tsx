import { Button, Form, Input, Modal, Popover, Row, Select } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import { FC, useState } from 'react';

const { Option } = Select;

type ModalProps = {
  visiable: boolean;
  onHide: any;
};

const DataSubmitModal: FC<ModalProps> = ({ onHide, visiable }: ModalProps) => {
  return (
    <Modal width={1000} maskClosable={false} title={'Step : 1'} visible={visiable} centered onCancel={onHide}>
      <StepOne />
    </Modal>
  );
};

export default DataSubmitModal;

const StepOne: FC = () => {
  return (
    <div>
      <Form layout="vertical">
        <div className="w-2/3">
          <Form.Item label="Workspace" name={'workspacename'}>
            <Input placeholder="Workspace name" />
          </Form.Item>
          <Form.Item label="Description" name={'workspacedescription'}>
            <TextArea rows={6} />
          </Form.Item>
          <CSVOption onSave={() => {}} />
        </div>
      </Form>
    </div>
  );
};

type CSVOptionProps = {
  onSave: any;
};
const CSVOption: FC<CSVOptionProps> = ({ onSave }: CSVOptionProps) => {
  const [popOverVisiable, setPopOverVisiable] = useState<boolean>(false);
  const openPopOver = () => {
    setPopOverVisiable(true);
  };
  const closePopOver = () => {
    setPopOverVisiable(false);
  };

  const CSVForm = () => {
    return (
      <div style={{width:"250px"}}>
        <Form style={{ height: '100%' }} layout="vertical">
          <Form.Item label="Field separtor">
            <Select>
              <Option value="comma">comma(",")</Option>
            </Select>
          </Form.Item>

          <Form.Item wrapperCol={{ span: 16 }}>
            <Button className="mr-2" type="primary">
              Save
            </Button>
            <Button onClick={closePopOver} type="default">
              Cancel
            </Button>
          </Form.Item>
        </Form>{' '}
      </div>
    );
  };

  return (
    <Popover placement="right" visible={popOverVisiable} title={'Csv options'} content={<CSVForm />}>
      <Button type='link' onClick={openPopOver}>More...</Button>
    </Popover>
  );
};
