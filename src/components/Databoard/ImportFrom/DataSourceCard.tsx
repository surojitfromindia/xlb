import { Button, Card } from 'antd';
import { FC } from 'react';

type CardProps = {
  card_title: string;
  card_description: string;
  onImportAction: any;
};

const DataSourceCard: FC<CardProps> = ({ card_title, card_description, onImportAction }: CardProps) => {
  return (
    <div className="w-64 ml-3 mb-3">
      <Card title={card_title}>
        <div className="h-12">{card_description}</div>
        <Button className="mt-5" onClick={onImportAction}>
          Import
        </Button>
      </Card>{' '}
    </div>
  );
};

export default DataSourceCard;
