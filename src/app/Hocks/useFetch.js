"use client";

import { useEffect, useState } from "react";

export default function useFetch(url) {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(Boolean(url));
	const [error, setError] = useState(null);

	useEffect(() => {
		if (!url) return;
		let mounted = true;
		setLoading(true);
		setError(null);

		fetch(url)
			.then((res) => {
				if (!res.ok) throw new Error("Network response was not ok");
				return res.json();
			})
			.then((json) => {
				if (!mounted) return;
				setData(json);
			})
			.catch((err) => {
				if (!mounted) return;
				setError(err);
			})
			.finally(() => {
				if (!mounted) return;
				setLoading(false);
			});

		return () => {
			mounted = false;
		};
	}, [url]);

	return { data, loading, error };
}
