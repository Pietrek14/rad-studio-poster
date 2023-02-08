import { Event } from "./Event";

export const EventList = ({ events, accessModifier }) => {
	if(events.length === 0) return <></>;

	return (
		<>
			<span
				className="text-xl text-center text-slate-400"
				style={{
					gridRow: `auto / ${events.length} span`,
				}}
			>
				{accessModifier}
			</span>

			{events.map((event, index) => {
				return <Event event={event} key={index} />
			})}
		</>
	);
};
