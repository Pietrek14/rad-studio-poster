import { EventList } from "./EventList";

export const Class = (props) => {
	console.log(props)

	let publishedEvents = [], publicEvents = [], protectedEvents = [];

	props.events.forEach(event => {
		switch(event.accessModifier) {
			case "published":
				publishedEvents.push(event);
				break;
			case "public":
				publicEvents.push(event);
				break;
			case "protected":
				protectedEvents.push(event);
				break;
			default:
				console.error(`Unknown access modifier: ${event.accessModifier}`);
		}
	});

	return (
		<div className="flex flex-col gap-8 w-1/2">
			<h2 className="w-full border-green-400 border-4 p-3 text-2xl">
				{props.class}
			</h2>
			<div className="grid gap-2 grid-cols-3 w-full">
				<EventList events={publishedEvents} accessModifier="published" />
				<EventList events={publicEvents} accessModifier="public" />
				<EventList events={protectedEvents} accessModifier="protected" />
			</div>
		</div>
	);
};
