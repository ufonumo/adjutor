import { Tooltip } from "antd";
import { ToolTipProps } from "./util/interface";

const ToolTips = ({ title, icon }: ToolTipProps) => {
    return (
        <div>
            <Tooltip title={title} color="#8236cc">
                {icon}
            </Tooltip>
        </div>
    );
};

export default ToolTips;
