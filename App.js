function App() {
	const spacePhenomena = [
		{ id: 1, name: "Asteroid Belt", emoji: "☄️" },
		{ id: 2, name: "Galactic Nebula", emoji: "🌌" },
		{ id: 3, name: "Black Hole", emoji: "🕳️" },
		{ id: 4, name: "Supernova Explosion", emoji: "💥" },
		{ id: 5, name: "Pulsar", emoji: "⚡" },
		{ id: 6, name: "Quasar", emoji: "💫" },
		{ id: 7, name: "Exoplanet", emoji: "🪐" },
		{ id: 8, name: "Interstellar Cloud", emoji: "☁️" },
		{ id: 9, name: "Gamma-Ray Burst", emoji: "🌠" },
		{ id: 10, name: "Magnetic Field Reversal", emoji: "🧲" }
	];

	const observationStatuses = ["🔭 Visible", "🌫 Faint", "🚀 Prime for Study"];
	const spaceObservations = spacePhenomena.map((p) => {
		const obsIdx = Math.floor(Math.random() * observationStatuses.length);
		const currObservation = { id: p.id, name: p.name, emoji: p.emoji, status: observationStatuses[obsIdx] };
		return currObservation;
	});
	return (
		<div>
			<h1>Space Phenomina Tracker</h1>
			<ul>
				{spaceObservations.map((o) => <Observations name={o.name} emoji={o.emoji} status={o.status} />)}
			</ul>
		</div>
	);
}

ReactDOM.render(<App />, document.getElementById("root"));
