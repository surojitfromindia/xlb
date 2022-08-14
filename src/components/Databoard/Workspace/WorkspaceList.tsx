import { Button, Card, Divider } from 'antd';
import { FC, MouseEvent } from 'react';
import { useNavigate } from 'react-router-dom';

type Props = {
  workspacesList: WorkspaceData[];
};

function WorkspaceList({ workspacesList }: Props) {
  return (
    <div className="flex flex-wrap">
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
  description?: string;
  is_shared: boolean;
  details?: {
    tables?: number;
    pivots?: number;
    graphs?: number;
  };
};

const WorkSpaceCard: FC<worksapceProps> = ({ workspacedata }: worksapceProps) => {
  let navigate = useNavigate();
  const handleCardClick = (clickEvent: MouseEvent<HTMLDivElement>) => {
    clickEvent.stopPropagation();
    clickEvent.preventDefault();
    //on click open workspace page
    navigate(`/app/databoard/workspace/${workspacedata.id}`)

  };
  const handleMoreClick = (clickEvent: MouseEvent<HTMLButtonElement>) => {
    clickEvent.stopPropagation();
  };
  return (
    <div className='ml-3 mb-3' onClick={handleCardClick}>
      <Card
        className="w-60 h-72"
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
        <div className="flex flex-col gap-0.5">
          <span>Description</span>
          <span className="text-gray-600 text-xs h-12 overflow-scroll">{workspacedata?.description ?? "None"} </span>
        </div>
      </Card>
    </div>
  );
};

export { WorkspaceList };
export type { WorkspaceData };
