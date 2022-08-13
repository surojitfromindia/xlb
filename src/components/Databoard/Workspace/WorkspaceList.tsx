import { Button, Card, Divider } from 'antd';
import { FC, MouseEvent } from 'react';

type Props = {
  workspacesList: WorkspaceData[];
};

function WorkspaceList({ workspacesList }: Props) {
  return (
    <div className="flex space-x-4">
      {workspacesList.map((workspacedata) => (
        <WorkSpaceCard key={workspacedata.id} workspacedata={workspacedata} />
      ))}
    </div>
  );
}

type worksapceProps = {
  workspacedata: WorkspaceData;
};

type WorkspaceData = {
  id: string;
  title: string;
  description: string;
  is_shared: boolean;
  details?: {
    tables?: number;
    pivots?: number;
    graphs?: number;
  };
};

const WorkSpaceCard: FC<worksapceProps> = ({ workspacedata }: worksapceProps) => {
  const handleCardClick = (clickEvent: MouseEvent<HTMLDivElement>) => {
    clickEvent.stopPropagation();
    clickEvent.preventDefault();
  };
  const handleMoreClick = (clickEvent: MouseEvent<HTMLButtonElement>) => {
    clickEvent.stopPropagation();
  };
  return (
    <div onClick={handleCardClick}>
      <Card
        className="w-60 h-64"
        title={workspacedata.title}
        extra={
          <Button type="link" style={{ padding: 0 }} onClick={handleMoreClick}>
            More
          </Button>
        }
      >
        <div className="flex justify-start space-x-5 ">
          <div className="flex flex-col">
            {workspacedata?.details?.tables ?? 0} <span>tables</span>
          </div>
          <div className="flex flex-col">
            {workspacedata?.details?.graphs ?? 0} <span>graphs</span>
          </div>
          <div className="flex flex-col">
            {workspacedata?.details?.pivots ?? 0} <span>pivots</span>
          </div>
        </div>
        <Divider/>
        <div className="mt-5 flex flex-col">
          <span>Description</span>
          <span className="text-gray-600 text-xs">{workspacedata.description} </span>
        </div>
      </Card>
    </div>
  );
};

export { WorkspaceList };
export type { WorkspaceData };
