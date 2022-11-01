export const IconButton = (props) => {
	let switchColor = props.selected ? "bg-blue-700" : "bg-white";
	return (
		<div
			className={`flex flex-col my-2 mx-4 pt-2 hover:shadow-sm cursor-pointer relative bg-white justify-center items-center rounded-sm`}
			onClick={props.onClick}
		>
			<div className="m-auto">{props.icon}</div>
			<div className="relative py-1 text-blue-700 font-mono text-xs font-light w-16">
				{props.text}
			</div>
			<div className={`relative h-1 ${switchColor} w-full`}></div>
		</div>
	);
};
