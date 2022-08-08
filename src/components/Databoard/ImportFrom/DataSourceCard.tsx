import { Button, Card } from 'antd';
import { FC } from 'react';

type CardProps = {
  card_title: string;
  card_description: string;
  onImportAction: any;
};

const DataSourceCard: FC<CardProps> = ({ card_title, card_description, onImportAction }: CardProps) => {
  return (
    <Card title={card_title} className="w-64">
      <div>{card_description}</div>
      <Button className="mt-5" onClick={onImportAction}>
        Import
      </Button>
    </Card>
  );
};

export default DataSourceCard
