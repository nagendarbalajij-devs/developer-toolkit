export function Timestamp(props) {
	return (
		<div className=" text-left">
			<div className="text-primary-focus font-mono">
				Enter EPOC time or choose time
			</div>
			<div className="mt-10">
			<input type="text" placeholder="Type here" className="font-mono input input-bordered input-primary w-full max-w-xs" />
			</div>
		</div>
	);
}
