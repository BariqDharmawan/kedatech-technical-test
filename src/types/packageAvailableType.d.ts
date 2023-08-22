export interface IFeaturePackage {
	id: number;
	desc: string;
}
export interface IPackageAvailable {
	id: number;
	title: string;
	price: number;
	features: FeaturePackage[];
}

export interface PaymentOptionPackage {
	packageId: number;
	id: number;
	name: string;
}
