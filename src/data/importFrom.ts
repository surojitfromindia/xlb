type DataSource = {
  card_title: string;
  card_description: string;
  collection_type: COLLECTIONTYPE;
  category: SOURCECATEGORY;
};
type COLLECTIONTYPE = 'excel' | 'mongodb';
type SOURCECATEGORY = 'db' | 'file' | "all" |undefined;

const importDataForm: DataSource[] = [
  {
    card_title: 'Excel',
    card_description: 'Import data from Microsoft Excel',
    collection_type: 'excel',
    category: 'file',
  },
  {
    card_title: 'Mongodb',
    card_description: 'Extract data from your mongodb atlas',
    collection_type: 'mongodb',
    category: 'db',
  },
];

//if no category is found return all
const _getSourceByCategory =(serach_category : string)=>{
    if(typeof serach_category === "undefined" || serach_category === "all") return importDataForm;
    return importDataForm.filter(dsrc=> dsrc.category ===serach_category)
}


export { _getSourceByCategory };    export type { SOURCECATEGORY, DataSource };

