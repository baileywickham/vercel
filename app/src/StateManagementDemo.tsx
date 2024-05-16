import { create } from 'zustand';

interface Store {
	count: number;
	increase: () => void;
	decrease: () => void;
	reset: () => void;
}
const useStore = create<Store>((set) => ({
	count: 0,
	increase: () => set((state) => ({ count: state.count + 1 })),
	decrease: () => set((state) => ({ count: state.count - 1 })),
	reset: () => set({ count: 0 })
}));

const StateManagementDemo = () => {
	const store = useStore();

	return (
		<div>
			<h1>Count: {store.count}</h1>
			<button className="border-green border-2 p-2" onClick={store.increase}>
				Increase
			</button>
			<button className="border-red border-2 p-2" onClick={store.decrease}>
				Decrease
			</button>
			<button className="border-2 border-white p-2" onClick={store.reset}>
				Reset
			</button>
		</div>
	);
};

export default StateManagementDemo;
