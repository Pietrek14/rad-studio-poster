export const Event = ({ event }) => {
	return (
		<>
			<span className="text-xl text-center mb-5">{event.name}</span>
			{event.description ? (
				<span className="text-xl text-justify text-slate-400">
					{event.description}
				</span>
			) : (
				<div></div>
			)}
		</>
	);
};
