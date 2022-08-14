import { FC, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import DataSourceCard from './ImportFrom/DataSourceCard';

import { _getSourceByCategory, SOURCECATEGORY, DataSource } from '../../data/importFrom';
import DataSubmitModal from './ImportFrom/DataSubmitModal/DataSubmitModal';
import { Typography } from 'antd';

type cateGories = {
  label: string;
  category: SOURCECATEGORY;
};
const ImportFrom: FC = () => {
  const [category, setCategory] = useState<SOURCECATEGORY>("all");
  const [openDataSubmitModal, setDSM] = useState(false);
  const onImportClickHandler = (category: SOURCECATEGORY) => {
    setDSM(true);
  };

  const showCategory = useMemo((): DataSource[] => {
    return category ? _getSourceByCategory(category) : [];
  }, [category]);
  const all_categories: cateGories[] = [
    {
      label: 'All',
      category: 'all',
    },
    {
      label: 'Databases',
      category: 'db',
    },
    {
      label: 'Files',
      category: 'file',
    },
  ];

  const categoryChangeHandler =(value: SOURCECATEGORY)=>{
    setCategory(value)
  }

  return (
    <>
      {openDataSubmitModal && (
        <DataSubmitModal
          visiable={openDataSubmitModal}
          onHide={() => {
            setDSM(false);
          }}
        />
      )}

      <div>
        <h1 className='text-xl'>Import data</h1>
        <p className='text-md max-w-3xl mt-1 text-gray-400'>
          Extract your valuable data from a diverse amount of source. Currenty we provide extracting data from databases and from excel and csv files
        </p>
        <div className="flex mt-10">
          <div className="w-32 mt-5 flex flex-col space-y-2">
            {all_categories.map((cate) => (
              <Typography.Link onClick={()=>categoryChangeHandler(cate.category)} key={cate.category} >
                {cate.label}
              </Typography.Link>
            ))}
          </div>
          <div className="w-full flex  flex-wrap">
            {showCategory.map((cc, index) => (
              <DataSourceCard key={index} card_title={cc.card_title} card_description={cc.card_description} onImportAction={onImportClickHandler} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default ImportFrom;

