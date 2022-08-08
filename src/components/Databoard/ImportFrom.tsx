import { FC, useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import DataSourceCard from './ImportFrom/DataSourceCard';

import { _getSourceByCategory, SOURCECATEGORY, DataSource } from '../../data/importFrom';
import DataSubmitModal from './ImportFrom/DataSubmitModal/DataSubmitModal';

type cateGories = {
  label: string;
  category: SOURCECATEGORY;
};
const ImportFrom: FC = () => {
  const { importFrom } = useParams();
  const [openDataSubmitModal, setDSM] = useState(false);
  const onImportClickHandler = (category: SOURCECATEGORY) => {
    setDSM(true);
  };

  const showCategory = useMemo((): DataSource[] => {
    return importFrom ? _getSourceByCategory(importFrom) : [];
  }, [importFrom]);
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
      label: 'File',
      category: 'file',
    },
  ];

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
          <div className="w-44 mt-5 flex flex-col space-y-2">
            {all_categories.map((cate) => (
              <Link key={cate.category} replace={true} to={`/app/databoard/import/${cate.category}`}>
                {cate.label}
              </Link>
            ))}
          </div>
          <div className="w-full flex flex-row gap-3">
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

