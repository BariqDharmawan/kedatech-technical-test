const HeadSection = ({
	size = 'text-4xl',
	className = '',
	label,
}: {
	label: string;
	size?: string;
	className?: string;
}) => {
	return (
		<h1 className={`${size} font-bold text-center mb-8 ${className}`}>
			{label}
		</h1>
	);
};

export default HeadSection;
