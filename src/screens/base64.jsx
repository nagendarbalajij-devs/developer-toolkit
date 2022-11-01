import { Button } from "@mui/material";
import { useRef, useState } from "react";
import { appColors } from "../utils/colors";

export function Base64(props) {
	const [val, setVal] = useState("");
	const inputRef = useRef();

	return (
		<div className="flex flex-col w-full">
			<div className="flex flex-row justify-center items-center">
				<div className="mr-6">
					<textarea
						className="w-full resize-none p-4 border-2 border-blue-700 rounded-md outline-none"
						ref={inputRef}
						rows={20}
						cols={50}
						onChange={(val) => {
							setVal(btoa(val.target.value));
						}}
					/>
				</div>
				<div className="ml-6">
					<textarea
						className="w-full resize-none p-4  select-none font-semibold text-white rounded-md outline-none bg-blue-700"
						rows={20}
						cols={50}
						readOnly={true}
						value={val}
					/>
				</div>
			</div>
			<div className="mt-4">
				<Button
					variant="contained"
					onClick={() => {
						navigator.clipboard.writeText(val);
					}}
				>
					Copy
				</Button>
			</div>
		</div>
	);
}
