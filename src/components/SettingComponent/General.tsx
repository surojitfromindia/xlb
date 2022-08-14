import { Form, Select } from 'antd';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import { FC} from 'react';
import { defaultLanguage, LocalsArray, localsType } from '../../data/supportedLocals';
const { Option } = Select;

const General: FC = () => {
  const { t } = useTranslation();

  const languageChangeHandler = (lng: localsType) => {
    i18next.changeLanguage(lng);
  };

  
  return (
    <div>
      <h1 className="text-xl">General settings</h1>
      <div className="mt-10">
        <Form layout="vertical">
          <Form.Item label={t('label.app_laguage')}>
            <Select defaultValue={defaultLanguage} onChange={languageChangeHandler}>
              {LocalsArray.map((lc) => (
                <Option value={lc.value}>{lc.label}</Option>
              ))}
            </Select>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
export default General;
