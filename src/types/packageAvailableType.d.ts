export interface IFeaturePackage {
	id: number;
	desc: string;
}
export interface IPackageAvailable {
	id: number;
	label: string;
	price: number;
	features: FeaturePackage[];
}
