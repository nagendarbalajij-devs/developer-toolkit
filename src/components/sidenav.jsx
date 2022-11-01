import { useState } from "react";
import { HiOutlineQrcode } from "react-icons/hi";
import { appColors } from "../utils/colors";
import { options } from "../utils/options";
import { IconButton } from "./icon_buttons";
import { IoTimeOutline } from "react-icons/io5";

export function SideNavBar(props) {
	const [current, setCurrent] = useState(options.qrCode);
	return (
		<div className="h-[100vh] bg-base-300 shadow-lg flex flex-col items-center justify-center">
			<div
				onClick={() => {
					setCurrent(options.qrCode);
					props.onClick(options.qrCode);
				}}
			>
				<IconButton
					text="QR Code"
					icon={<HiOutlineQrcode  size={30} />}
					selected={current === options.qrCode}
				/>
			</div>
			<div
				onClick={() => {
					setCurrent(options.base64encode);
					props.onClick(options.base64encode);
				}}
			>
				<IconButton
					text="Base64 Encode"
					icon={<HiOutlineQrcode color={appColors.primary} size={30} />}
					selected={current === options.base64encode}
				/>
			</div>
			<div
				onClick={() => {
					setCurrent(options.base64decode);
					props.onClick(options.base64decode);
				}}
			>
				<IconButton
					text="Base64 Decode"
					icon={<HiOutlineQrcode color={appColors.primary} size={30} />}
					selected={current === options.base64decode}
				/>
			</div>

			<div
				onClick={() => {
					setCurrent(options.timestamp);
					props.onClick(options.timestamp);
				}}
			>
				<IconButton
					text="Time"
					icon={<IoTimeOutline color={appColors.primary} size={30} />}
					selected={current === options.timestamp}
				/>
			</div>
		</div>
	);
}
