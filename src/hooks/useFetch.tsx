import { useState, useEffect } from 'react';

interface Props {
	url: string;
	status: Number;
	statusText: String;
	data: any;
	error: any;
	loading: Boolean;
}

function useFetch({ url }: Props) {
	const [status, setStatus] = useState<Number>(0);
	const [statusText, setStatusText] = useState<String>('');
	const [data, setData] = useState<any>([]);
	const [error, setError] = useState<any>(null);
	const [isLoading, setIsLoading] = useState<boolean>(false);

	useEffect(() => {
		const fetchData = async () => {
			setIsLoading(true);

			try {
				const res = await fetch(url);
				const json = await res.json();
				setStatus(res.status);
				setStatusText(res.statusText);
				setData(json);
			} catch (err) {
				setError(err);
			} finally {
				setIsLoading(false);
			}
		};

		fetchData();
	}, [url]);

	return { status, statusText, data, error, isLoading };
}

export default useFetch;
