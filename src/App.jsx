import logo from "./assets/rad-studio-logo.png";
import { Class } from "./components/Class";

function App() {
	const classes = [
		{ class: "TObject", events: [] },
		{ class: "TPersistent", events: [] },
		{
			class: "TComponent",
			events: [
				{ name: "OnGetDeltaStreams", accessModifier: "protected" },
			],
		},
	];

	return (
		<div className="flex flex-col">
			<header className="flex justify-center items-center gap-32 py-12">
				<img src={logo} alt="RAD Studio Logo" className="w-1/5" />
				<h1 className="text-7xl font-bold">RAD Studio -- Wydarzenia</h1>
			</header>
			<main className="flex flex-col items-center gap-6">
				{classes.map((classProps, index) => {
					return (
						<Class
							class={classProps.class}
							events={classProps.events}
							key={index}
						/>
					);
				})}
			</main>
		</div>
	);
}

export default App;
