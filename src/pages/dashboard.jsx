import { useState } from "react";
import { SideNavBar } from "../components/sidenav";
import { Base64 } from "../screens/base64";
import { Timestamp } from "../screens/timestamp";
import { options } from "../utils/options";

export function Dashboard() {
	const [page, setPage] = useState("");
	const [content, setContent] = useState(<div></div>);

	const changeContent = (page) => {
		switch (page) {
			case options.base64encode:
				setContent(<Base64 />);
				break;
			case options.timestamp:
				setContent(<Timestamp />);
				break;
			default:
				setContent(<div></div>);
		}
	};

	return (
		<div className="App flex flex-row h-[100vh]">
			<div>
				<SideNavBar
					onClick={(page) => {
						setPage(page);
						changeContent(page);
					}}
				/>
			</div>
			<div className="flex flex-col w-full justify-start items-start">
				<div className="px-8 py-10 text-blue-700 font-bold text-2xl font-mono">
					{page}
				</div>
				<div className="px-8 py-6 w-full">{content}</div>
			</div>
		</div>
	);
}
