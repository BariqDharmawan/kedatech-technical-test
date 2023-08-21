'use client';

import { Card } from 'flowbite-react';

const TotalProfit = ({
	profit,
	className,
}: {
	profit: number;
	className?: string;
}) => {
	return (
		<Card className={className}>
			Total Profit: Rp. {new Intl.NumberFormat().format(profit)}
		</Card>
	);
};

export default TotalProfit;
