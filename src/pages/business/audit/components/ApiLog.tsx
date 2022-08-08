import Card from "../../../../components/Card/card";
import Tables from "../../../../components/Table/tables";
import useWindowSize from "../../../../hooks/useWindowSize";
import { columns, tableData } from "../../../dashboard/models/dashboardData";

const ApiLog = () => {
    const { width } = useWindowSize();

    return (
        <div>
            {width < 768 ? (
                <div>
                    <h3 className="heading3">API Logs</h3>

                    {tableData.map((list, index) => (
                        <Card variant="default" key={index}>
                            <div key={index}>
                                <h3>Method: {list.method}</h3>
                                <p>Status : {list.status}</p>
                                <p>URL: {list.url}</p>
                            </div>
                        </Card>
                    ))}
                </div>
            ) : (
                <Tables header="API Logs" dataSource={tableData} columns={columns} />
            )}
        </div>
    );
};

export default ApiLog;
