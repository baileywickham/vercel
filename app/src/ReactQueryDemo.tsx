import { useQuery } from '@tanstack/react-query';

interface Color {
	name: string;
	hex: string;
}

type Complementary = [Color, Color, Color];

interface ColorResponse extends Color {
	comp: Complementary;
}

const endpoint = '/colors/colors.json';

const ReactQueryDemo = () => {
	const { isLoading, error, data } = useQuery<ColorResponse[]>({
		queryKey: ['colors'],
		queryFn: () => fetch(endpoint).then((res) => res.json()),
		retry: false
	});

	if (isLoading || !data) return 'Loading...';

	if (error) return 'An error has occurred: ' + error.message;

	return (
		<div className="flex flex-wrap">
			{data?.map((color, index) => (
				<div key={index} style={{ backgroundColor: color.hex, padding: 10 }}>
					<h1>{color.name}</h1>
					<p>{color.hex}</p>
					<h2>Complementary</h2>
					{color.comp.map((compColor, compIndex) => (
						<div key={compIndex} style={{ backgroundColor: compColor.hex, padding: 10 }}>
							<h1>{compColor.name}</h1>
							<p>{compColor.hex}</p>
						</div>
					))}
				</div>
			))}
		</div>
	);
};

export default ReactQueryDemo;
