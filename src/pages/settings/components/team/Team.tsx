import Card from "../../../../components/Card/card";
import Tables from "../../../../components/Table/tables";
import useWindowSize from "../../../../hooks/useWindowSize";
import { teamColData, teamDataSource } from "../../models/tabData";

const Team = () => {
    const { width } = useWindowSize();
    return (
        <div>
            {width < 768 ? (
                <div>
                    {teamDataSource.map((list, index) => (
                        <Card variant="default" key={index}>
                            <div key={index}>
                                <h3>Document: {list.document}</h3>
                                <p>Permission : {list.permission}</p>
                            </div>
                        </Card>
                    ))}
                </div>
            ) : (
                <Tables header="Role" dataSource={teamDataSource} columns={teamColData} />
            )}
        </div>
    );
};

export default Team;
